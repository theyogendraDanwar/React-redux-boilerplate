import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
  login: state.login
})

const RouteWithSubRoute = (props) => {
  const Inner = ({ component: Component, path, exact, login, restricted, ...props }) => {
    if (login && login.isLoggedIn) {
      return <Route path={path} exact={exact} render={(props) => (
        <Component {...props} />
      )} />;
    }
    else if (restricted) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />;
    } else {
      return <Route path={path} exact={exact} render={(props) => (
        <Component {...props} />
      )} />;
    }
  };
  return <Inner {...props} />
}
export default withRouter(connect(mapStateToProps)(RouteWithSubRoute));