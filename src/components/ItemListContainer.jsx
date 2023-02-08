import { useState, useEffect } from 'react'
import { getDataFromDB } from '../utils/functions'

import { ItemList } from './ItemList'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getDataFromDB('./json/products.json').then(products => {
      const items = ItemList({ products })
      setProducts(items)
    })
  }, [])
  return (
    <div className='grid gap-4 items-center justify-items-center max-w-7xl w-11/12 mx-auto md:grid-cols-3 mt-8'>
      {products}
    </div>
  )
}
