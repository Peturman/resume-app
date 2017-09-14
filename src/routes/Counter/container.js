import { connect } from 'react-redux'
import CounterView from './view'
import * as actions from './actions'
const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
