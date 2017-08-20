import React, { Component } from 'react';
import Course from './Course'

class CourseSales extends Component {
    
    sumPrice = function (price) {
        this.setState({ total: this.state.total + price })
    }
   
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };

        this.sumPrice = this.sumPrice.bind(this);
    }


    render() {
       let courses =  this.props.courses.map((item, i) => {
            return (<Course course={item.name} price={item.price} key={i} sumPrice = {this.sumPrice} active={item.active}/>);
        });
        return (
            <div>
               <h1>You can buy courses:</h1>
               <div id="courses">{courses}</div>
               <div id="total"><b>{this.state.total}</b></div>
            </div>
        );
    }

}


export default CourseSales;