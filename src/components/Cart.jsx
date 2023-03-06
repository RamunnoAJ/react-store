import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { ItemList } from './ItemList'

export const Cart = () => {
  const { cart, emptyCart, getTotalPrice } = useCartContext()

  return (
    <>
      {cart.length === 0 ? (
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h2>Su carrito actualmente se encuentra vacío</h2>
          <Link
            to={'/'}
            className='bg-slate-200 hover:bg-slate-300 transition-colors duration-300 ease-in-out py-2 px-4 rounded-3xl font-medium mx-4'>
            Continuar comprando
          </Link>
        </div>
      ) : (
        <div className='max-w-7xl mx-auto w-11/12 flex flex-col'>
          <ItemList products={cart} template='ItemCart' />
          <div className='flex justify-between mt-4 items-center'>
            <div>
              <button
                onClick={() => emptyCart()}
                className='py-2 px-4 font-medium bg-red-300 rounded-3xl hover:bg-red-400 transition-colors duration-300 ease-out'>
                {' '}
                Vaciar Carrito
              </button>
              <Link
                to={'/'}
                className='bg-[#ececec] py-2 px-4 rounded-3xl font-medium mx-4'>
                Continuar comprando
              </Link>
              <Link
                to={'/checkout'}
                className='bg-green-300 hover:bg-green-400 py-2 px-4 rounded-3xl font-medium transition-colors duration-300 ease-out'>
                Finalizar Compra
              </Link>
            </div>
            <p className='font-medium'>
              Resumen de la compra: $
              {new Intl.NumberFormat('de-DE').format(getTotalPrice())}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
