import { useCartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount'

export const ItemCart = ({ item }) => {
  const { removeFromCart, addToCart } = useCartContext()
  const onAdd = quantity => {
    addToCart(item, quantity)
  }

  return (
    <div className='flex flex-row gap-8 justify-between rounded-xl p-8 shadow-lg'>
      <img src={item.image} alt={item.name} className='w-24' />
      <div className='flex flex-row gap-8 justify-center items-center'>
        <h3 className='text-xl'>{item.name}</h3>
        <p className='text-lg'>
          Precio unitario: <span className='font-medium'>${item.price}</span>{' '}
        </p>
        <ItemCount
          initialValue={item.quantity}
          stock={item.stock}
          onAdd={onAdd}
          cartItem={true}
        />
        <p className='text-lg'>
          Subtotal:{' '}
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
