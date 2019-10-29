import React from 'react'
import { shallow, mount } from 'enzyme'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { middleware } from '../redux/store'
import checkPropTypes from 'check-prop-types'
import * as reducer from '../redux/modules/index'



export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  ...reducer
})

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * @function findByAttr
 * @param {Wrapper} wrapper 
 * @param {string} val 
 */
export const findByAttr = (wrapper, val) => {
  return wrapper.find(`${val}`)
}

/**
 * @function setup
 * @param {Wrapper} Wrapper to apply test upon
 * @param {Object} props - Component Props for testing
 * @param {Object} state - Component State for testing
 * @returns { ShallowWrapper }
 */
export const setup = (Wrapper, props = {}, initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Wrapper {...props} {...store}/>);
  return wrapper;
}

/**
 * @function setupMount
 * @param {Wrapper} Wrapper to apply test upon
 * @param {Object} props - Component Props for testing
 * @param {Object} state - Component State for testing
 * @returns { MountWrapper }
 */
export const setupMount = (Wrapper, props = {}, initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = mount(<Wrapper {...props} {...store}/>);
  return wrapper;
}

/**
 * @function checkProps
 * @param {Wrapper} wrapper 
 * @param {Object} expectedProps 
 */
export const checkProps = (wrapper, expectedProps) => {
  return checkPropTypes
    (
      wrapper.propTypes,
      expectedProps,
      'prop', wrapper.name
    )
}