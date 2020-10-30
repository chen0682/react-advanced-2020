import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'Hello World'
  // const secondValue = text && 'Hello World'

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h2>Value: {secondValue}</h2> */}
      <h1>{text || 'Please Login.'}</h1>
      <button className='btn' onClick={() => {
        setIsError(!isError)
        setText(!text)
      }}>toggle error</button>
      {/* {text && <h1>Hi you!</h1>} */}
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error...</p> : <div>
        <h2>there is no error.</h2>
      </div>}
    </div>
  )
}

export default ShortCircuit
