import { useContext, createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = props => {
  const [cart, setCart] = useState([])

  const isInCart = id => {
    return cart.find(product => product.id === id)
  }

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const index = cart.findIndex(prod => prod.id === product.id)
      const aux = [...cart]
      aux[index].quantity = quantity

      setCart(aux)
    } else {
      const cartProduct = {
        ...product,
        // eslint-disable-next-line object-shorthand
        quantity: quantity,
      }

      setCart([...cart, cartProduct])
    }
  }

  const removeFromCart = id => {
    setCart(cart.filter(product => product.id !== id))
  }

  const emptyCart = () => {
    setCart([])
  }

  const getItemQuantity = () => {
    return cart.reduce((acc, product) => (acc += product.quantity), 0)
  }

  const getTotalPrice = () => {
    const cartPrices = cart.map(product => {
      return product.quantity * product.price
    })

    return cartPrices.reduce((acc, product) => (acc += product))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        getItemQuantity,
        getTotalPrice,
      }}>
      {props.children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
