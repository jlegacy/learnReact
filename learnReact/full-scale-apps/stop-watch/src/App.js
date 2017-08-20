import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.seconds = 0;

  }

  render() {
    return (
      <div className="App">
        <Timer seconds={this.state.seconds} />
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.state.seconds = this.state.seconds + 1;
      this.setState({ seconds: this.state.seconds });
    }, 1000);
  }

}




export default App;
