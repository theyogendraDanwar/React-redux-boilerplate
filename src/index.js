import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import configureStore from './redux/store'
import RouteWithSubRoute from './utils/RouteWithSubRoute'
import NotFound from './components/NotFound/NotFound'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import * as serviceWorker from './serviceWorker'
import { routes } from './routes'

import './index.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <ErrorBoundary showErrorText="Error Happened in the main section.">
    <Provider store={configureStore(history)}>
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoute key={route.path} {...route} />
          ))
          }
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider></ErrorBoundary>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
