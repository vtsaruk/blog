import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ListPost extends Component {
    state = {};

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;
        return (
            <ul className="list-post">
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={'/posts/' + post.id}>
                            <p className="title">{post.title}</p>
                            <p className="body">{post.body}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default ListPost;
