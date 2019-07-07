import React from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*</header>*/}
    <Header />
    <Body />
    </div>
  );
}

export default App;
