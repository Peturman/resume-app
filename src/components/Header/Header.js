import React from 'react'
import { Link } from 'react-router'
import './Header.less'

export const Header = (props) => (
  <header className='header'>
    <div className='navLeft'>
      <Link to='/'>首页</Link>
      <Link to='/article'>归档</Link>
    </div>
    <div className='navMiddle'>
      {props.title}
    </div>
    <div className='navRight'>
      <Link to='/login'>登录</Link>
      <Link to='/'>留言</Link>
    </div>
  </header>
)

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Header
