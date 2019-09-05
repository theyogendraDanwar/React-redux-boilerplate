import React from 'react'
import {
  NavLink,
  Link,
} from 'react-router-dom'

import RouteWithSubRoute from '../../utils/RouteWithSubRoute';

export const Sandwiches = () => <h2>Sandwiches</h2>

export const Tacos = ({ routes, routes2, ...props }) => {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink key={index} to={route.path}>
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
        {routes.map((route, index) => (
          <RouteWithSubRoute key={index} {...route} />
        ))}
    </div>
  )
}

export const Bus = () => <h3>Bus</h3>
export const DefaultTab = () => <h3>DefaultTab</h3>
export const Cart = () => <h3>Cart</h3>

class App extends React.Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <ul>
          <li><Link to="/tacos/default">Tacos</Link></li>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
        </ul>
          {routes.map((route, index) => (
            <RouteWithSubRoute key={index} {...route} />
          ))}
        <div className="second-section">
          hello
        </div>
      </div>
    )
  }
}

export default App