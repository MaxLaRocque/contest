import React, { useState } from 'react';
import Board from './components/Board';
import MyPicks from './components/MyPicks';
import AllPicks from './components/AllPicks';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('board');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Contest Betting App</h1>
        <nav className="tab-nav">
          <button 
            className={activeTab === 'board' ? 'active' : ''} 
            onClick={() => setActiveTab('board')}
          >
            Board
          </button>
          <button 
            className={activeTab === 'mypicks' ? 'active' : ''} 
            onClick={() => setActiveTab('mypicks')}
          >
            My Picks
          </button>
          <button 
            className={activeTab === 'allpicks' ? 'active' : ''} 
            onClick={() => setActiveTab('allpicks')}
          >
            All Picks
          </button>
          <button 
            className={activeTab === 'admin' ? 'active' : ''} 
            onClick={() => setActiveTab('admin')}
          >
            Admin
          </button>
        </nav>
      </header>
      <main className="app-main">
        {activeTab === 'board' && <Board />}
        {activeTab === 'mypicks' && <MyPicks />}
        {activeTab === 'allpicks' && <AllPicks />}
        {activeTab === 'admin' && <Admin />}
      </main>
    </div>
  );
}

export default App;
