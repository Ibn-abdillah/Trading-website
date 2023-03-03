import React from 'react';
import './App.css';
import Coin from './components/coin/coin';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Coin />
    </div>
  );
}

export default App;
