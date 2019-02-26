import React, { Component } from 'react';
import Header from '../Header';
import ListPost from '../../redux/containers/ListPostContainer';

class ListPostScreen extends Component {
    state = {};

    render() {
        return (
            <div>
                <Header />
                <ListPost />
            </div>
        );
    }
}

export default ListPostScreen;
