import { useCartContext } from '../context/CartContext'

export const CartWidget = () => {
  const { getItemQuantity } = useCartContext()

  return (
    <div className='flex gap-4 items-center text-lg hover:text-green-700 transition-all duration-300 ease-in-out cursor-pointer relative'>
      {getItemQuantity() > 0 && (
        <span className='absolute -top-2 -right-1 rounded-full px-1 text-xs bg-white font-medium'>
          {getItemQuantity()}
        </span>
      )}

      <i className='fa-solid fa-cart-shopping '></i>
    </div>
  )
}
