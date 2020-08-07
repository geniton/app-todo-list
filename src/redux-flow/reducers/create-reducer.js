const createReducer = (initialState, handleActions) => {
  if (initialState === undefined) {
    throw new Error('initialState should not be undefined')
  }

   // if (typeof handleActions.hasOwnProperty === 'undefined') {
   //    throw new Error('createReducer expects the decond argument as an object representing reducer')
   // }

  if (Object.prototype.toString.call(handleActions) !== '[object Object]') {
    throw new Error('createReducer expects the decond argument as an object representing reducer')
  }

  return (state = initialState, action) => {
    if (handleActions.hasOwnProperty(action.type)) {
      return handleActions[action.type](state, action)
    }
    return state
  }
}

export default createReducer
