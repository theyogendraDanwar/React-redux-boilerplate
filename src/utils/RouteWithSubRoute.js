import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapDispatchToState = (state) => ({
  ...state
})
const RouteWithSubRoute = (route, key) => {
  const Inner = ({ component: Component, path, exact, login, restricted, ...props }) => {
    if (login.isLoggedIn) {
      return <Route path={path} exact={exact} key={key} render={(props) => (
        <Component {...props} />
      )} />;
    }
    else if (restricted) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />;
    } else {
      return <Route path={path} exact={exact} key={key} render={(props) => (
        <Component {...props} />
      )} />;
    }
  };
  return <Inner {...route} />
}
export default connect(mapDispatchToState)(RouteWithSubRoute);