import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import { changePost, addPost } from '../modules/post';

const validate = values => {
    const errors = {};
    if (!values.body) {
        errors.body = 'Body is not';
    }
    if (!values.title) {
        errors.title = 'Title is not';
    }
    return errors;
};

let FormPost = reduxForm({
    form: 'post-form'
})(Form);

export default connect(
    state => ({
        initialValues: state.post.post,
        post: state.post.post,
        validate
    }),
    { changePost, addPost }
)(FormPost);
