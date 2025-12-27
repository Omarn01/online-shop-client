import { useProducts } from '../../../features/products/model/useProducts'
import { Link } from 'react-router-dom'

import styles from './Search.module.scss'

function Search() {
  const { searchTerm, setSearchTerm, searchData } = useProducts()

  return (
    <div className={styles.search}>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul className={styles.searchResults}>
          {searchData?.map(product => (
            <li key={product.id} className={styles.li}>
              <Link to={`/${product.id}`}>
                <img src={product.img} alt='' />
                <p>{product.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
