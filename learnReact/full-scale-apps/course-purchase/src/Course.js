import React, { Component } from 'react';

class Course extends Component {
   clicker = function(){
        let active = !this.state.active;
        this.setState({active: active});
        this.props.sumPrice(active ? this.props.price : -this.props.price);
    }

    constructor(props) {
        super(props);
        this.state = {active: false}
        this.clicker = this.clicker.bind(this);
    }
    
    render() {
        return (
            <div>
                <p className= {this.state.active ? 'active' : 'inactive'} onClick={this.clicker}>Course: {this.props.course}  Price: {this.props.price}</p>
            </div>
        );
    }
}

export default Course;
