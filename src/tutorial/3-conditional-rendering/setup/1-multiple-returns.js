import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json()
        .then((user) => {
          const { login } = user
          setUser(login)
          setTimeout(function () {
            setIsLoading(false)
          }, 2000)
        })
        .catch(error => console.log(error)))
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h1>Error...</h1>
  }

  return <h2>{user}</h2>
}

export default MultipleReturns
