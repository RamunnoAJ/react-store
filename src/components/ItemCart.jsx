import { useCartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount'

export const ItemCart = ({ item }) => {
  const { removeFromCart, addToCart } = useCartContext()
  const onAdd = quantity => {
    addToCart(item, quantity)
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center rounded-xl p-8 shadow-lg'>
      <img src={item.image} alt={item.name} className='w-24 hidden md:block' />
      <h3 className='text-lg md:hidden'>{item.name}</h3>
      <div className='flex flex-row gap-2 md:gap-8 justify-center items-center'>
        <h3 className='text-xl hidden md:block'>{item.name}</h3>
        <p className='text-lg'>
          <span className='hidden md:block'>Precio unitario:</span>{' '}
          <span className='font-medium block'>${item.price}</span>{' '}
        </p>
        <ItemCount
          initialValue={item.quantity}
          stock={item.stock}
          onAdd={onAdd}
          cartItem={true}
        />
        <p className='text-lg'>
          <span className='hidden md:block'>Subtotal:</span>
          <span className='font-medium'>${item.price * item.quantity}</span>
        </p>
        <button
          onClick={() => {
            removeFromCart(item.id)
          }}>
          <i className='fa-solid fa-trash text-red-500'></i>
        </button>
      </div>
    </div>
  )
}
