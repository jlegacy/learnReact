import React, { Component } from 'react';

var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDk6rL5l1yDecyX9R3dihO3-dAr_90s8M8",
    authDomain: "usurvey-37e8e.firebaseapp.com",
    databaseURL: "https://usurvey-37e8e.firebaseio.com",
    projectId: "usurvey-37e8e",
    storageBucket: "usurvey-37e8e.appspot.com",
    messagingSenderId: "490609648597"
};
firebase.initializeApp(config);

class Authen extends Component {

    logIn = function (event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.then((user) => {
            this.setState({ message: 'Logged In' });
            this.setState({ loggedIn: true });
        }).catch(e => {
            this.setState({ message: e.message });
        })

    }

    logInWithGoogle = function (event) {

        const auth = firebase.auth();

        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        auth.signInWithRedirect(provider);
        
    }
    logOut = function () {
        const auth = firebase.auth();
        const promise = auth.signOut();
        promise.then(() => {
            this.setState({ message: 'Logged Out' });
            this.setState({ loggedIn: false });
        }).catch(e => {
            this.setState({ message: e.message });
        })


    }
    signUp = function () {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then((user) => {
            this.setState({ message: 'Welcome-' + user.email });
            firebase.database().ref('/users' + user.uid).set({
                email: user.email
            })
            this.setState({ loggedIn: true });
        }).catch(e => {
            this.setState({ message: e.message });
        })
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.logIn = this.logIn.bind(this);
        this.logInWithGoogle = this.logInWithGoogle.bind(this);
        this.logOut = this.logOut.bind(this);
        this.signUp = this.signUp.bind(this);

        const auth = firebase.auth();
        this.setState({ loggedIn: false });
        let redirectPromise = auth.getRedirectResult();
        redirectPromise.then((result) => {
            if (result.credential) {
                let user = result.user;
                this.setState({ message: 'Logged In' });
                this.setState({ loggedIn: true });
                firebase.database().ref('/users' + user.uid).set({
                    email: user.email,
                    name: user.displayName
                })
                // This gives you a Google Access Token.
                //  var token = result.credential.accessToken;
                // The signed-in user info.
                //  var user = result.user;
                this.setState({ loggedIn: true });
            }
            else{

            }

        }).catch(e => {
            alert(e.message);
            this.setState({ message: e.message });
        });


    }

    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter Your Email" /><br />
                <input id="pass" ref="password" type="password" placeholder="Enter Your Password" /><br />
                <button className={this.state.loggedIn === true ? 'hide' : ''} onClick={this.logIn}>Login</button>

                <button className={this.state.loggedIn === false ? 'hide' : ''} onClick={this.logOut}>LogOut</button>
                <button onClick={this.signUp}>signUp</button><br />
                <button className={this.state.loggedIn === true ? 'hide' : 'google'} onClick={this.logInWithGoogle}>Login With Google</button>
                <p>{this.state.message}</p>

            </div>
        );
    }

    componentDidMount() {
        
    }

}

export default Authen;