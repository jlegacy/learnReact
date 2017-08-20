import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.courses = [
      { name: 'Complete course1', price: 199 },
      { name: 'Complete course2', price: 299 },
      { name: 'Complete course3', price: 399 },
      { name: 'Complete course4', price: 499 },
      { name: 'Complete course5', price: 599 },
    ];

  }

  render() {
  
    return (
      <div className="App">
        <h2>Welcome to Course Purchase Page</h2>
        <CourseSales courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
