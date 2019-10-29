import React, {useEffect} from 'react'
import {
  Link,
} from 'react-router-dom'

export const Tacos = ({ routes, ...props }) => {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
      </ul>
    </div>
  )
}
const App = ({routes,...props}) => {
useEffect(() => props.fetchData(),[])
  return (
    <div className="app-container">
      <button onClick={props.fetchData}>onClick</button>
      <ul>
        <li><Link to="/homes">Tacos</Link></li>
      </ul>
      <div className="second-section">
        hello
        </div>
    </div>
  )
}

export default App