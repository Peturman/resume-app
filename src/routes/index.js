// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Counter from './Counter'
import User from './User'
import Article from './Article'
import Arcgis from './Arcgis'
import NotFound from './NotFound'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    Article(store),
    Counter(store),
    User(store),
    Arcgis(store),
    NotFound
  ]
})

export default createRoutes
