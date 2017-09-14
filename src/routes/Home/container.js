import { connect } from 'react-redux'
import HomeView from './view'
import * as actions from './actions'
const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
