import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import posts from '../modules/listPosts';
import post from '../modules/post';

export default combineReducers({
    posts,
    post,
    form
});
