import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({ item }) => {
  const { addToCart } = useCartContext()

  const onAdd = quantity => {
    addToCart(item, quantity)
  }

  return (
    <div className='flex flex-col md:flex-row gap-4  rounded-xl p-8 shadow-lg mt-8'>
      <img
        src={`../${item.image}`}
        alt={item.name}
        className=' w-full max-w-sm'
      />
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h4 className='font-semibold text-xl'>{item.name}</h4>
        <p className='text-md font-medium'>Stock: {item.stock}</p>
        <p className='text-lg font-medium'>${item.price}</p>
        <ItemCount initialValue={1} stock={item.stock} onAdd={onAdd} />
        <Link
          to={'/cart'}
          className='bg-green-300 hover:bg-green-400 py-2 px-4 rounded-3xl font-medium transition-colors duration-300 ease-out'>
          Ir al carrito
        </Link>
      </div>
    </div>
  )
}
