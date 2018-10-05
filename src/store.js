/**
 * Create the redux store
 * http://redux.js.org/docs/basics/Store.html
 *
 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

// redux logger with default options
import logger from 'redux-logger'

import { reducer as responsive, calculateResponsiveState } from 'responsive-redux'

// import the developer defined breakpoints
import breakpoints from './breakpoints'

let middlewareArray = [
  logger
]

const middleware = compose(
  applyMiddleware(...middlewareArray)
)

const combineThese = {
  responsive
}

const reducersComposed = compose(combineThese)
const reducers = combineReducers(reducersComposed)

// empty in this example
const preloadedState = {}

export const store = createStore(reducers, preloadedState, middleware)

/**
 * This function will be called when the browser window is resized
 */
const resize = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  store.dispatch(calculateResponsiveState({ width, height, breakpoints }))
}

// a listener to be called when the window is resized
window.addEventListener('resize', resize)

// call immediately to initialize redux state
resize()

export default {
  store
}
