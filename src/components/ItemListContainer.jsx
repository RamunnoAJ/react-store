import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataFromDB } from '../utils/functions'

import { ItemList } from './ItemList'

export const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [prods, setProds] = useState([])
  const TEMPLATE = 'Item'

  useEffect(() => {
    if (categoryId) {
      getDataFromDB().then(prods => {
        const products = prods.filter(
          product => product.category === categoryId
        )
        const items = ItemList({ products, template: TEMPLATE })
        setProds(items)
      })
    } else {
      getDataFromDB().then(products => {
        const items = ItemList({ products, template: TEMPLATE })
        setProds(items)
      })
    }
  }, [categoryId])

  return (
    <div className='grid gap-4 items-center justify-items-center max-w-7xl w-11/12 mx-auto md:grid-cols-3 mt-8'>
      {prods}
    </div>
  )
}
