import { createAction, handleActions } from 'redux-actions';
export const getPost = createAction('post/get');
export const setPost = createAction('post/set');

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
