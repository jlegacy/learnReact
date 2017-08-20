import React, { Component } from 'react';
import logo from '../logo.svg';
import Option from '../Option/option.component';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <p className="question"> What is the sum of 
                <span className="text-info">&nbsp;{this.props.mySums[0]}</span> and 
                <span className="text-info">&nbsp;{this.props.mySums[1]}</span>?</p>
        );
    }
}

export default Question;


