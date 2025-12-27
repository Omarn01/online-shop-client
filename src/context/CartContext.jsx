import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = id => {
    const isIdInCart = cart.includes(id)
    if (!isIdInCart) setCart(prev => [...prev, id])
    else {
      return
    }
  }

  const isCart = id => cart.some(p => p.id === id)

  return (
    <CartContext.Provider value={{ cart, addToCart, isCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
