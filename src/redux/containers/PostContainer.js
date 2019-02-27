import { connect } from 'react-redux';
import component from '../../components/Post';
import { getPost, deletePost } from '../modules/post';

const mapStoreToProps = state => ({
    post: state.post.post
});

export default connect(
    mapStoreToProps,
    { getPost, deletePost }
)(component);
