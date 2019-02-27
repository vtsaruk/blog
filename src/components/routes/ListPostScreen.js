import React, { Component } from 'react';
import Header from '../Header';
import ListPost from '../../redux/containers/ListPostContainer';
import PostForm from '../../redux/containers/FormPost';

class ListPostScreen extends Component {
    state = {};

    render() {
        return (
            <div>
                <Header />
                <ListPost />
                <PostForm buttonOpenText="Add post" />
            </div>
        );
    }
}

export default ListPostScreen;
