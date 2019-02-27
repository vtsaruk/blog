import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './scss/style.scss';
class Header extends Component {
    state = {};
    render() {
        return (
            <header>
                <Link to="/posts">List posts</Link>
            </header>
        );
    }
}

export default Header;
