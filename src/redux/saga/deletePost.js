import { takeEvery } from 'redux-saga/effects';
import { deletePost } from '../modules/post';
import axios from 'axios';
import history from '../../history';

function* deletePostWorker(action) {
    const id = action.payload;
    try {
        yield axios.delete('https://simple-blog-api.crew.red/posts/' + id);
        history.push('/posts');
    } catch (error) {
        console.error(error);
    }
}
export default function* deletePostWatcher() {
    yield takeEvery(deletePost, deletePostWorker);
}
