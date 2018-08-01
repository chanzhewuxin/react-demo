import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './demo1';
import demo3 from './demo3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Welcome />
        <demo3 />
      </div>
    );
  }
}

export default App;
