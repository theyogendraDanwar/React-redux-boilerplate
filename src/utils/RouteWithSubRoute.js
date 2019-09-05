import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithSubRoute = (route, key) => (
  <Route path={route.path} key={key} render={(props) => (
    <route.component {...props} {...route} />
  )} />
)
export default RouteWithSubRoute;