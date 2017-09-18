import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header } from 'components/Header/Header'
import ReactMarkDown from 'react-markdown'
import './style.less'

export class Home extends Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      article: '##### 有问题反馈在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流* 邮件(dev.hubo#gmail.com, 把#换成@) * QQ: 287759234* weibo: [@草依山](http://weibo.com/ihubo) * twitter: [@ihubo](http://twitter.com/ihubo)'
    }
    this.articleEdit = this.articleEdit.bind(this)
  }

  articleEdit (event) {
    this.setState({
      article: event.target.value
    })
  }

  render () {
    return (
      <div>
        <Header title='全栈之路'/>
        <div className='blog-container space-between'>
          <ul className='article-list'>
            <li className="article-tiem">
              <header className='space-between'>
                <Link to='/article'>Nginx服务器搭建</Link>
                <p><span className="time">2017-09-18</span><span className="label">服务器</span></p>
              </header>
              <ReactMarkDown source={this.state.article} className='markdown-body'/>
              <footer className="space-between">
                <p>作者：<Link to='/'>Peturman</Link></p>
                <p>
                  <span className='comment'><Link to='/'>评论</Link>(12)</span>
                  <span className='spot'>点击量(222)</span>
                </p>
              </footer>
            </li>
            <li className='article-tiem'>
              <header className='space-between'>
                <Link to='/'>博客123</Link>
                <p><span className="time">2017-09-18</span><span className="label">服务器</span></p>
              </header>
              <ReactMarkDown source={this.state.article} className='markdown-body'/>
              <footer className="space-between">
                <p>作者：<Link to='/'>Peturman</Link></p>
                <p>
                  <span className='comment'><Link to='/'>评论</Link>(12)</span>
                  <span className='spot'>点击量(222)</span>
                </p>
              </footer>
            </li>
            <li className='article-tiem'>
              <header className='space-between'>
                <Link to='/'>博客前端</Link>
                <p><span className="time">2017-09-18</span><span className="label">服务器</span></p>
              </header>
              <ReactMarkDown source={this.state.article} className='markdown-body'/>
              <footer className="space-between">
                <p>作者：<Link to='/'>Peturman</Link></p>
                <p>
                  <span className='comment'><Link to='/'>评论</Link>(12)</span>
                  <span className='spot'>点击量(222)</span>
                </p>
              </footer>
            </li>
          </ul>
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

export default Home
