import React, { createContext, useContext } from 'react'
import { useProducts, type Data } from './useProducts.js'

type Props = {
  children: React.ReactNode
}

type ProductsContextType = ReturnType<typeof useProducts>

const ProductsContext = createContext<ProductsContextType | null>(null)

export const ProductsProvider = ({ children }: Props) => {
  const value = useProducts()

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  const context = useContext(ProductsContext)
  if (!context)
    throw new Error('useProductsContext must be used within ProductsProvider')
  return context
}
