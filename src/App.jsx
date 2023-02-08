import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Cart } from './components/Cart'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
