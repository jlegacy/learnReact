import React, { Component } from 'react';
let firebase = require('firebase');
let uuid = require('uuid');

var config = {
    apiKey: "AIzaSyDk6rL5l1yDecyX9R3dihO3-dAr_90s8M8",
    authDomain: "usurvey-37e8e.firebaseapp.com",
    databaseURL: "https://usurvey-37e8e.firebaseio.com",
    projectId: "usurvey-37e8e",
    storageBucket: "usurvey-37e8e.appspot.com",
    messagingSenderId: "490609648597"
};
firebase.initializeApp(config);


class USurvey extends Component {

    nameSubmit = function () {

        let studentName = this.refs.name.value;
        this.setState({ studentName: studentName }, function () {
            console.log(this.state);
        });

    }

    questionSubmit = function () {
        firebase.database().ref('uSurvey/' + this.state.uid).set({
            studentName : this.state.studentName,
            answers : this.state.answers
        })
        this.setState({ isSubmitted: true });
    }

    answerSelected = function (event) {
        let answers = this.state.answers;
        if (event.target.name === 'answer1')
            answers.answer1 = event.target.value;
        if (event.target.name === 'answer2')
            answers.answer2 = event.target.value;
        if (event.target.name === 'answer3')
            answers.answer3 = event.target.value;

        this.setState({ answers: answers }, function () {
            console.log(this.state);
        })
    }


    constructor(props) {
        super(props);
        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: '',
            },
            isSubmitted: false
        };

        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);


    }



    render() {
        let studentName;
        let questions;
        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hey Student let us know your name:</h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="test" placeholder="Enter Your Name" ref="name" />
                </form>
            </div>;
            questions = '';
        }
        else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <h1>Welcome to U-Survey, {this.state.studentName}</h1>;
            questions = <div>
                <h2>Here are some questions</h2>
                <form onSubmit={this.questionSubmit}>
                    <div className="card">
                        <label>What kind of courses you like the most</label><br />
                        <input onChange={this.answerSelected} type="radio" name="answer1" value="Technology" />Technology
                        <input onChange={this.answerSelected} type="radio" name="answer1" value="Design" />Design
                        <input onChange={this.answerSelected} type="radio" name="answer1" value="Marketing" />Marketing
                    </div>
                    <div className="card">
                        <label>You are a:</label><br />
                        <input onChange={this.answerSelected} type="radio" name="answer2" value="Student" />Student
                        <input onChange={this.answerSelected} type="radio" name="answer2" value="InJob" />In Job
                        <input onChange={this.answerSelected} type="radio" name="answer2" value="LookingJob" />Looking Job
                    </div>
                    <div className="card">
                        <label>Is online learning helpful:</label><br />
                        <input onChange={this.answerSelected} type="radio" name="answer3" value="Yes" />Yes
                        <input onChange={this.answerSelected} type="radio" name="answer3" value="No" />No
                        <input onChange={this.answerSelected} type="radio" name="answer3" value="Maybe" />Maybe
                    </div>
                   
                     <div className="card">
                        <label>I find the exercises in this training to be robust and useful:</label><br />
                        <input onChange={this.answerSelected} type="radio" name="answer4" value="Yes" />Yes
                        <input onChange={this.answerSelected} type="radio" name="answer4" value="No" />No
                        <input onChange={this.answerSelected} type="radio" name="answer4" value="Maybe" />Maybe
                    </div>
                    <div className="card">
                        <label>This training will help me be successful in ReactJS:</label><br />
                        <input onChange={this.answerSelected} type="radio" name="answer5" value="Yes" />Yes
                        <input onChange={this.answerSelected} type="radio" name="answer5" value="No" />No
                        <input onChange={this.answerSelected} type="radio" name="answer5" value="Maybe" />Maybe
                    </div>
                    <input className="feedback-button" type="submit" value="Submit" />
                </form>
            </div>

        } else if (this.state.isSubmitted === true && this.state.studentName !== '') {
            studentName = <h1> Thanks, {this.state.studentName}</h1>
        }
        return (
            <div>
                {studentName}
                -----------------------------------
               {questions}
            </div>
        );
    }
}

export default USurvey;