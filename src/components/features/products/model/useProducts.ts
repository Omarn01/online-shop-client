import { useState, useEffect } from 'react'

export type Data = {
  id: number
  img: string
  title: string
  rating: number
  price: number
  isSale: boolean
  oldPrice: number
  brand: string
}

type SortOptions = {
  value: string
  label: string
}

type SortType = 'price' | '-price' | '-rating'

const DEFAULT_SORT: SortType = 'price'

export const useProducts = () => {
  // query params
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(9999999)
  const [isSaleParamQuery, setIsSaleParamQuery] = useState<string>('')

  const [selectedIsSale, setSelectedIsSale] = useState<boolean>(false)

  // data
  const [data, setData] = useState<null | Data[]>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [totalPages, setTotalPages] = useState<number>()
  const [totalItems, setTotalItems] = useState<null | number>(null)
  const [brandsParamQuery, setBrandParamQuery] = useState('')

  const [sortOptions, setSortOptions] = useState<SortOptions[]>([
    { value: 'price', label: 'Сначала дешевле' },
  ])
  const [sort, setSort] = useState<SortType>(DEFAULT_SORT)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/sorting`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }
        setSortOptions(json)
      } catch (error) {}
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/smartphones?page=${currentPage}&limit=4&sortBy=${sort}&${brandsParamQuery}&${isSaleParamQuery}&price[from]=${minPrice}&price[to]=${maxPrice}`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setData(json.items)
        setTotalPages(json.meta.total_pages)
        setCurrentPage(json.meta.current_page)
        setTotalItems(json.meta.total_items)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [
    currentPage,
    isSaleParamQuery,
    minPrice,
    maxPrice,
    brandsParamQuery,
    sort,
  ])

  return {
    data,
    totalPages,
    currentPage,
    setCurrentPage,
    setTotalPages,
    setMinPrice,
    setMaxPrice,
    setIsSaleParamQuery,
    setBrandParamQuery,
    setSelectedIsSale,
    setSort,
    sort,
    sortOptions,
    selectedIsSale,
    totalItems,
    isError,
    isLoading,
  }
}
