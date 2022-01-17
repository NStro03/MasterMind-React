import React from 'react';

// Local Imports
import Footer from './Components/Footer';
import Header from './Components/Header';
import Rules from './Components/Rules';
import Game from './Components/Game';
import "./App.css"

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Rules />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
