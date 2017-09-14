import React, { Component } from 'react'
import { Link } from 'react-router'

export class Home extends Component {
  render () {
    return (
      <div style={{ margin: '0 auto' }}>
        <div>
          <Link to={{
            pathname: '/counter',
            state: { fromInside: false },
            query: { status: 2 }
          }} >计数器</Link>
        </div>
      </div>
    )
  }
}

export default Home
