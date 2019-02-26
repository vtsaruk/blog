import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';

class Post extends Component {
    state = {};

    componentDidMount() {
        const id = history.location.pathname.split('/')[2];
        this.props.getPost(id);
    }

    render() {
        const { title, body, comments } = this.props.post;

        return (
            <article className="post">
                <p className="title">{title}</p>
                <p className="body">{body}</p>
                <ul className="comments">
                    {comments &&
                        comments.map(comment => (
                            <div className="comments" key={comment.id}>
                                <p className="text">{comment.body}</p>
                            </div>
                        ))}
                </ul>
            </article>
        );
    }
}

export default Post;
