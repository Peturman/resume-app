import React, { Component } from 'react'
import { Link } from 'react-router'
import './Panel.less'

export class PanelList extends Component {
  render () {
    const { link, title, time, tags, description, author, commentCount, points } = this.props
    return <section className='panel-list'>
      <header className='space-between'>
        <Link to={link}>{title}</Link>
        <p><span className='time'>{time}</span><span className='label'>{tags}</span></p>
      </header>
      <p className='markdown-body'>{description}</p>
      <footer className='space-between'>
        <p>作者：<Link to='/'>{author}</Link></p>
        <p>
          <span className='comment'><Link to='/'>评论</Link>({commentCount})</span>
          <span className='spot'>点击量({points})</span>
        </p>
      </footer>
    </section>
  }
}

PanelList.propTypes = {
  link: React.PropTypes.object,
  title: React.PropTypes.string,
  time: React.PropTypes.string,
  tags: React.PropTypes.string,
  description: React.PropTypes.string,
  author: React.PropTypes.string,
  commentCount: React.PropTypes.number,
  points: React.PropTypes.number
}

export default PanelList
