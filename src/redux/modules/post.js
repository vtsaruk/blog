import { createAction, handleActions } from 'redux-actions';
export const getPost = createAction('post/get');
export const setPost = createAction('post/set');
export const changePost = createAction('post/change');
export const deletePost = createAction('post/delete');
export const addPost = createAction('post/create');

const defaultState = {
    post: {}
};

export default handleActions(
    {
        [setPost]: (state, { payload }) => ({
            ...state,
            post: payload
        })
    },

    defaultState
);
