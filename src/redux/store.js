import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
// import reduxWebsocket from 'react-redux-websocket'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import * as reducers from './modules'

export const history = createBrowserHistory()

// const websocket = new WebSocket("ws://echo.websocket.org/");
 // reduxWebsocket(websocket)
export const middleware = [routerMiddleware(history),thunk];

export const configureStore = (history) => createStore(
  combineReducers({ ...reducers,router: connectRouter(history) }), 
  composeWithDevTools(applyMiddleware(...middleware))
  );

export default configureStore