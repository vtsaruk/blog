import { all } from 'redux-saga/effects';
import listPost from './listPost';
import post from './post';
import changePostForm from './changePost';
import addPostForm from './addPost';
import deletePost from './deletePost';

export default function* rootSaga() {
    yield all([listPost(), post(), addPostForm(), changePostForm(), deletePost()]);
}
