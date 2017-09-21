import { connect } from 'react-redux'
import React from 'react'
import * as actions from './actions'
const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => ({
  article: state.article
})

const Container = (props) => {
  const { children, ...others } = props
  return React.cloneElement(children, others)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
