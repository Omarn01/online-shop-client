import React from 'react'

const Card = React.memo(function Card({
  title,
  price,
  img,
  isSale = false,
  oldPrice = 0,
}) {
  return (
    <li className={`product-card ${isSale ? 'sale' : ''}`}>
      {isSale && <div className='sale-badge'>SALE</div>}

      <button className='compare-btn' title='Добавить в сравнение'>
        ⇄<span>Сравнить</span>
      </button>

      <img src={img} alt={title} className='product-image' />

      <h3 className='product-title'>{title}</h3>

      <div className='price'>
        {oldPrice && <span className='old-price'>{oldPrice} ₽</span>}
        <span className='current-price'>{price} ₽</span>
      </div>

      <div className='actions'>
        <button className='btn cart'>В корзину</button>
        <button className='btn favorite'>❤</button>
      </div>
    </li>
  )
})

export default Card
