import React, { Component } from 'react'
import { Header } from 'components/Header/Header'
import { PanelDetail } from 'components/Panel/index'
import './style.less'

export class Detail extends Component {
  componentDidMount () {
    this.props.getArticle(this.props.location.query.id)
  }
  render () {
    const { article } = this.props.article
    const { title, tags, content, author, commentCount = 2, points = 4, modified } = article
    return (
      <div>
        <Header />
        <div className='blog-container article-detail'>
          <PanelDetail
            title={title}
            time={modified}
            tags={tags}
            content={content}
            author={author}
            commentCount={commentCount}
            points={points}
          />
        </div>
      </div>
    )
  }
}

Detail.propTypes = {
  getArticle: React.PropTypes.func,
  article: React.PropTypes.object,
  location: React.PropTypes.object
}

export default Detail
