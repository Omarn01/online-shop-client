import style from './Rating.module.scss'

import { FaRegStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

interface IProps {
  rating: number
}

export default function Rating({ rating }: IProps) {
  return (
    <div className={style.rating}>
      {rating < 2 && rating > 1 && (
        <>
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      )}
      {rating === 2 && (
        <>
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      )}
      {rating < 3 && rating > 2 && (
        <>
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
          <FaRegStar />
        </>
      )}
      {rating === 3 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </>
      )}
      {rating < 4 && rating > 3 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </>
      )}
      {rating === 4 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </>
      )}
      {rating < 5 && rating > 4 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      )}
      {rating === 5 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      )}
    </div>
  )
}
