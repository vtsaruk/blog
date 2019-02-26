import { createAction, handleActions } from 'redux-actions';
export const getPosts = createAction('posts/get');
export const setPosts = createAction('posts/set');

const defaultState = {
    posts: []
};

export default handleActions(
    {
        [setPosts]: (state, { payload }) => ({
            ...state,
            posts: payload
        })
    },

    defaultState
);
