import { takeEvery, put } from 'redux-saga/effects';
import { changePost, getPost } from '../modules/post';
import axios from 'axios';

function* listPostWorker(action) {
    const { title, body, postId } = action.payload;

    try {
        yield axios.put('https://simple-blog-api.crew.red/posts/' + postId, {
            title,
            body
        });
        yield put(getPost(postId));
    } catch (error) {
        console.error(error);
    }
}
export default function* listPostWatcher() {
    yield takeEvery(changePost, listPostWorker);
}
