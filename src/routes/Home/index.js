import { injectReducer } from 'store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'System.import' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const container = require('./container').default
      const reducer = require('./reducer').default

      injectReducer(store, { key: 'home', reducer })
      cb(null, container)
    }, 'home')
  }
})
