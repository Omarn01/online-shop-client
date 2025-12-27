import Pagination from '../features/products/ui/Pagination/Pagination'
import MiniSkeleton from '../components/ui/Skeleton/MiniSkeleton/MiniSkeleton'
import Filters from '../features/products/ui/Filters/Filters'
import SortSelect from '../components/ui/SortSelect/SortSelect'
import ProductList from '../features/products/ui/ProductList/ProductList'

import { useProductsContext } from '../features/products/model/ProductsProvider'

import './App.css'

function App() {
  const { totalItems } = useProductsContext()

  return (
    <>
      <Filters />
      <SortSelect />
      {totalItems ? <h1>Products found: {totalItems}</h1> : <MiniSkeleton />}
      <ProductList />
      {totalItems && <Pagination />}
    </>
  )
}

export default App
