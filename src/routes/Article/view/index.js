import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header } from 'components/Header/Header'
import ReactMarkDown from 'react-markdown'
import './style.less'

export class Article extends Component {
  componentDidMount () {
    this.props.getArticle(this.props.location.query.id)
  }
  render () {
    const { article = {} } = this.props.article
    const { content = '', title } = article
    return (
      <div>
        <Header selectedKey='ARTICLE' />
        <div className='blog-container space-between'>
          <section className='article-detail'>
            <h2>{title}</h2>
            <ReactMarkDown source={content} className='markdown-body' />
          </section>
          <aside className='sort-list'>
            <h5>分类</h5>
            <ul>
              <li><Link to='/'>Node.js</Link></li>
              <li><Link to='/'>服务器</Link></li>
            </ul>
          </aside>
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  getArticle: React.PropTypes.func,
  article: React.PropTypes.object,
  location: React.PropTypes.object
}

export default Article
