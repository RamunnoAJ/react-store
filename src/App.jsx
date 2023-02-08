import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Cart } from './components/Cart'
import { ItemDetailContainer } from './components/ItemDetailContainer'

export const App = () => {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  )
}
