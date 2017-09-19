import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header } from 'components/Header/Header'
import ReactMarkDown from 'react-markdown'
import './style.less'

export class Home extends Component {
  componentDidMount () {
    this.props.getArticleList()
  }

  render () {
    const { home, createArticle } = this.props
    const { articleList = [] } = home
    const list = []

    articleList.map((item, index) => {
      list.push(
        <li className='article-tiem' key={index}>
          <header className='space-between'>
            <Link to={{ pathname: '/article', query: { id: item._id } }}>{item.title}</Link>
            <p><span className='time'>{item.modified}</span><span className='label'>服务器</span></p>
          </header>
          <ReactMarkDown source={item.description} className='markdown-body' />
          <footer className='space-between'>
            <p>作者：<Link to='/'>{item.author}</Link></p>
            <p>
              <span className='comment'><Link to='/'>评论</Link>(12)</span>
              <span className='spot'>点击量(222)</span>
            </p>
          </footer>
        </li>
      )
    })
    return (
      <div>
        <Header title='全栈之路' />
        <button onClick={createArticle}>发布文章({articleList.length})</button>
        <div className='blog-container space-between'>
          <ul className='article-list'>{ list }</ul>
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

Home.propTypes = {
  getArticleList: React.PropTypes.function,
  createArticle: React.PropTypes.function,
  home: React.PropTypes.object
}

export default Home
