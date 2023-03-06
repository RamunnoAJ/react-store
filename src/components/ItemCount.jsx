import { useState } from 'react'

export const ItemCount = ({ initialValue, stock, onAdd, cartItem = false }) => {
  const [count, setCount] = useState(initialValue)

  const add = () => {
    return count < stock && setCount(count + 1)
  }

  const substract = () => {
    return count > 1 && setCount(count - 1)
  }

  return (
    <div>
      <button onClick={() => substract()} className='p-2 font-medium'>
        -
      </button>
      {count}
      <button onClick={() => add()} className='p-2 font-medium'>
        +
      </button>
      <button
        onClick={() => onAdd(count)}
        className='bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-3xl font-medium transition-colors duration-300 ease-out'>
        {cartItem ? 'Actualizar' : 'Agregar al carrito'}
      </button>
    </div>
  )
}
