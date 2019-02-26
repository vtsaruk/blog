import React, { Component } from 'react';
import { Form, Field } from 'redux-form';

let PostFormlet = props => {
    const { handleSubmit, submit, initialValues } = this.props;
    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <Field component="input" name="title" />
            </div>
            <div>
                <label>Body</label>
                <Field component="textarea" name="body" />
            </div>
            <button type="button" className="change-post">
                Change post
            </button>
        </Form>
    );
};

export default PostFormlet;
