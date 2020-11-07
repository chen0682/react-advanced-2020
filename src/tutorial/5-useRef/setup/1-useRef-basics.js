import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)

  const refContainer2 = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  console.log(refContainer)

  const focus = () => {
    refContainer.current.focus()
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>Submit</button>

        </div>
      </form>
      <form className='form' >
        <div>
          <input type='text' ref={refContainer2} />
          <button type='button' onClick={focus}>Submit</button>

        </div>
      </form>
    </div>
  )
}

export default UseRefBasics
