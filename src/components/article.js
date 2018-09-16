import React, { PureComponent } from 'react'
import CommentList from './comments/comment-list'
import collapse from '../decorators/collapse'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, isOpen, isCollapse, toggleCollapse } = this.props

    const toggleCommentsBtn = (
      <button onClick={toggleCollapse}>
        {isCollapse ? 'Hide comments' : 'Show comments'}
      </button>
    )

    const articleContent = (
      <section>
        {article.text}
        {article.comments && <p>{toggleCommentsBtn}</p>}
        {isCollapse && <CommentList comments={article.comments} />}
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
}

const ArticleWithCollapse = collapse(Article)

export default ArticleWithCollapse
