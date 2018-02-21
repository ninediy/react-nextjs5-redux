// action
export const TYPE_ACTION = {
    BLOG_CONTENT: 'BLOG_CONTENT',
    FOO: 'FOO'
}

export const addBlogContent = (value) => {
    return {type: TYPE_ACTION.BLOG_CONTENT, payload: value};
}

export const fooAction = (value) => {
    return {type: TYPE_ACTION.FOO, payload: value};
}
