import { memo, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { ICard } from '../../../utils/types/products/smartphone.interface'
import Pagination from '../../pagination/Pagination'
import Card from '../../ui/card/Card'
import Filters from '../../filters/Filters'

import style from './Products.module.scss'
import { IData, IMeta } from '../../../utils/types/IData.interface'
import { useFilters } from '../../../store/store'
import ProductCardSkeleton from '../../productCardSkeleton/ProductCardSkeleton'
import Select from '../../ui/select/Select'

const Products = memo(() => {
  const [page, setPage] = useState(1)
  const [check, setCheck] = useState({
    from10000to20000: false,
    from20000to40000: false,
    from40000: false,
  })
  const [pag, setPag] = useState<Array<null>>([])
  const [sortedBy, setSortedBy] = useState('-price')

  const filterPrice = useCallback((item: ICard) => {
    if (!check.from10000to20000 && !check.from20000to40000 && !check.from40000)
      return item
    if (
      check.from10000to20000 &&
      item.prices.price >= 20_000 &&
      item.prices.price <= 40_000
    )
      return item
    if (
      check.from20000to40000 &&
      item.prices.price >= 40_000 &&
      item.prices.price <= 80_000
    )
      return item
    if (check.from40000 && item.prices.price >= 80_000) return item
  }, [])

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // const { products, getProducts, meta, getMeta } = useFilters()
  const [products, setProducts] = useState<ICard[]>([])
  const [meta, setMeta] = useState<IMeta>({
    total_items: 0,
    total_pages: 0,
    current_page: 0,
    per_page: 0,
    remaining_count: 0,
  })

  const getData = useCallback(async () => {
    try {
      setIsLoading(true)
      // const { data } = await axios.get<IData>(
      //   `https://82d3e26a18e72a6e.mokky.dev/smartphones?page=${page}&limit=5`
      // )
      const { data } = await axios.get<IData>(
        `http://localhost:5000/api?page=${page}&limit=5&sortedBy=${sortedBy}`
      )
      // getProducts(data.items)
      // getMeta(data.meta)
      setProducts(data.items)

      setMeta(data.meta)
      setPag(new Array(meta.total_pages).fill(null))
    } catch (e) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }, [page, sortedBy])

  useEffect(() => {
    getData()
  }, [page, sortedBy])

  useEffect(() => {
    console.log(
      products.sort((a, b) => (a.prices.price < b.prices.price - 1 ? 1 : -1))
    )
  }, [check])

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
      {error && <p style={{ color: 'red' }}>Error</p>}
      <Filters check={check} setCheck={setCheck} />
      <div className={style.content}>
        <Select setSortedBy={setSortedBy} />
        <div className={style.cards}>
          {isLoading ? (
            <ProductCardSkeleton />
          ) : (
            products.map((card: ICard, i: number) => <Card {...card} key={i} />)
          )}
        </div>

        <div className={style.pagination}>
          {/* {!!pag.length && (
            <div className={style.pagination}>
              {pag.map((_, i) => (
                <Pagination
                  meta={meta}
                  items={products}
                  onClick={() => setPage(i + 1)}
                  key={i}
                  active={i + 1 === active}
                >
                  {i + 1}
                </Pagination>
              ))}
            </div>
          )} */}
          {!isLoading && (
            <div className={style.pagination}>
              {items.map((_, i) => (
                <Pagination
                  meta={meta}
                  items={products}
                  onClick={() => setPage(i + 1)}
                  key={i}
                  active={i + 1 === active}
                >
                  {i + 1}
                </Pagination>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default Products
