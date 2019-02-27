import { takeEvery, put } from 'redux-saga/effects';
import { getPosts } from '../modules/listPosts';
import { addPost } from '../modules/post';
import axios from 'axios';

function* addPostWorker(action) {
    const { title, body } = action.payload;
    try {
        yield axios.post('https://simple-blog-api.crew.red/posts/', {
            title,
            body
        });
        yield put(getPosts());
    } catch (error) {
        console.error(error);
    }
}
export default function* addPostWatcher() {
    yield takeEvery(addPost, addPostWorker);
}
