import { useCallback, useEffect, useState } from 'react'
import Error from './components/Error/Error'
import './App.css'
import Card from './components/Card/Card'
import Pagination from './components/Pagination/Pagination'
import ListSkeleton from './components/Skeleton/List/ListSkeleton'
import MiniSkeleton from './components/Skeleton/MiniSkeleton/MiniSkeleton'
import { Filters } from './components/filters/Filters'
import SortSelect from './components/SortSelect/SortSelect'

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [totalItems, setTotalItems] = useState(null)

  const [brandsList, setBrandsList] = useState([])
  const [priceRange, setPriceRange] = useState({})
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(9999999)

  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedIsSale, setSelectedIsSale] = useState(false)

  const [brandsParamQuery, setBrandParamQuery] = useState('')
  const [isSaleParamQuery, setIsSaleParamQuery] = useState('')

  const changeCurrentPage = useCallback(pageNumber => {
    setCurrentPage(pageNumber)
  }, [])

  const getElementsByFetchData = brandsArray => {
    setBrandParamQuery(brandsArray.map(brand => `brand[]=${brand}&`).join(''))
  }

  const filtersByIsSale = () => {
    if (selectedIsSale) {
      setIsSaleParamQuery('')
    } else {
      setIsSaleParamQuery('isSale=true')
    }
  }

  const filtersByPrice = () => {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/priceRange`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setPriceRange(...json)
      } catch (error) {
      } finally {
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/brands`
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setBrandsList(json)
      } catch (error) {
      } finally {
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://1c2d1c3def58d74a.mokky.dev/smartphones?page=${currentPage}&limit=4&${brandsParamQuery}&${isSaleParamQuery}&price[from]=${minPrice}&price[to]=${maxPrice}` // brand[]=Apple&brand[]=Xiaomi
        )
        const json = await response.json()

        if (!response.ok) {
          throw new Error(json.message)
        }

        setData(json.items)
        setTotalPages(json.meta.total_pages)
        setCurrentPage(json.meta.current_page)
        setTotalItems(json.meta.total_items)
        // pushBrandsList(json.items)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [currentPage, brandsParamQuery, isSaleParamQuery, minPrice, maxPrice])

  return (
    <div>
      {isError ? <Error /> : null}
      <Filters
        brands={brandsList}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedIsSale={selectedIsSale}
        setSelectedIsSale={setSelectedIsSale}
        getElementsByFetchData={getElementsByFetchData}
        filtersByIsSale={filtersByIsSale}
        priceRange={priceRange}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <SortSelect />
      <ul className='card__list'>
        {totalItems ? <h1>Найдено товаров: {totalItems}</h1> : <MiniSkeleton />}

        {isLoading ? <ListSkeleton /> : null}
        {Array.isArray(data)
          ? data.map(({ id, img, title, price, isSale, oldPrice }) => (
              <Card
                key={id}
                img={img}
                price={price}
                title={title}
                isSale={isSale}
                oldPrice={oldPrice}
              />
            ))
          : null}
      </ul>
      {data ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changeCurrentPage={changeCurrentPage}
        />
      ) : null}
    </div>
  )
}

export default App
