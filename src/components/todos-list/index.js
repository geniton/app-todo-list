import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/action-creators'
import * as visibilityActions from 'reducers/visibility-filter/actions'
import './todos.global.css'

const TodosList = ({todos, handleToggleTodo, activeFilter}) => {
  return (
    <ul>
      {getVisibilityFilter(todos, activeFilter).map((todo) => {
        return <li
          className="todos__item"
          onClick={() => handleToggleTodo(todo.id)}
          key={todo.id}
          style={{textDecoration: todo.completed ? 'line-through' : ''}}> {todo.text} </li>
      })}
    </ul>
  )
}

const getVisibilityFilter = (todos, activeFilter) => {
  const visibilityFunc = {
    [visibilityActions.SHOW_ALL]: todos,
    [visibilityActions.SHOW_COMPLETED]: todos.filter((el) => el.completed),
    [visibilityActions.SHOW_ACTIVE]: todos.filter((el) => !el.completed)
  }

  return visibilityFunc[activeFilter]
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    activeFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
