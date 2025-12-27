import { useState, useEffect } from 'react'

import styles from './Brands.module.scss'
import { fetchBrands } from '../../../../../../api/api'

function Brands({ getElementsByFetchData }) {
  const [brands, setBrands] = useState([])

  const [selectedBrands, setSelectedBrands] = useState([])

  const [showAll, setShowAll] = useState(false)
  const maxVisible = 3 // сколько элементов видно по умолчанию

  const toggleBrand = brand => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand]

    setSelectedBrands(updated)
    getElementsByFetchData(updated)
  }

  useEffect(() => {
    fetchBrands().then(json => setBrands(json))
  }, [])
  return (
    <div>
      <div
        style={{
          maxHeight: showAll ? '200px' : `${maxVisible * 40}px`, // 40px — высота одного элемента
          overflowY: showAll ? 'auto' : 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {brands?.map(({ brand, id }) => (
          <label key={id} className={styles.checkbox}>
            <input
              type='checkbox'
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {brands?.length > maxVisible && (
        <button
          onClick={() => setShowAll(prev => !prev)}
          style={{
            marginTop: '10px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {showAll ? 'Hide' : 'Show all'}
        </button>
      )}
    </div>
  )
}

export default Brands
