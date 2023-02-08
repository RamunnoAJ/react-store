export const ItemDetail = ({ item }) => {
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
        <button className='bg-[#ececec] py-2 px-4 rounded-3xl self-center md:self-end font-medium'>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
