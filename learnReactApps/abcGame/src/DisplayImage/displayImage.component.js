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
                <div className="field-block col-sm-12">
                    <div className="word col-sm-6">
                    {this.props.myImage ? (
                        <img className="letter-image" src={this.props.myImage} />
                    ) : (
                            <h4>Press Next to See Image</h4>
                        )}
                        </div>

                    <div className="word col-sm-6">
                        {this.props.myWord ? (
                            this.props.myWord
                        ) : (
                                <h4>Press Next to See Word</h4>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayLetter;


