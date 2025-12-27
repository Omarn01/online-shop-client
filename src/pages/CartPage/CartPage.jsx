import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'
import Card from '../../components/ui/Card/Card'

function CartPage() {
  const { cart } = useCart()

  const [url, setUrl] = useState('')
  const [data, setData] = useState([])

  console.log(cart)

  useEffect(() => {
    if (!cart.length) return

    const query = cart.map(id => `id[]=${id}&`).join('&')

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/smartphones?${query}`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setData(json)
      } catch (error) {
      } finally {
      }
    }

    fetchData()
  }, [cart])

  //   if (!cart.length) return <h1>Корзина пустая</h1>

  return (
    <div>
      <h1>Cart</h1>
      {data.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default CartPage
