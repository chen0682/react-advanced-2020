import React from 'react'
// import { ACTIONS } from './kale.jsx'

const Todo = ({ todo, dispatch, ACTIONS }) => {
  return (
    <div>
      <span style={{ color: todo.completed ? 'black' : 'red' }}>
        {todo.name}
      </span>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO,
        payload: { id: todo.id }
      })}>Toggle</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
    </div>
  )
}

export default Todo
