import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Four extends Component {
    render() {
        return (
            <div>
                <div>
                    Four!!
            </div>
                <ul>
                    <li><Link to="/Four/123">Link to Four Point One</Link></li>
                </ul>
            </div>
        );
    }
}

export default Four;