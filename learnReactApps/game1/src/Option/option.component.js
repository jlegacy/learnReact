import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from 'animate.css/animate.min.css';

class Option extends Component {
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer = () => {
        this.props.checkResult(this.props.myOption === this.props.myAnswer ? true : false);
    }

    render() {
        return (
            <div className="fields animated zoomIn"> 
                <div onClick={this.checkAnswer} className="field-block">{this.props.myOption}</div>
            </div>
        );
    }
}

export default Option;


