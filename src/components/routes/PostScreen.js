import React, { Component } from 'react';
import Header from '../Header';
import Post from '../../redux/containers/PostContainer';
import PostForm from '../../redux/containers/FormPost';

class PostScreen extends Component {
    render() {
        return (
            <div>
                <Header />
                <Post />
                <PostForm buttonOpenText="Change post" />
            </div>
        );
    }
}

export default PostScreen;
