import { useFavorites } from '../../context/FavoritesContext'
import Card from '../Card/Card'

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites()

  if (!favorites || favorites.length === 0) return <h2>Избранное пусто</h2>

  return (
    <div>
      {favorites.map(({ id, title, img, price, isSale, oldPrice }) => (
        <Card
          key={id}
          id={id}
          title={title}
          img={img}
          price={price}
          isSale={isSale}
          oldPrice={oldPrice}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  )
}
