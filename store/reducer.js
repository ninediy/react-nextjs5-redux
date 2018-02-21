import {TYPE_ACTION} from './actions';

let default_state = {
    foo: '',
    blog_content: []
}

// reducer
export const reducer = (state = default_state, action) => {
    switch (action.type) {
        case TYPE_ACTION.FOO:
            return {
                ...state,
                foo: action.payload
            };
        case TYPE_ACTION.BLOG_CONTENT:
            return {
                ...state,
                blog_content: action.payload
            }
        default:
            return state
    }
};