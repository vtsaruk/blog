import { all } from 'redux-saga/effects';
import listPost from './listPost';
import post from './post';

export default function* rootSaga() {
    yield all([listPost(), post()]);
}
