import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import USurvey from './USurvey';
import { Link } from 'react-router-dom';
import One from './One';
import Two from './Two';
import Three from './Three';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <USurvey />
        <ul>
          <li><Link to="/One">Link to Page One</Link></li>
          <li><Link to="/Two">Link to Page Two</Link></li>
          <li><Link to="/Three">Link to Page Three</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
