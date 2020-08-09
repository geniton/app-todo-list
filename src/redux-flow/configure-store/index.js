'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import reducer from 'reducers'
import thunk from 'redux-thunk'

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//    if (typeof action === 'function') {
//      return action(dispatch, getState)
//    }
//    return next(action)
//  }

export default ({ initialState} = {}) => {
  const enhancer = compose(applyMiddleware(thunk), logger())
  const store = createStore(reducer, initialState, enhancer)

   if (module.hot) {
      module.hot.accept('reducers', () => {
        const NextReducer = require('reducers').default
        store.replaceReducer(NextReducer)
      })
   }

   return store
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (x) => x