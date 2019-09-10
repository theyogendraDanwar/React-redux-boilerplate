import React from 'react'
import {
  Link,
} from 'react-router-dom'

export const Sandwiches = () => <h2>Sandwiches</h2>

export const Tacos = ({ routes, routes2, ...props }) => {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
      </ul>
    </div>
  )
}

export const Bus = () => <h3>Bus</h3>
export const DefaultTab = () => <h3>DefaultTab</h3>
export const Cart = () => <h3>Cart</h3>

const App = ({routes,...props}) => {
  console.log(props);
  return (
    <div>
      <ul>
        <li><Link to="/tacos/default">Tacos</Link></li>
        <li><Link to="/sandwiches">Sandwiches</Link></li>
      </ul>
      <div className="second-section">
        hello
        </div>
    </div>
  )
}

export default App