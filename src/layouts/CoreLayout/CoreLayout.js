import React, { Component } from 'react'
import './CoreLayout.less'
import fetchAPI from 'api'
import ScrollToTop from './ScrollToTop'

class CoreLayout extends Component {
  componentDidMount () {
    if (!localStorage.getItem('token')) {
      fetchAPI('createAccessToken', {
        grant_type: 'password',
        client_id: 'android',
        client_secret: 'SomeRandomCharsAndNumbers',
        username: 'myapi',
        password: 'abc1234'
      }).then(function (data) {
        localStorage.setItem('token', data.access_token)
      })
    }
  }

  render () {
    const { children } = this.props
    return (
      <div className='core-container notransition'>
        <ScrollToTop>
          <div>
            {children}
          </div>
        </ScrollToTop>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout

