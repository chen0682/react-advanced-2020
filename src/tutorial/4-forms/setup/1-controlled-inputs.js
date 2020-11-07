import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('Submit works')
  // }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    }
  }

  return <>
    <article>
      <form action='' className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={person.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Age : </label>
          <input
            type='text'
            id='age'
            name='age'
            value={person.age}
            // onChange={(e) => setAge(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary' type='submit' onClick={handleSubmit} >Add Person</button>
        <h1>User List</h1>
        {people.map(ppl => {
          return (
            <div key={ppl.id}>
              <h2>Name: {ppl.firstName}</h2>
              <h4>Email: {ppl.email}</h4>
              <h4>Age: {ppl.age}</h4>
            </div>

          )
        })}

      </form>
    </article>
  </>
}

export default ControlledInputs
