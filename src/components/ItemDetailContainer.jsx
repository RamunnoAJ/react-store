import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataFromDB } from '../utils/functions'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    getDataFromDB('../../json/products.json').then(products => {
      const prod = products.find(item => item.id === parseInt(id))
      setProduct(prod)
    })
  }, [])

  return (
    <div className='flex justify-center items-center mx-auto'>
      <ItemDetail item={product} />
    </div>
  )
}
