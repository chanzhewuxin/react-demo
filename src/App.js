import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './demo1';
import Demo3 from './demo3';
import { CombineComponent, CombineComponentChild } from "./CombineComponent";

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
        <Demo3 />

        <CombineComponent left={<div><span>左边内容</span></div>} right={<span>右边内容</span>} />
        <CombineComponentChild>
          <div><span style={{ color: 'red' }}>子内容</span></div>
        </CombineComponentChild>
      </div>
    );
  }
}

export default App;
