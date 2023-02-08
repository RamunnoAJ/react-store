import { Link } from 'react-router-dom'
export const Sections = () => {
  const linkClasses =
    'p-2 hover:text-white transition-all duration-300 ease-in-out'

  return (
    <>
      <li>
        <Link to={'/'} className={linkClasses}>
          Home
        </Link>
      </li>
      <li>
        <Link to={'/category/t-shirts'} className={linkClasses}>
          T-Shirts
        </Link>
      </li>
      <li>
        <Link to={'/category/hoodies'} className={linkClasses}>
          Hoodies
        </Link>
      </li>
    </>
  )
}
