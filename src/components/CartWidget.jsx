export const CartWidget = () => {
  const cantidadCarrito = 0

  return (
    <div className='flex gap-4 items-center text-lg hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>
      {cantidadCarrito > 0 && <span>{cantidadCarrito}</span>}

      <i className='fa-solid fa-cart-shopping '></i>
    </div>
  )
}
