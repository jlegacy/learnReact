import React, { Component } from 'react';

class Search extends Component {
    submit = function(event){
        event.preventDefault();
        let value = this.refs.userName.value;
        this.props.searchProfile(value);
        this.refs.userName.value = "";
    }
    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.submit.bind(this)}>
                <label>
                    <input type = "search" ref="userName" placeholder="Type User Name"/>
                </label>
                </form>
            </div>
        );
    }
}

export default Search;