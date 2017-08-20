import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.firstName = "joseph";
    this.lastName = "Legacy"
    this.testCar = "corvette";

  }


  render() {
    return (
      <div className="App">
        <h2>Just some data {this.firstName + ' ' + this.lastName} </h2>
        <h3> {this.props.propNumber}</h3>
        <h3> {this.props.propString}</h3>
        <h3> {this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}


App.propTypes = {
  propObject: React.PropTypes.object,
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "this is prop string",
  propObject: {
    obj1: "object1",
    obj2: "object2",
    obj3: "object3"
  }
}

class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.cars = ['s-bmw', 's-merc', 's-city'];
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick = function(){

   this.setState({ cars: this.state.cars.reverse()})

 }

  // console.log(this.state);
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Cars msg="Cars are cool" carName={this.testCar} coolCars={this.state.cars} />
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['bmw', 'merc', 'city']
}

class Cars extends Component {
  render() {
    return (
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <div>{this.props.coolCars.map((item, i) => {
          return <p key={i}>{item}</p>
        })}</div>

      </div>
    );
  }
}



export default App;
