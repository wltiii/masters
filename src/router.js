import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('route: public page');
    React.render(<PublicPage />, document.body);
  },

  repos() {
    console.log('route: repos');
    React.render(<ReposPage />, document.body);
  }

})
