import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Router Class</h2>
        </div>

        <ul>
          <li><Link to="/One">Link to Page One</Link></li>
          <li><Link to="/Two">Link to Page Two</Link></li>
          <li><Link to="/Three">Link to Page Three</Link></li>
          <li><Link to="/Four">Link to Page Four</Link></li>
          <li><Link to="/NoMatch">Link to No Match</Link></li>
        </ul>

      </div>
    );
  }
}

export default App;
