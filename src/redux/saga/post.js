import { takeEvery, put, take } from 'redux-saga/effects';
import { getPost, setPost } from '../modules/post';
import axios from 'axios';

function* listPostWorker(state) {
    console.log('listPostWorker', state);
    const { payload } = state;

    try {
        const res = yield axios.get(
            'https://simple-blog-api.crew.red/posts/' + payload + '?_embed=comments'
        );
        yield put(setPost(res.data));
    } catch (error) {
        console.error(error);
    }
}
export default function* listPostWatcher() {
    yield takeEvery(getPost, listPostWorker);
}
