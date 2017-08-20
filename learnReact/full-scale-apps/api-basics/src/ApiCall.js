import React, { Component } from 'react';
var request = require('superagent');

class ApiCall extends Component {
    getReddit = function () {
        let space = this.state.subr;

        request.get(`http://www.reddit.com/r/` + this.state.subr + `.json`)
            .end((err, res) => {
                const posts = res.body.data.children.map(obj => obj.data);
                this.setState({ posts: posts });
            });

    }
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            subr: 'space'
        };

        this.getReddit = this.getReddit.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{`/r/`+this.state.subr}</h1>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }

    componentWillMount() {
        this.getReddit();

    }
}

export default ApiCall;