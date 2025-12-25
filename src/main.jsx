import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

import './index.css'

import AppRoutes from './AppRoutes.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <CartProvider>
        <BrowserRouter basename='/online-shop-client'>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </FavoritesProvider>
  </StrictMode>
)
