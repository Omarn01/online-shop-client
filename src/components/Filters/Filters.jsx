import { useState } from 'react'
import './filters.css'

export function Filters({
  brands,
  selectedBrands,
  setSelectedBrands,
  selectedIsSale,
  setSelectedIsSale,
  getElementsByFetchData,
  filtersByIsSale,
  priceRange,
  setMinPrice,
  setMaxPrice,
}) {
  const [minPriceValue, setMinPriceValue] = useState('')
  const [maxPriceValue, setMaxPriceValue] = useState('')

  const toggleBrand = brand => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand]

    setSelectedBrands(updated)
    getElementsByFetchData(updated)
  }

  const toggleIsSale = () => {
    setSelectedIsSale(!selectedIsSale)
    filtersByIsSale()
  }

  const changeMinPrice = e => {
    const value = e.target.value
    setMinPriceValue(value)
    setMinPrice(value)
  }

  const changeMaxPrice = e => {
    const value = e.target.value
    setMaxPriceValue(value)
    setMaxPrice(value)
    if (!value) {
      setMaxPrice(9999999)
    }
  }

  //   const resetFilters = () => {
  //     setSelectedBrands([])
  //     setMinPrice('')
  //     setMaxPrice('')
  //     setOnlySale(false)

  //     onChange({
  //       brands: [],
  //       minPrice: '',
  //       maxPrice: '',
  //       onlySale: false,
  //     })
  //   }

  return (
    <aside className='filters'>
      <h3 className='filters__title'>Фильтры</h3>

      {/* Бренды */}
      <div className='filters__section'>
        <p className='filters__label'>Бренд</p>
        <BrandList
          brands={brands}
          toggleBrand={toggleBrand}
          selectedBrands={selectedBrands}
        />
      </div>

      {/* Цена */}
      <div className='filters__section'>
        <p className='filters__label'>Цена</p>
        <div className='price-range'>
          <input
            type='number'
            placeholder={`От ${priceRange.minPrice}`}
            value={minPriceValue}
            onChange={e => changeMinPrice(e)}
          />
          <input
            type='number'
            placeholder={`От ${priceRange.maxPrice}`}
            value={maxPriceValue}
            onChange={e => changeMaxPrice(e)}
          />
        </div>
      </div>

      {/* Скидка */}
      <div className='filters__section'>
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={selectedIsSale}
            onChange={() => {
              toggleIsSale()
            }}
          />
          <span>Только со скидкой</span>
        </label>
      </div>

      <button
        className='filters__reset'
        //   onClick={resetFilters}
      >
        Сбросить
      </button>
    </aside>
  )
}

const BrandList = ({ brands, toggleBrand, selectedBrands }) => {
  const [showAll, setShowAll] = useState(false)
  const maxVisible = 3 // сколько элементов видно по умолчанию

  return (
    <div>
      <div
        style={{
          maxHeight: showAll ? '200px' : `${maxVisible * 40}px`, // 40px — высота одного элемента
          overflowY: showAll ? 'auto' : 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {brands.map(({ brand, id }) => (
          <label key={id} className='checkbox'>
            <input
              type='checkbox'
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {brands.length > maxVisible && (
        <button
          onClick={() => setShowAll(prev => !prev)}
          style={{
            marginTop: '10px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {showAll ? 'Скрыть' : 'Показать все'}
        </button>
      )}
    </div>
  )
}
