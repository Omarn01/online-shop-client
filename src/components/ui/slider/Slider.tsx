import { useEffect, useState } from 'react'
import style from './Slider.module.scss'
import { Link } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

interface IProps {
  id: number
  images: string[]
}

export default function Slider({ id, images }: IProps) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (slide >= images.length) {
      setSlide(0)
    }
    if (slide <= -1) {
      setSlide(images.length - 1)
    }
  }, [slide])

  console.log(images.length)

  return (
    <div className={style.slider}>
      <div className={style.wrapper}>
        {images.length >= 1 && (
          <div
            onClick={() => setSlide(prev => (prev -= 1))}
            className={style.prev}
          >
            <IoIosArrowBack />
          </div>
        )}

        <Link to={`/smartphone/${id}`} className={style.slides}>
          {images.map((img: string, i: number) => {
            if (i === slide)
              return (
                <div key={i} className={style.slide}>
                  <img src={img} />
                </div>
              )
          })}
        </Link>

        {images.length >= 1 && (
          <div
            onClick={() => setSlide(prev => (prev += 1))}
            className={style.next}
          >
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  )
}
