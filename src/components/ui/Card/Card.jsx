import React from 'react'
import FavoritesButton from '../../../components/ui/FavoritesButton/FavoritesButton'
import { Link } from 'react-router-dom'
import { useFavorites } from '../../../context/FavoritesContext'
import { useCart } from '../../../context/CartContext'

import styles from './Card.module.scss'

const Card = React.memo(function Card({ product, isCart }) {
  const { id, img, title, price, rating, isSale, oldPrice } = product

  const { toggleFavorite, isFavorite } = useFavorites()
  const { addToCart } = useCart()
  return (
    <li className={`product-card ${isSale ? 'sale' : ''}`}>
      {isSale && <div className='sale-badge'>SALE</div>}

      <button className='compare-btn' title='Добавить в сравнение'>
        ⇄<span>Compare</span>
      </button>

      <img src={img} alt={title} className='product-image' />

      <Link to={`/${id}`}>
        <h3 className='product-title'>{title}</h3>
      </Link>

      <div className='price'>
        {oldPrice && <span className='old-price'>{oldPrice} ₽</span>}
        <span className='current-price'>{price} ₽</span>
      </div>

      <span className={styles.rating}>{rating}</span>

      <div className='actions'>
        {!isCart ? (
          <div className={styles.counter}>
            <button className={styles.minus}>−</button>
            <span className={styles.count}>1</span>
            <button className={styles.plus}>+</button>
          </div>
        ) : (
          <button className='btn cart' onClick={() => addToCart(id)}>
            To cart
          </button>
        )}

        <FavoritesButton
          id={id}
          title={title}
          price={price}
          img={img}
          isSale={isSale}
          oldPrice={oldPrice}
          toggleFavorite={toggleFavorite}
          value={isFavorite(id) ? '❤️' : '🤍'}
          localStorage={true}
        />
      </div>
    </li>
  )
})

export default Card
