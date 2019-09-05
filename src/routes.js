import App from './containers/AppContainer'
import {
  Sandwiches, 
  Tacos,
  Bus,
  Cart, 
  DefaultTab
} from './components/App/App'

export const routes = [{
  path: '/',
    component: App,
    routes: [
      {
        path: '/sandwiches',
        component: Sandwiches
      },
      {
        path: '/tacos',
        component: Tacos,
        routes: [
          {
            path: '/tacos/cart',
            component: Cart,
            label: "Cart"
          },
          {
            path: '/tacos/bus',
            component: Bus,
            label: "BUS"
          },
          {
            path: '/tacos/default',
            component: DefaultTab,
            label: "One",
          },
        ],
      }
    ]
}]