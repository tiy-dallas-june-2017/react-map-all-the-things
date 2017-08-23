import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NumberComponent from './NumberComponent.js';
import StringComponent from './StringComponent.js';
import ObjectArrayComponent from './ObjectArrayComponent.js';
import SeleucidsComponent from './SeleucidsComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <NumberComponent />
          <StringComponent />
          <ObjectArrayComponent />
          <SeleucidsComponent />
        </div>
      </div>
    );
  }
}

export default App;
