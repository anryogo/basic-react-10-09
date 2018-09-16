import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div>
        <div>{comment.text}</div>
        <footer>
          <b>{comment.user}</b>
        </footer>
      </div>
    )
  }
}

export default Comment
