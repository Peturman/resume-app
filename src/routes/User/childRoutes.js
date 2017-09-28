import React from 'react'
import { Route } from 'react-router'

export default [
  <Route path='login' component={require('./view/login').default} />,
  <Route path='register' component={require('./view/register').default} />
]
