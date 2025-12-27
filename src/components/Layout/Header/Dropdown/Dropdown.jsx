import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Dropdown.module.scss'

function Dropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [list, setList] = useState([])
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/categories`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setList(json)
      } catch (error) {
      } finally {
      }
    }

    fetchData()
  }, [])

  const toggleDropdown = () => setDropdownOpen(prev => !prev)

  return (
    <div className={styles.categories} ref={dropdownRef}>
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        Категории
      </button>
      <ul className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
        {list?.map(({ id, url, title }) => (
          <li key={id}>
            <Link to={`/${url}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
