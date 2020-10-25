import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  return (
    <React.Fragment>
      {people.map((person) => {
        console.log(person)
        const { id, name } = person

        const removeItem = (id) => {
          let newPeople = people.filter((person) => person.id !== id)
          setPeople(newPeople)
        }
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn-sm' onClick={() => removeItem(id)}> Remove </button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>clear items</button>
    </React.Fragment>
  )
}

export default UseStateArray
