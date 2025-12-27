import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../shared/Loading/Loading'

import './ProductPage.css'

function ProductPage() {
  const { id } = useParams()

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/smartphones/${id}`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setData(json)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) return <Loading />

  return (
    <div>
      <div className='productPage-wrapper'>
        <img src={data.img} />
        <h2>{data.title}</h2>
      </div>
    </div>
  )
}

export default ProductPage
