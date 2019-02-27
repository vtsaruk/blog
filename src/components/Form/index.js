import React, { Component } from 'react';
import { Form, Field } from 'redux-form';

class PostFormlet extends Component {
    state = { isShow: false };

    _toggleForm = () => this.setState({ isShow: !this.state.isShow });

    _renderField = ({
        input,
        label,
        type,
        textarea,
        meta: { touched, error, warning }
    }) => (
        <div>
            <label>{label}</label>
            <div>
                {textarea ? (
                    <textarea {...input} placeholder={label} type={type} />
                ) : (
                    <input {...input} placeholder={label} type={type} />
                )}
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    );

    _onSubmit = data => {
        const { changePost, addPost, buttonOpenText, post, reset } = this.props;
        if (buttonOpenText === 'Add post') {
            addPost(data);
        } else {
            data.postId = post.id;
            changePost(data);
        }
        reset();
    };

    _renderForm = () => {
        const { handleSubmit, buttonOpenText } = this.props;
        return (
            <Form onSubmit={handleSubmit(this._onSubmit.bind(this))}>
                <div>
                    <label>Title</label>
                    <Field component={this._renderField} name="title" />
                </div>
                <div>
                    <label>Body</label>
                    <Field component={this._renderField} name="body" textarea={true} />
                </div>
                <button type="submit" className="change-post">
                    {buttonOpenText}
                </button>
            </Form>
        );
    };

    render() {
        const { isShow } = this.state;
        const { buttonOpenText } = this.props;

        return (
            <div className="post-form">
                {isShow ? (
                    this._renderForm()
                ) : (
                    <button onClick={this._toggleForm}>{buttonOpenText}</button>
                )}
            </div>
        );
    }
}

export default PostFormlet;
