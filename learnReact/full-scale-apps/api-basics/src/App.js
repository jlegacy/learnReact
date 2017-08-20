import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiCall from './ApiCall'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ApiCall/>
      </div>
    );
  }
}

export default App;
