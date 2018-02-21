import {createStore} from "redux";

let default_state = {
  foo: '',
  blog_content: []
}

// reducer
const reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'FOO':
      return {
        ...state,
        foo: action.payload
      };
    case 'BLOG_CONTENT':
      return {
        ...state,
        blog_content: action.payload
      }
    default:
      return state
  }
};

// action
export const addBlogContent = (value) => {
  return {type: 'BLOG_CONTENT', payload: value};
}

export const fooAction = (value) => {
  return {type: 'FOO', payload: value};
}

export const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};