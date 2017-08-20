import React, { Component } from 'react';
import logo from '../logo.svg';
import Option from '../Option/option.component';
import Question from '../Question/question.component';
import DisplayLetter from '../DisplayLetter/displayLetter.component';
import DisplayImage from '../DisplayImage/displayImage.component';
import ButtonBar from '../ButtonBar/buttonBar.component';
import ActionBar from '../ActionBar/actionBar.component';
import classNames from 'classnames/bind';
import Sound from 'react-sound';
import styles from 'animate.css/animate.min.css';
import alphabets from '../alphabets.json';

class Puzzle extends Component {

    constructor(props) {
        super(props);
        this.move = this.move.bind(this);
        this.replaySound = this.replaySound.bind(this);
        this.alphabetIndex = 0;
        this.stepCount = 1;
        this.priorDirection = 'next';
        this.alphabet = alphabets;
        this.state = {
            sound: true,
            randomLetters: false,
            alphabetInstance: this.alphabet[this.alphabetIndex],
            playLetter: "STOPPED",
            playWord: "STOPPED",
            showImage: null,
            showWord: null,
            showLetter: null
        };
    }

    move = (direction) => {

        if (direction === 'next') {
            this.stepCount = this.stepCount === 3 ? 1 : this.stepCount += 1;
        }
        if (direction === 'previous') {
            this.stepCount = 1;
        }

        if (this.stepCount === 1) {
            if (this.state.randomLetters === false) {
                if (direction === 'next')
                    this.alphabetIndex = this.alphabetIndex >= 25 ? 0 : this.alphabetIndex += 1;
                if (direction === 'previous')
                    this.alphabetIndex = this.alphabetIndex <= 0 ? 25 : this.alphabetIndex -= 1;
            }
            else {
                this.alphabetIndex = Math.floor((Math.random() * 26));
            }

            this.showLetter();
            this.playLetter();
        }

        if (this.stepCount === 2) {
            this.showImage();
            this.playWord();
        }


        if (this.stepCount === 3) {
            this.showWord();
            this.playWord();
        }


        this.priorDirection = direction;
    }

    showLetter = () => {
        this.setState({
            showLetter: this.alphabet[this.alphabetIndex].letter,
            alphabetInstance: this.alphabet[this.alphabetIndex],
            showImage: null,
            showWord: null
        });
    }

    playLetter = () => {
        this.resetSound();
        if (this.state.sound) {
            setTimeout(() => {
                this.setState({
                    playWord: "STOPPED",
                    playLetter: "PLAYING"
                });
            }, 0)
        }
    }


    showImage = () => {
        this.setState({
            showImage: this.alphabet[this.alphabetIndex].image,
        });
    }

    showWord = () => {
        this.setState({
            showWord: this.alphabet[this.alphabetIndex].word,
        });
    }

    playWord = () => {
        this.resetSound();
        if (this.state.sound) {
            setTimeout(() => {
                this.setState({
                    playWord: "PLAYING",
                    playLetter: "STOPPED"
                });
            }, 0)
        }

    }

    resetSound = () => {
        this.setState({
            playWord: "STOPPED",
            playLetter: "STOPPED"
        });
    }

    replaySound = () => {
        this.resetSound();
        this.setState({
            playWord: "PLAYING",
            playLetter: "STOPPED"
        })
    }

    setRandomLetters = (doIt) => {
        this.resetSound();
        this.setState({
            randomLetters: doIt
        })
    }
    setSound = (doIt) => {
        this.resetSound();
        this.setState({
            sound: doIt
        })
    }

    render() {

        return (
            <div className="game">

                <div className="options">
                    <ActionBar mySetRandomLetters={this.setRandomLetters} mySetSound={this.setSound}></ActionBar>
                    <DisplayLetter myLetter={this.state.showLetter}></DisplayLetter>
                    <ButtonBar playAgainDisabled={this.state.sound} randomLettersDisabled={this.state.randomLetters} myMove={this.move} myReplaySound={this.replaySound}></ButtonBar>
                    <Sound url={this.state.alphabetInstance.letterSound} playStatus={this.state.playLetter} ></Sound>
                    <Sound url={this.state.alphabetInstance.wordSound} playStatus={this.state.playWord}></Sound>
                    <DisplayImage myImage={this.state.showImage} myWord={this.state.showWord} ></DisplayImage>
                </div>

            </div>
        );
    }

    componentDidMount() {
        this.showLetter();
        this.playLetter();
    }
}

export default Puzzle;


