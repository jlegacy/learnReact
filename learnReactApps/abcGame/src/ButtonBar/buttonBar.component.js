import React, { Component } from 'react';
import logo from '../logo.svg';
import animate from 'animate.css/animate.min.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.myMove = this.myMove.bind(this);
        this.myReplaySound = this.myReplaySound.bind(this);
    }

    myMove = (e) => {
        this.props.myMove(e.target.value);
    }

    myReplaySound = () => {
        this.props.myReplaySound();
    }

    render() {
        return (
            <div className="fields animated zoomIn buttons">
                <ButtonToolbar>
                    <Button onClick={this.myMove} disabled={this.props.randomLettersDisabled} className="button" bsSize="large" value="previous" active>Previous</Button>
                    <Button onClick={this.myReplaySound} className="button" bsStyle="success" bsSize="large" active>Play Sound Again</Button>
                    <Button onClick={this.myMove} className="button" bsSize="large" value="next" bsStyle="primary" active>Next</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ButtonBar;


