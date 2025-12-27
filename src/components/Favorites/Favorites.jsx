import { useFavorites } from '../../context/FavoritesContext'
import Card from '../ui/Card/Card'

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites()

  if (!favorites || favorites.length === 0) return <h2>Избранное пусто</h2>

  return (
    <div>
      {favorites.map(product => (
        <Card key={id} product={product} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  )
}
