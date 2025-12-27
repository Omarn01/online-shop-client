import './CardSkeleton.css' // стили ниже

function CardSkeleton() {
  return (
    <div className='card-skeleton'>
      {/* Скелет изображения */}
      <div className='skeleton skeleton-image'></div>

      {/* Скелет текста */}
      <div className='skeleton skeleton-title'></div>
      <div className='skeleton skeleton-title short'></div>

      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text short'></div>
      <div className='skeleton skeleton-text shorter'></div>

      {/* Скелет цены */}
      <div className='skeleton skeleton-price'></div>

      {/* Скелет кнопок */}
      <div className='button-group'>
        <div className='skeleton skeleton-button'></div>
        <div className='skeleton skeleton-button'></div>
      </div>
    </div>
  )
}

export default CardSkeleton
