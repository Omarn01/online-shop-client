import { useState, useEffect } from 'react'

import Brands from '../Filters/Brands/Brands'
import { useProductsContext } from '../../model/ProductsProvider'

import './filters.css'

function Filters() {
  const [minPriceValue, setMinPriceValue] = useState('')
  const [maxPriceValue, setMaxPriceValue] = useState('')
  const [priceRange, setPriceRange] = useState({})

  const {
    setMinPrice,
    setMaxPrice,
    selectedIsSale,
    setBrandParamQuery,
    setIsSaleParamQuery,
    setSelectedIsSale,
  } = useProductsContext()

  const filtersByIsSale = () => {
    if (selectedIsSale) {
      setIsSaleParamQuery('')
    } else {
      setIsSaleParamQuery('isSale=true')
    }
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

  const getElementsByFetchData = brandsArray => {
    setBrandParamQuery(brandsArray.map(brand => `brand[]=${brand}&`).join(''))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/priceRange`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setPriceRange(...json)
      } catch (error) {
      } finally {
      }
    }

    fetchData()
  }, [])

  return (
    <aside className='filters'>
      <h3 className='filters__title'>Filters</h3>

      {/* Бренды */}
      <div className='filters__section'>
        <p className='filters__label'>Brands</p>
        <Brands getElementsByFetchData={getElementsByFetchData} />
      </div>

      {/* Цена */}
      <div className='filters__section'>
        <p className='filters__label'>Price</p>
        <div className='price-range'>
          <input
            type='number'
            placeholder={`from ${priceRange.minPrice}`}
            value={minPriceValue}
            onChange={e => changeMinPrice(e)}
          />
          <input
            type='number'
            placeholder={`before ${priceRange.maxPrice}`}
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
          <span>Only with sale</span>
        </label>
      </div>

      <button
        className='filters__reset'
        //   onClick={resetFilters}
      >
        Reset
      </button>
    </aside>
  )
}

export default Filters
