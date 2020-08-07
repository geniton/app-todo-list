'use strict'

import visibilityFilter from './visibility-filter'
import todos from './todos/index'
import address from './address/index'
import { combineReducers } from 'redux'

// export default (state = {}, action) => {
//    return {
//       todos: Todos(state.todos,action),
//       visibilityFilter: VisibilityFilter(state.visibilityFilter,action)
//    }
// }

// combineReducers

// const combineReducers = (reducers) => (state = {}, action) => {
//    return Object.keys(reducers).reduce((nextState, key) => {
//       return {
//          ...nextState,
//          [key]: reducers[key](state[key], action)
//       }
//    },{})
// }

export default combineReducers({
  todos,
  visibilityFilter,
  address
})
