import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'arcgis',
  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./view').default)
      }, 'arcgis')
    }
  },
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'System.import' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const container = require('./container').default
      const reducer = require('./reducer').default

      injectReducer(store, { key: 'arcgis', reducer })
      cb(null, container)
    }, 'arcgis')
  },

  getChildRoutes (partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./childRoutes').default)
    }, 'arcgis')
  }
})
