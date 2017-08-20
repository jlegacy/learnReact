import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Components Lifecycle</h2>
        </div>
        <Body />

      </div>
    );
  }
}

class Body extends Component {

  constructor(props) {
    super(props);
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.state = {};
    this.state.randomNumber = 0;
  }


  getRandomNumber = function () {

    this.setState({ randomNumber: Math.random() })
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.randomNumber}></Numbers>

      </div>
    );
  }
}



class Numbers extends Component {

  componentDidMount() {
    console.log("component did mount called here");
  }
  componentWillMount() {
    console.log("component will mount called here");
  }


  componentWillReceiveProps(newProps) {
    console.log("component will receive props called");
  }

   shouldComponentUpdate(nextProps, nextState) {
    console.log("component should update");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will mount");
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}



export default App;
