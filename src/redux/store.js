import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import simpleReducer  from './ducks/simpleReducer';

const configureStore = () => createStore(combineReducers({ sim: simpleReducer }), applyMiddleware(thunk));

export default configureStore