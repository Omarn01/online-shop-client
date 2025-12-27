import ListSkeleton from '../../../../ui/Skeleton/List/ListSkeleton.jsx'
import Card from '../../../../ui/Card/Card.jsx'
import { useProductsContext } from '../../model/ProductsProvider.js'

import { useCart } from '../../../../../context/CartContext.jsx'

function ProductList() {
  const { data, isLoading } = useProductsContext()

  const { isCart } = useCart()

  return (
    <ul className='card__list'>
      {isLoading ? <ListSkeleton /> : null}
      {Array.isArray(data)
        ? data.map(product => (
            <Card
              key={product.id}
              product={product}
              isCart={() => isCart(product.id)}
            />
          ))
        : null}
    </ul>
  )
}

export default ProductList
