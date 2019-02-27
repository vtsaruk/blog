import React, { Component } from 'react';
import history from '../../history';

class Post extends Component {
    state = {};

    componentDidMount() {
        const id = history.location.pathname.split('/')[2];
        this.props.getPost(id);
    }

    render() {
        const {
            post: { title, body, comments, id },
            deletePost
        } = this.props;

        return (
            <article className="post">
                <p className="title">Title: {title}</p>
                <p className="body">Text: {body}</p>
                <p>Comments:</p>
                <ul className="comments">
                    {comments &&
                        comments.map(comment => (
                            <div className="comments" key={comment.id}>
                                <p className="text">{comment.body}</p>
                            </div>
                        ))}
                </ul>
                <button onClick={() => deletePost(id)}>Delete post</button>
            </article>
        );
    }
}

export default Post;
