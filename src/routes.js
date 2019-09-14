import App from './containers/AppContainer'
import {Tacos} from './components/App/App'
import Login from './containers/LoginContainer'

export const routes = [
  {
    path: '/',
    component: App,
    exact: true,
    restricted: true,
  }, {
    path: '/homes',
    component: Tacos,
    exact: true,
    restricted: true,
  },
  {
    path: '/login',
    component: Login
  }
]