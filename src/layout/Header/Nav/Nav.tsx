import { Link } from 'react-router-dom'

import { FaRegCircleUser } from 'react-icons/fa6'
import { MdFavoriteBorder } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineCompareArrows } from 'react-icons/md'

import styles from './Nav.module.scss'
import { useState } from 'react'

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav style={{ position: 'relative' }}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to='/favorites' className={styles.navLink}>
            <MdFavoriteBorder />
            Favorites
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/cart' className={styles.navLink}>
            <IoCartOutline />
            Cart
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link to='/compare' className={styles.navLink}>
            <MdOutlineCompareArrows />
            Compare
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link to='/profile' className={styles.navLink}>
            <FaRegCircleUser />
            Profile
          </Link>
        </li>
      </ul>
      <button
        className={styles.burger}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {!isOpen ? '+' : '-'}
      </button>
      {isOpen && (
        <ul className={styles.burgerMenu}>
          <li className={styles.navItem}>
            <Link to='/favorites' className={styles.navLink}>
              Favorites
            </Link>
          </li>
          <Link to='/cart' className={styles.navLink}>
            Cart
          </Link>
          <Link to='/compare' className={styles.navLink}>
            Compare
          </Link>
          <Link to='/profile' className={styles.navLink}>
            Profile
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Nav
