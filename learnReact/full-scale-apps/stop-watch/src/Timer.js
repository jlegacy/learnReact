import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div>
              <p>You have been on this site since </p>
              <br/>
              <span>{this.props.seconds}</span>
              <p>Seconds</p>
            </div>
        );
    }
}

export default Timer;