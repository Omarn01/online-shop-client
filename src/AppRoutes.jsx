import App from './app/App'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './pages/ProductPage/ProductPage'
import Favorites from './pages/FavoritesPage/Favorites'
import HomePage from './pages/HomePage/HomePage'
import Header from './layout/Header/Header'
import CartPage from './pages/CartPage/CartPage'

export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/smartphones' element={<App />} />
        <Route path='/:id' element={<ProductPage />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}
