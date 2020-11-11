import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch.jsx'
const url = 'https://course-api.netlify.app/api/javascript-store-products'
const Example = () => {
  // console.log(useFetch(url))
  const { loading, products } = useFetch(url)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
