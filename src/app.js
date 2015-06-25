import Router from './router'
import styles from './styles/main.styl'
import app from 'ampersand-app'

app.extend(){
  init() {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
