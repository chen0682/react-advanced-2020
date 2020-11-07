import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const reducer = (state, action) => {
  // console.log(state, action)
  if (action.type === 'TESTING') {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'item added' }
  }
  return state
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'Hello World!'
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  // const [people, setPeople] = useState(data)
  // console.log(data)
  // const [showModal, setShowModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      // setShowModal(true)
      // setPeople([...people, { id: new Date().getTime().toString(), name }])
      // setName('')
      dispatch({ type: 'TESTING' })
    } else {
      // setShowModal(true)
    }
  }

  // learning useReducer from Kale

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  )
}

export default Index
