import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from 'animate.css/animate.min.css';

class DisplayLetter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fields animated zoomIn"> 
                <div className="field-block">{this.props.myLetter}</div>
            </div>
        );
    }
}

export default DisplayLetter;


