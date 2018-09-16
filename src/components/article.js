import React, { PureComponent } from 'react'
import CommentList from './comments/comment-list'

class Article extends PureComponent {
  state = {
    commentsShown: false
  }

  render() {
    console.log('---', 'rendering')
    const { article, isOpen } = this.props

    const toggleCommentsBtn = (
      <button onClick={this.toggleComments}>
        {this.state.commentsShown ? 'Hide comments' : 'Show comments'}
      </button>
    )

    const articleContent = (
      <section>
        {article.text}
        {article.comments && <p>{toggleCommentsBtn}</p>}
        {this.state.commentsShown && (
          <CommentList comments={article.comments} />
        )}
      </section>
    )

    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {isOpen && articleContent}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id)

  toggleComments = () => {
    this.setState({
      commentsShown: !this.state.commentsShown
    })
  }
}

export default Article
