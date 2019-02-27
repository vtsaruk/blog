import { takeEvery, put } from 'redux-saga/effects';
import { getPosts, setPosts } from '../modules/listPosts';
import axios from 'axios';

function* listPostWorker() {
    try {
        const res = yield axios.get('https://simple-blog-api.crew.red/posts');
        yield put(setPosts(res.data));
    } catch (error) {
        console.error(error);
    }
}
export default function* listPostWatcher() {
    yield takeEvery(getPosts, listPostWorker);
}
