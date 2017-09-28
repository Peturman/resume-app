import React, { Component } from 'react'
import { Header } from 'components/Header/Header'
import './style.less'

class User extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getUserInfo()
  }

  render () {
    const { userInfo } = this.props.user
    return (
      <div>
        <Header title='关于我' />
        <div className='form-container'>
          <p>用户名：{ userInfo.name }</p>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  getUserInfo: React.PropTypes.func,
  user: React.PropTypes.object
}

export default User
