import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Cart } from './components/Cart'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { Checkout } from './components/Checkout'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route
              path={`/category/:categoryId`}
              element={<ItemListContainer />}
            />
            <Route
              path='/category/:categoryId/:id'
              element={<ItemDetailContainer />}
            />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <ToastContainer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}
