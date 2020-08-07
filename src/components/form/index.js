import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'reducers/todos/action-creators'
import './form.global.css'

const Form = ({handleAddTodo}) => {
  return (
    <form action='' onSubmit={handleAddTodo}>
      <input type='text' name='name' />
      <button>Adicionar</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (e) => {
      e.preventDefault()
      dispatch(addTodo(e.target.name.value))
      e.target.name.value = ''
      e.target.name.focus()
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)
