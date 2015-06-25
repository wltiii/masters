import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'
import qs from 'qs'
import xhr from 'xhr'
import app from 'ampersand-app'

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
    'repos': 'repos',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query' : 'authCallback'
  },

  public () {
    console.log('route: public page');
    this.renderPage(<PublicPage />, {layout: false});
  },

  repos() {
    console.log('route: repos');
    this.renderPage(<ReposPage />);
  },

  login() {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      scope: 'user,repo',
      redirect_uri: 'http://localhost:3000' + '/auth/callback',
      client_id: 'f8dd69187841cdd22a26'
    })
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)

    xhr({
      url: 'https://labelr-localhost.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
      console.log(body)
      app.me.token = body.token
      this.redirectTo('/repos')
    })
  },

  logout() {
    window.localStorage.clear()
    window.location = '/'
  }

})
