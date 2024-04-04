import style from './Header.module.scss'

import { FaRegUser } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import { BsTextParagraph } from 'react-icons/bs'
import { MdOutlineDragIndicator } from 'react-icons/md'

export default function Header() {
  return (
    <div className={style.header}>
      <div className={`container ${style.header_container}`}>
        <div className={style.logo}>Online Shop</div>
        <div className={style.search_wrap}>
          <div className={style.catalog}>
            <MdOutlineDragIndicator />
          </div>
          <input type='text' placeholder='Search product' />
        </div>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}>
              <FaRegHeart />
              Избранние
            </li>
            <li className={style.item}>
              <BsTextParagraph />
              Сравнение
            </li>

            <li className={style.item}>
              <LuShoppingCart />
              Корзина
            </li>
            <li className={style.item}>
              <FaRegUser />
              Войти
            </li>
          </ul>
          <div className={style.burger_menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  )
}
