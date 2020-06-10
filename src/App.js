import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          <span>React Components and Props By </span>
          <Link text="Muhammad Irfan Afzal" url="https://www.facebook.com/mi3afzal" />
        </h3>
        <p>
          Auto Deployment on Surge through Github actions with custome YAML config.
        </p>

        <p>
          <span>My mentors are </span>
          <Link text="Zia Khan" url="https://www.facebook.com/ziakhan" /> 
          <span> </span>
          <Link text="Aamir Pinger" url="https://www.facebook.com/aamirpinger" />
          <span> </span>
          <Link text="Ameen Alam" url="https://www.facebook.com/ameenalamofficial" />
        </p>

        <Link text="Contact me here" url="https://mi3afzal.com" />
      </header>
    </div>
  );
}

export default App;
