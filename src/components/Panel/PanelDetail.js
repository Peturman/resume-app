import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactMarkDown from 'react-markdown'
import './Panel.less'

export class PanelDetail extends Component {
  render () {
    const { title, time, tags = '', content, author, commentCount, points } = this.props
    const tagList = tags.split(',')
    const list = tagList.map((str) => {
      return <span className='label'>{str}</span>
    })
    return <section className='panel-detail'>
      <h1>{title}</h1>
      <div className='panel-author'>
        <p className='author'><span>作者</span><Link to='/'>{author}</Link></p>
        <p className='counts'>
          <span className='time'>{time}</span>
          <span className='comment'>评论({commentCount})</span>
          <span className='spot'>点击量({points})</span>
        </p>
        <p className='tags'>
          {list}
        </p>
      </div>
      <ReactMarkDown source={content} className='markdown-body' />
    </section>
  }
}

PanelDetail.propTypes = {
  title: React.PropTypes.string,
  time: React.PropTypes.string,
  tags: React.PropTypes.string,
  content: React.PropTypes.string,
  author: React.PropTypes.string,
  commentCount: React.PropTypes.number,
  points: React.PropTypes.number
}

export default PanelDetail
