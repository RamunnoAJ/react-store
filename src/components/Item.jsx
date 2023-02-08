import { Link } from 'react-router-dom'
export const Item = ({ item }) => {
  return (
    <div className='flex flex-col gap-4 max-w-xs rounded-xl p-8 shadow-lg'>
      <img src={item.image} alt={item.name} className=' w-full' />
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h3 className='font-semibold text-xl'>{item.name}</h3>
        <p className='text-lg font-medium'>$ {item.price}</p>
        <Link to={`/${item.category}/${item.id}`}>
          <button className='bg-[#ececec] py-2 px-4 rounded-3xl self-center font-medium'>
            Ver Producto
          </button>
        </Link>
      </div>
    </div>
  )
}
