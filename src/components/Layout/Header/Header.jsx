import Dropdown from './Dropdown/Dropdown'
import Search from './Search/Search'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <Dropdown />
      <Search />
      <Nav />
    </header>
  )
}
// <span className={styles.badge}>2</span>
