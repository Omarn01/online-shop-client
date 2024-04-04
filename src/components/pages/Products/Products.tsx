import { useEffect, useState } from 'react'
import axios from 'axios'

import { ICard } from '../../../utils/types/products/smartphone.interface'
import Pagination from '../../pagination/Pagination'
import Card from '../../ui/card/Card'
import Filters from '../../filters/Filters'

import style from './Products.module.scss'
import { IData } from '../../../utils/types/IData.interface'
import { useFilters } from '../../../store/store'
import ProductCardSkeleton from '../../productCardSkeleton/ProductCardSkeleton'

export default function Products() {
  const [page, setPage] = useState(1)
  const [check, setCheck] = useState({
    check: {
      from10000to20000: false,
      from20000to40000: false,
      from40000: true,
    },
  })

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { products, getProducts, meta, getMeta } = useFilters()

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get<IData>(
          `https://82d3e26a18e72a6e.mokky.dev/smartphones?page=${page}&limit=5`
        )
        getProducts(data.items)
        getMeta(data.meta)
      } catch (e) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [page])

  let active = page
  let items = []

  for (let number = 1; number <= meta?.total_pages; number++) {
    items.push(
      <Pagination
        meta={meta}
        items={products}
        onClick={() => setPage(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination>
    )
  }

  return (
    <div className={style.products}>
      {/* {isLoading && <h3>Loading...</h3>} */}
      <Filters check={check} setCheck={setCheck} />
      <div className={style.content}>
        <div className={style.cards}>
          {isLoading ? (
            <ProductCardSkeleton />
          ) : (
            products.map((card: ICard, i: number) => <Card {...card} key={i} />)
          )}
        </div>
        {products && (
          <div className={style.pagination}>{items.map(item => item)}</div>
        )}
      </div>
    </div>
  )
}
