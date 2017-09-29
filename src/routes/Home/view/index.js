import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header } from 'components/Header/Header'
import { PanelList } from 'components/Panel/index'
import './style.less'
import { NotList } from 'components/NotList/NotList'

export class Home extends Component {
  componentDidMount () {
    this.props.getArticleList()
  }

  render () {
    const { home } = this.props
    const { articleList = [] } = home
    const list = []

    articleList.map((item, index) => {
      list.push(
        <li className='article-tiem' key={index}>
          <PanelList
            key={index}
            link={{ pathname: '/article/detail', query: { id: item._id } }}
            title={item.title}
            time={item.modified}
            tags={item.tags}
            description={item.description}
            author={item.author}
            commentCount={2}
            points={4}
          />
        </li>
      )
    })
    return (
      <div>
        <Header selectedKey='HOME' />
        <div className='blog-container space-between'>
          <div className='left-list'>
            { list.length > 0 ? <ul className='article-list'>{ list }</ul> : <NotList title='文章' /> }
          </div>
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
  getArticleList: React.PropTypes.func,
  home: React.PropTypes.object
}

export default Home
