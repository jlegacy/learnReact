import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  this.tick = this.tick.bind(this);
  this.testAlert = this.testAlert.bind(this);
    this.time = 0;
  }

  tick = function () {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.time} 
        </p>
        <Header></Header>
        <h4 onClick={this.testAlert}>Hello!</h4>
      </div>

    );
  }

  testAlert() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
     this.tick();
    }, 1000);
  }

componentWillUnmount() {
  clearInterval(this.timer);
}


}

export default App;
