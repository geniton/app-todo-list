import { ADD_TODO, TOGGLE_TODO } from './actions'
import createReducer from '../create-reducer'

export const initialState = []

const todos = createReducer(initialState, {
  [ADD_TODO]: (state, action) => state.concat({
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  }),
  [TOGGLE_TODO]: (state, action) => state.map(todo => {
    if (todo.id !== action.payload.id) {
      return todo
    }
    return {
      ...todo,
      completed: !todo.completed
    }
  })
})

export default todos

// import { ADD_TODO, TOGGLE_TODO } from './actions'

// export const initialState = []

// export default (state = initialState, action) => {
//    switch (action.type) {
//       case ADD_TODO :
//          return state.concat({
//             id: action.payload.id,
//             text: action.payload.text,
//             completed: false
//          })
//       case TOGGLE_TODO:
//         return state.map(todo => {
//            if (todo.id !== action.payload.id) {
//             return todo
//            }
//             return {
//                ...todo,
//                completed: !todo.completed
//             }
//          })
//    }

//    return state
// }
