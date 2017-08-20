import React, { Component } from 'react';
import logo from '../logo.svg';
import Option from '../Option/option.component';
import Question from '../Question/question.component';
import classNames from 'classnames/bind';
import styles from 'animate.css/animate.min.css';

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.playAgain = this.playAgain.bind(this);
        this.numberOfOptions = 4;
        this.state = {
            gameOver: false,
            wrongAnswer: false
        };

    }

    playAgain = (e) => {
        e.preventDefault();
        this.playGame(this.numberOfOptions);
        this.forceUpdate();
    }

    getRandomNumber = (number) => {
        //check duplicates//
        return Math.floor((Math.random() * number) + 1)
    }

    generateRandomOptions = (number, riddle) => {
        //check duplicates//
        let duplicate = false;
        let randomNumber = this.getRandomNumber(number);
        do {
            duplicate = false;
            for (let z in riddle.options) {
                if (riddle.options[z] === randomNumber) {
                    duplicate = true;
                    randomNumber = this.getRandomNumber(number);
                }
            }

        } while (duplicate === true);

        return randomNumber;
    }

    playGame = (optionsCount) => {

        let riddle =
            {
                options: [],
                sums: [],
                answer: 0
            };

        for (let x = 0; x < optionsCount; x++) {
            riddle.options.push(0);
        };

        //fill up riddle info//

        //set sums//
        riddle.sums.push(this.getRandomNumber(20));
        riddle.sums.push(this.getRandomNumber(20));

        //set answer
        riddle.answer = riddle.sums[0] + riddle.sums[1];

        //fill remaining array//
        for (let z in riddle.options) {
            riddle.options[z] = (z === "0" ? riddle.answer : this.generateRandomOptions(40, riddle));
        }

        //randomly shuffle
        riddle.options.sort(function (a, b) {
            return 0.5 - Math.random();
        })

        this.state = { riddle };
    }

    checkResult = (match) => {
        if (match === false) {
            this.setState({ wrongAnswer: true })
        }
        else {
            this.setState({ gameOver: true });
        }

    }

    renderMessage = () => {
        if (this.state.wrongAnswer)
            return <h3>Wrong Answer, Hit the button below to play again</h3>
        return <h3>Correct Answer, Hit the button below to play again</h3>
    }

    render() {

        let msgClass = classNames({
            'after' : true,
            'correct animated tada' : this.state.gameOver,
            'wrong animated headShake' : this.state.wrongAnswer,
            'hide' : !this.state.wrongAnswer && !this.state.gameOver
        })

        return (
            <div className="quiz">
                <div className="quiz-content">
                    <Question mySums={this.state.riddle.sums} />
                    <div className="options">
                        {this.state.riddle.options.map((item, i) => {
                            return <Option checkResult={this.checkResult} myAnswer={this.state.riddle.answer} key={i} myOption={item} />
                        })}
                    </div>
                </div>
                <div className={msgClass}>{this.renderMessage()}</div>
                <div className="play-again"><a onClick={this.playAgain} href="#" className="button">Play Again</a></div>
            </div>
        );
    }

    componentWillMount() {
        this.playGame(this.numberOfOptions);
    }

}

export default Quiz;


