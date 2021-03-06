// pages/blog.js
import React from 'react'
import {Router} from '../routes'
import withRedux from "next-redux-wrapper";
import {makeStore} from '../store/store';
import {addBlogContent} from '../store/actions';
import Link from 'next/link';

class Blog extends React.Component {

  static async getInitialProps({query, res, req, store, isServer}) {
    console.log('from server...', query);
    return {}
  }

  componentDidMount() {
    const {query} = this.props.url;
    console.log('from client...', query);
    console.log("FROM REDUX : ", this.props.blog_content);
  }

  addContent(e) {
    e.preventDefault();

    let {dispatch, blog_content} = this.props;
    if (dispatch && inputContent.value) {
      if (blog_content.findIndex(resp => resp === inputContent.value.trim()) < 0) {
        dispatch(addBlogContent([
          inputContent
            .value
            .trim(),
          ...blog_content
        ]));
      }
      inputContent.value = '';
    }

  }

  render() {
    return (
      <div>
        <h1>Blog page</h1>
        <br/>
        <form onSubmit={this
          .addContent
          .bind(this)}>
          <input id="inputContent" type="text" placeholder="enter content..."/>
          <button type="submit">Add</button>
        </form>
        {this.props.blog_content
          ? this
            .props
            .blog_content
            .map((item, key) => (
              <p key={key}>
                <b>{item}</b>
              </p>
            ))
          : ''}
        <hr/>
        <Link prefetch href="/">
          <button>Back</button>
        </Link>
      </div>
    )
  }
}

// map state to prop
Blog = withRedux(makeStore, (state) => ({foo: state.foo, blog_content: state.blog_content}))(Blog);

export default Blog;