import { Link } from 'react-router-dom'
import React from 'react'
import FavoritesButton from '../FavoritesButton/FavoritesButton'
import { useFavorites } from '../../context/FavoritesContext'
import { useCart } from '../../context/CartContext'

const Card = React.memo(function Card({
  id,
  title,
  price,
  img,
  isSale = false,
  oldPrice = 0,
  // toggleFavorite = 0,
}) {
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

      <div className='actions'>
        <button className='btn cart' onClick={() => addToCart(id)}>
          To cart
        </button>
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
