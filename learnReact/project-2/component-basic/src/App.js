import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.firstName = "joseph";
    this.lastName = "Legacy"
    this.state = {};

  }

                                 
  render() {
    const myName = "test";
    return (
      <div className="App">
      <h2>Just some data {this.firstName + ' ' + this.lastName} </h2>
      </div>
    );
  }
}

export default App;
