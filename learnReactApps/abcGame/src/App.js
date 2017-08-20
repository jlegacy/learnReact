import React, { Component } from 'react';
import logo from './logo.svg';
import Puzzle from './Puzzle/puzzle.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Easy ABC</h1>
        </div>
        <Puzzle></Puzzle>
      </div>
    );
  }
}

export default App;
