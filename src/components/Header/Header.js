import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input } from 'antd'
const Search = Input.Search
import './Header.less'

export class Header extends Component {
  render () {
    const { selectedKey } = this.props
    return <header className='header'>
      <div className='width-limit space-between'>
        <div className='logo center-center-column'>
          <Link to='/'>Peturman</Link>
        </div>

        <div className='space-between nav'>
          <div className='nav-left'>
            <Link to='/' className={selectedKey === 'HOME' && 'active'}>首页</Link>
            <Link to='/article' className={selectedKey === 'ARTICLE' && 'active'}>归档</Link>
            <Search
              placeholder='搜索'
              style={{ width: 200 }}
              onSearch={value => console.log(value)}
            />
          </div>
          <div className='nav-right'>
            <Link to='/user/login' className={selectedKey === 'LOGIN' && 'active'}>登录</Link>
            <Link to='/user/register' className={selectedKey === 'REGISTER' && 'active'}>注册</Link>
          </div>
        </div>
        <div className='write center-center-column'>
          <Link to='/article/publish' >写文章</Link>
        </div>
      </div>
    </header>
  }
}

Header.propTypes = {
  selectedKey: React.PropTypes.string.isRequired
}

export default Header
