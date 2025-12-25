import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef(null)

  const toggleDropdown = () => setDropdownOpen(prev => !prev)

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>
        <Link to='/'>LOGO</Link>
      </div>

      {/* Dropdown категорий */}
      <div className={styles.categories} ref={dropdownRef}>
        <button className={styles.dropdownBtn} onClick={toggleDropdown}>
          Категории
        </button>
        <ul
          className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
        >
          <li>
            <Link to='/smartphones'>Смартфоны</Link>
          </li>
        </ul>
      </div>

      {/* Поиск */}
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

      {/* Навигация */}
      <nav className={styles.nav}>
        <Link to='/favorites' className={styles.navItem}>
          Избранное
        </Link>
        <Link to='/cart' className={styles.navItem}>
          Корзина
        </Link>
        <Link to='/compare' className={styles.navItem}>
          Сравнение
        </Link>
        <Link to='/profile' className={styles.navItem}>
          Профиль
        </Link>
      </nav>
    </header>
  )
}
// <span className={styles.badge}>2</span>
