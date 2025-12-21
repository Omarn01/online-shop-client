import { useState } from 'react'
import './SortSelect.css'

const SORT_OPTIONS = [
  { value: 'price_asc', label: 'Сначала дешевле' },
  { value: 'price_desc', label: 'Сначала дороже' },
  { value: 'rating_desc', label: 'По рейтингу' },
]

export default function SortSelect({ value = 'price_asc', onChange }) {
  const [open, setOpen] = useState(false)

  const selected = SORT_OPTIONS.find(o => o.value === value)

  return (
    <div className='sort'>
      <button
        className={`sort__button ${open ? 'active' : ''}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span>{selected?.label || 'Сортировка'}</span>

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
        {SORT_OPTIONS.map((option, index) => (
          <li
            key={option.value}
            className={`sort__item ${value === option.value ? 'active' : ''}`}
            style={{ transitionDelay: `${index * 40}ms` }}
            onClick={() => {
              onChange(option.value)
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
