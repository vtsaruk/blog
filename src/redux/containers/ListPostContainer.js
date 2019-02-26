import { connect } from 'react-redux';
import component from '../../components/ListPost';
import { getPosts } from '../modules/listPosts';

const mapStoreToProps = state => ({
    posts: state.posts.posts
});
export default connect(
    mapStoreToProps,
    { getPosts }
)(component);
