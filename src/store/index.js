import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import rootReducer from '../modules'

export const history = createBrowserHistory()

const initialState = {

}

const enhancers = []
const middleware = [
  routerMiddleware(history),
  thunk
]

if (process.env.NODE_ENV === 'development') {
  console.log("__DEVELOPER MODE__")
  const freeze = require('redux-freeze')
  middleware.push(freeze)
  const devToolsExtension = window.window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

export default store