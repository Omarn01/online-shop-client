import style from './SkeletonCard.module.scss'
import clsx from 'clsx'

export default function CardSkeleton() {
  return (
    <div className={clsx(style.card, style.is_loading)}>
      <div className={style.image}></div>

      <div className={style.content}>
        <h2></h2>
        <p></p>
      </div>
    </div>
  )
}
