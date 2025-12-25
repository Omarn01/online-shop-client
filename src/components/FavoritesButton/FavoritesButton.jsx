import './FavoritesButton.css'

import { useLocalStorage } from '../../hooks/useLocalstorage'

function FavoritesButton({
  value,
  id,
  title,
  price,
  img,
  isSale,
  oldPrice,
  toggleFavorite,
  localStorage,
}) {
  if (localStorage) {
    const { get, set } = useLocalStorage()
    set('favorites', value)
  }

  return (
    <button
      onClick={() =>
        toggleFavorite({ id, title, price, img, isSale, oldPrice })
      }
    >
      {value}
    </button>
  )
}

export default FavoritesButton
