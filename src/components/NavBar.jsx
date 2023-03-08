import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { Menu } from './icons/Menu'
import { Logo } from './Logo'
import { Sections } from './Sections'

import { useState } from 'react'
import { MenuClose } from './icons/MenuClose'

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='bg-emerald-300 mb-12'>
      <nav className='mx-auto max-w-7xl w-11/12 flex justify-between items-center transition-all duration-300 ease-in-out'>
        <Link to={'/'}>
          <Logo />
        </Link>
        <ul
          className={`${
            isNavExpanded ? 'navbar-collapse left-0' : 'left-[-100%]'
          } flex flex-col md:flex-row font-medium text-lg gap-4 md:gap-8 absolute md:static top-0 pt-48 md:pt-0 w-3/5 md:w-auto h-screen md:h-auto px-4 transition-all duration-300 ease-in-out bg-emerald-300`}
          onClick={() => {
            setIsNavExpanded(false)
          }}>
          <Sections />
        </ul>
        <Link to={'/cart'}>
          <CartWidget />
        </Link>
        <div
          className='md:hidden z-10 cursor-pointer px-2'
          onClick={() => setIsNavExpanded(!isNavExpanded)}>
          {isNavExpanded ? <MenuClose /> : <Menu />}
        </div>
      </nav>
    </div>
  )
}
