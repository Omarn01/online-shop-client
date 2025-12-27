import { useState } from 'react'
import styles from './Search.module.scss'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={styles.search}>
      <input
        type='text'
        placeholder='Поиск...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul className={styles.searchResults}>
          <li>Результат 1</li>
          <li>Результат 2</li>
          <li>Результат 3</li>
        </ul>
      )}
    </div>
  )
}

export default Search
