import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
const url = 'https://course-api.netlify.app/api/react-prop-types-example'

const Index = () => {
  const { loading, products } = useFetch(url)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'products'}</h2>

      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
