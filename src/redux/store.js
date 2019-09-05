import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router'
import * as reducers from './modules'

const configureStore = (history) => createStore(
  combineReducers({ 
    ...reducers,
    router: connectRouter(history) }), 
  applyMiddleware(thunk));

export default configureStore