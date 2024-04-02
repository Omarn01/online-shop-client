import {
  HOME,
  CART,
  FAVORITES,
  PRODUCTS,
  PRODUCT,
} from '../utils/consts.routes'

import Home from '../components/pages/Home'
import Cart from '../components/pages/Cart'
import Favorites from '../components/pages/Favorites'
import Products from '../components/pages/Products'
import Product from '../components/pages/Product'

export const routes = [
  {
    id: 1,
    path: HOME,
    Component: Home,
  },
  {
    id: 2,
    path: CART,
    Component: Cart,
  },
  {
    id: 3,
    path: FAVORITES,
    Component: Favorites,
  },
  {
    id: 4,
    path: PRODUCTS,
    Component: Products,
  },
  {
    id: 5,
    path: PRODUCT,
    Component: Product,
  },
]
