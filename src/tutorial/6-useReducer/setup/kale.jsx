import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer (todos, action) {
  // console.log('Action: ', action, 'Todos: ', todos)
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log('action', action, 'action.type: ', action.type)
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      console.log('action', action, 'action.type: ', action.type)

      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          // console.log('toggle')
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}
const newTodo = (name) => {
  return { id: Date.now(), name: name, completed: false }
}

const Kale = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  // const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }
  // console.log(todos)
  return <>
    <h1>Learning useReducer from Kale</h1>
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={e => {
        // console.log(e)
        setName(e.target.value)
      }} />
    </form>

    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch} ACTIONS={ACTIONS} />
    })}
    {/* <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <button className='btn' onClick={decrement}><h1>-</h1></button>
      <h1>{state.count}</h1>
      <button className='btn' onClick={increment}><h1>+</h1></button>
    </div> */}

  </>
}

export default Kale
