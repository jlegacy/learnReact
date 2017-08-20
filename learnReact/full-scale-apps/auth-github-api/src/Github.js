import React, { Component } from 'react';
import Profile from './components/Profile';
import Search from './components/Search';

const API = "https://api.github.com/users"

class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'jlegacy',
            name: '',
            avatar: '',
            repos: '',
            followers: '',
            following: '',
            homeURL: '',
            notFound: ''
        };
    }

    getProfile = function (userName) {
        let finalURL = `${API}/${userName}`;

        fetch(finalURL)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userName: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeURL: data.html_url,
                    notFound: data.message
                })
            })
            .catch(error => console.log('There was an error fetching data-' + error ));
    }

    componentDidMount() {
        this.getProfile(this.state.userName);
    }
    

    render() {
        return (
            <div>
               <section id = "card">
                    <Search searchProfile = {this.getProfile.bind(this)}/>
                    <Profile userData={this.state}/>
               </section>

            </div>
        );
    }
}

export default Github;