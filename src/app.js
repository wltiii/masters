import React from 'react'
import styles from './styles/main.css'
// es6 version - see appReact.js for original
// notice the use of const versus var

const Hello = React.createClass({
  render: function() {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="Billy"/>, document.body)
