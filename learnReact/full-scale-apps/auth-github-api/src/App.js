import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import auth0 from 'auth0-js';
import auth0Lock from 'auth0-lock';
import Github from './Github';
import Header from './components/Header';

class App extends Component {

  authorize = function () {
    let myAuth = new auth0.WebAuth({
      domain: 'jlegacy007.auth0.com',
      clientID: 'jON10XMJFxw12I6uSVBU4oSlAKnNIN4Y',
      redirectUri: 'http://localhost:3000',
      audience: 'https://jlegacy007.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });



  }

  setProfile = function (idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({ idToken: localStorage.getItem('idToken') });
    this.setState({ profile: JSON.parse(localStorage.getItem('profile')) });
  }

  getProfile = function () {

    if (localStorage.getItem('idToken') !== null) {
      this.setState(
        {
          idToken: localStorage.getItem('idToken'),
          profile: JSON.parse(localStorage.getItem('profile'))
        }, () => {
          console.log(this.state);
        });
    }
  }

  static defaultProps = {
    domain: 'jlegacy007.auth0.com',
    clientID: 'jON10XMJFxw12I6uSVBU4oSlAKnNIN4Y'
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state.idToken = "";
    this.state.profile = {};
    this.authorize = this.authorize.bind(this);
    this.setProfile = this.setProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }


  render() {
    let gitty;
    if (this.state.idToken) {
      gitty = <Github />;
    }
    else {
      gitty = "Please Select the Login";
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header onLogin={this.showLock.bind(this)} onLogout={this.logOut.bind(this)} idToken = {this.state.idToken} lock={this.lock}/>
        {gitty}
      </div>
    );
  }

  componentDidMount() {
    this.authorize();
  }

  logOut() {
    this.setState(
      {
        idToken: '',
        profile: ''
      }, () => {
        localStorage.removeItem('idToken');
        localStorage.removeItem('profile');
      });
  }

  showLock() {
    this.lock.show();
  }

  componentWillMount() {
    this.lock = new auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          return;
        }
        if (profile) {
          this.setProfile(authResult.idToken, profile);
          return;
        }
      })
    });

    this.getProfile();
  }
}

export default App;
