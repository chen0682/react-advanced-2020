import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import reducer from './reducer'
// reducer function

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
      const newItem = { id: Date.now(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      // setShowModal(true)
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  // learning useReducer from Kale

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
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
        return <div key={person.id} className='item'>
          <h4>{person.name} {person.id}</h4>
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>Remove</button>
        </div>
      })}
    </>
  )
}

export default Index
