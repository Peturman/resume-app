import React, { Component } from 'react'
import './CoreLayout.less'
import ScrollToTop from './ScrollToTop'

class CoreLayout extends Component {
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

