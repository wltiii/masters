import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('route: public page');
    this.renderPage(<PublicPage />, {layout: false});
  },

  repos() {
    console.log('route: repos');
    this.renderPage(<ReposPage />);
  }

})
