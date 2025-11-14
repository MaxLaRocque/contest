import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Admin() {
  const [loading, setLoading] = useState(false);

  const fetchOdds = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_API_KEY || '114774ab16f6fe936c0a8ae84598b68d';
      
      // Fetch NFL and NCAAF odds from The Odds API
      const sports = ['americanfootball_nfl', 'americanfootball_ncaaf'];
      const allGames = [];

      for (const sport of sports) {
        const response = await fetch(
          `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${apiKey}&regions=us&markets=h2h&oddsFormat=american`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch ${sport} odds: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Transform data to match our database schema
        for (const game of data) {
          const homeTeam = game.home_team;
          const awayTeam = game.away_team;
          
          // Get the first bookmaker's odds (if available)
          let oddsHome = null;
          let oddsAway = null;
          
          if (game.bookmakers && game.bookmakers.length > 0) {
            const bookmaker = game.bookmakers[0];
            const h2hMarket = bookmaker.markets.find(m => m.key === 'h2h');
            
            if (h2hMarket) {
              const homeOutcome = h2hMarket.outcomes.find(o => o.name === homeTeam);
              const awayOutcome = h2hMarket.outcomes.find(o => o.name === awayTeam);
              
              oddsHome = homeOutcome ? homeOutcome.price : null;
              oddsAway = awayOutcome ? awayOutcome.price : null;
            }
          }

          allGames.push({
            sport: sport,
            home_team: homeTeam,
            away_team: awayTeam,
            odds_home: oddsHome,
            odds_away: oddsAway,
            commence_time: game.commence_time
          });
        }
      }

      // Store games in Supabase
      const { data, error } = await supabase
        .from('games')
        .insert(allGames);

      if (error) {
        throw error;
      }

      alert(`Successfully fetched and stored ${allGames.length} games!`);
    } catch (error) {
      console.error('Error fetching odds:', error);
      alert(`Failed to fetch odds: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <p>Manage contest settings and participants.</p>
      <div className="admin-content">
        <button 
          onClick={fetchOdds} 
          disabled={loading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {loading ? 'Fetching...' : 'Fetch Odds'}
        </button>
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Note: Make sure you have created the 'games' table in your Supabase dashboard with the following columns:
          <br />
          - id (uuid, primary key)
          <br />
          - sport (text)
          <br />
          - home_team (text)
          <br />
          - away_team (text)
          <br />
          - odds_home (numeric)
          <br />
          - odds_away (numeric)
          <br />
          - commence_time (timestamptz)
        </p>
      </div>
    </div>
  );
}

export default Admin;
