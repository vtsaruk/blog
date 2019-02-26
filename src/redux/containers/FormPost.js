import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Form from '../../components/Form';

Form = reduxForm({
    form: 'post-form'
})(Form);

export default connect(
    state => ({ initialValues: state.post }),
    {}
)(Form);
