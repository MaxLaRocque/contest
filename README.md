# Contest Betting App

A Progressive Web App (PWA) for contest betting, built with React and Supabase.

## Features

- **Board**: View current contest standings and available picks
- **My Picks**: Manage your personal contest picks
- **All Picks**: View picks from all participants
- **Admin**: Administrative panel for managing contests
- **PWA Support**: Install and use offline with service worker
- **Supabase Integration**: Backend database and authentication

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaxLaRocque/contest.git
   cd contest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update the values with your Supabase credentials:
     ```
     REACT_APP_SUPABASE_URL=your-supabase-project-url
     REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
     REACT_APP_API_KEY=your-api-key-here
     ```

4. **Run the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to GitHub Pages

1. **Build and deploy**
   ```bash
   npm run deploy
   ```

This will build the app and deploy it to GitHub Pages at `https://MaxLaRocque.github.io/contest`

## Project Structure

```
contest/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── src/
│   ├── components/
│   │   ├── Board.js       # Contest board component
│   │   ├── MyPicks.js     # User picks component
│   │   ├── AllPicks.js    # All picks component
│   │   └── Admin.js       # Admin panel component
│   ├── App.js             # Main app component
│   ├── App.css            # App styles
│   ├── index.js           # Entry point
│   └── supabaseClient.js  # Supabase configuration
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
└── webpack.config.js     # Webpack configuration
```

## Technologies

- **React 18**: UI framework
- **Supabase**: Backend as a service
- **Webpack**: Module bundler
- **Babel**: JavaScript compiler
- **Service Worker**: Offline support
- **gh-pages**: GitHub Pages deployment

## License

ISC
