import { Routes, Route } from 'react-router-dom'
import App from './App'
import ProductPage from './components/ProductPage/ProductPage'
import Favorites from './components/Favorites/Favorites'
import Main from './pages/MainPage'
import Header from './components/Layout/Header/Header'
import CartPage from './pages/CartPage'

export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/smartphones' element={<App />} />
        <Route path='/:id' element={<ProductPage />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}
