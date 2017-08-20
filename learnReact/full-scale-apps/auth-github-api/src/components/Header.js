import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    onLogin = function () {
        this.props.onLogin();
    }
    onLogout = function () {
        this.props.onLogout();
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let item;
        if (this.props.idToken === '') {
            item = <NavItem onClick={this.onLogin.bind(this)} href='#'>Login</NavItem>
        }
        else {

            item = <NavItem onClick={this.onLogout.bind(this)} href="#">Logout</NavItem>
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        GitHub Searcher
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {item}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;