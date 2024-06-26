import style from './Card.module.scss'
import { ICard } from '../../../utils/types/products/smartphone.interface'
import Slider from '../slider/Slider'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'

import Rating from '../rating/Rating'
import { memo } from 'react'

const Card = memo(
  ({ id, title, images, count, rating, prices, description }: ICard) => {
    return (
      <div className={style.card}>
        <div className={style.slider}>
          <Slider id={id} images={images.main} />
        </div>
        <div className={style.content}>
          <h3 className={style.title}>{title}</h3>
          <div className={style.subtitle}>{description}</div>

          <Rating rating={rating} />

          <div className={style.info}>
            <div className={style.compare}>
              <Checkbox state={false} />
              Сравнить
            </div>
            <div className={style.isStock}>
              {count > 0 ? (
                <>
                  <span className={style.isStock_present}></span>
                  <div>В наличии</div>
                </>
              ) : (
                <>
                  <span className={style.isStock_absent}></span>
                  <div>Нет в наличии</div>
                </>
              )}
            </div>
          </div>

          <div className={style.purchase}>
            <div
              className={style.prices}
              title={`Можно в кредит от ${Math.floor(
                (prices.creditCoefficient * prices.price) / 12
              )} ₽/мес.`}
            >
              <p className={style.price}>{prices.price} ₽</p>
              {prices.oldPrice > 0 && (
                <p className={style.oldPrice}>{prices.oldPrice} ₽</p>
              )}
            </div>
            <Button>Купить</Button>
          </div>
        </div>
      </div>
    )
  }
)

export default Card
