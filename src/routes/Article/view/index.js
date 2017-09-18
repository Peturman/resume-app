import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header } from 'components/Header/Header'
import ReactMarkDown from 'react-markdown'
import './style.less'

export class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: '##### 有问题反馈在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流* 邮件(dev.hubo#gmail.com, 把#换成@) * QQ: 287759234* weibo: [@草依山](http://weibo.com/ihubo) * twitter: [@ihubo](http://twitter.com/ihubo)'
    }
  }

  render () {
    return (
      <div>
        <Header title='全栈之路'/>
        <div className='blog-container space-between'>
          <section className='article-detail'>
            <ReactMarkDown source={this.state.article} className='markdown-body'/>
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

export default Article
