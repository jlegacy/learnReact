import React, { Component } from 'react';
import logo from '../logo.svg';
import animateStyles from 'animate.css/animate.min.css';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Switch from 'react-bootstrap-switch';
import bootstrapSwitchStyles from 'react-bootstrap-switch/dist/css/bootstrap2/react-bootstrap-switch.min.css';

class ActionBar extends Component {
    constructor(props) {
        super(props);
    }

    handleSwitch(elem, state) {
        if (elem.props.name === 'letterSwitch') {
            this.props.mySetRandomLetters(state);
        }
        if (elem.props.name === 'soundSwitch') {
            this.props.mySetSound(state);
        }
    }

    render() {
        return (
            <div className="fields animated zoomIn buttons">
                <div className="random-label">Random Letters
                    <Switch onChange={(el, state) => this.handleSwitch(el, state)} defaultValue={false} name='letterSwitch' />
                </div>
                <div className="random-label">Sound
                    <Switch onChange={(el, state) => this.handleSwitch(el, state)} name='soundSwitch' />
                </div>
            </div>
        );
    }
}

export default ActionBar;


