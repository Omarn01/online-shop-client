import { useState } from 'react'
import { useProductsContext } from '../features/products/model/ProductsProvider'

import './SortSelect.css'

export default function SortSelect() {
  const { sort, setSort, sortOptions } = useProductsContext()

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(
    sortOptions.find(o => o.value === sort)
  )
  // console.log(selected)

  return (
    <div className='sort'>
      <button
        className={`sort__button ${open ? 'active' : ''}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span>{selected && selected.label}</span>

        <svg
          className={`sort__arrow ${open ? 'open' : ''}`}
          width='12'
          height='12'
          viewBox='0 0 24 24'
        >
          <path
            d='M7 10l5 5 5-5'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>
      </button>

      <ul className={`sort__list ${open ? 'open' : ''}`}>
        {sortOptions?.map((option, index) => (
          <li
            key={option.value}
            className={`sort__item ${sort === option.value && 'active'}`}
            style={{ transitionDelay: `${index * 40}ms` }}
            onClick={() => {
              setSelected(sortOptions.find(o => o.value === option.value))
              setSort(option.value)
              setOpen(false)
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
