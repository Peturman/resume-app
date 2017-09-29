import React from 'react'
import { Route } from 'react-router'

export default [
  <Route path='publish' component={require('./view/publish').default} />,
  <Route path='detail' component={require('./view/detail').default} />
]
