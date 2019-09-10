import React from "react";
import { Redirect } from 'react-router-dom'

const Login = ({ login, from, ...props }) => {
  const handleLoginSubmit = (e) => {
    props.simpleAction()
  }
  if (login && login.isLoggedIn) {
    return <Redirect to={from} />
  }
  return (
   <div>
     <h2>Login</h2>
     <input type="text" placeholder="username"/>
     <input type="text" placeholder="password"/>
     <button onClick={handleLoginSubmit}>Click</button>
   </div>
  );
}

export default Login;
