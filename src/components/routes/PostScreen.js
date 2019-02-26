import React, { Component } from 'react';
import Header from '../Header';
import Post from '../../redux/containers/PostContainer';
import PostForm from '../../redux/containers/FormPost';

class PostScreen extends Component {
    state = {};
    render() {
        return (
            <div>
                <Header />
                <Post />
                <PostForm />
            </div>
        );
    }
}

export default PostScreen;
