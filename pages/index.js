import React from 'react'
import {Router} from '../routes'
import withRedux from "next-redux-wrapper";
import {makeStore} from '../store/store'

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/

class Page extends React.Component {
  static getInitialProps({store, isServer, pathname, query}) {
    store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
    return {custom: 'custom'}; // you can pass some custom props to component from here
  }

  handleClick() {
    // With route name and params
    Router.pushRoute('blog', {slug: 'hello-world'})
    // With route URL Router.pushRoute('/blog/hello-world')
  }

  componentDidMount = () => {
    console.log(this.props.url.pathname);
  }

  render() {
    return (
      <div>
        <div>
          <b>Path : {this.props.url.pathname}</b>
        </div>
        <div>
          <b>Prop from Redux</b>
          : {this.props.foo}</div>
        <div>
          <b>Prop from getInitialProps</b>
          : {this.props.custom}</div>

        <pre>
          {this.props.blog_content}
       </pre>

        <button onClick={this.handleClick}>go to blog</button>
      </div>
    )
  }

}

Page = withRedux(makeStore, (state) => ({foo: state.foo, blog_content: state.blog_content}))(Page);

export default Page;