import { useEffect, useState } from 'react'

import axios from 'axios'

const URLBASE =
  'https://strapiecommerce-production-4615.up.railway.app/api/products?populate[0]=image'

const getFilterTitle = (filterTitle) => {
  return filterTitle ? `&filters[title][$containsi]=${filterTitle}` : ''
}
const getFilterCat = (filterCat) => {
  return filterCat ? `&filters[categories][name]=${filterCat}` : ''
}
const getFilterGtePrice = (filterGtePrice) => {
  return filterGtePrice ? `&filters[price][$gte]=${filterGtePrice}` : ''
}
const getFilterLtePrice = (filterLtePrice) => {
  return filterLtePrice ? `&filters[price][$lte]=${filterLtePrice}` : ''
}
const getFilterStock = (filterStock) => {
  return filterStock ? `&filters[stock][$gte]=${filterStock}` : ''
}

const useGetWithFilters = (url) => {
  const [data, setData] = useState(null)
  const [meta, setMeta] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filterTitle, setFilterTitle] = useState('')
  const [filterCat, setFilterCat] = useState('')
  const [filterLtePrice, setFilterLtePrice] = useState()
  const [filterGtePrice, setFilterGtePrice] = useState()
  const [filterStock, setFilterStock] = useState(0)
  const [page, setPage] = useState(1)

  const prevPage = () => setPage(page - 1)
  const nextPage = () => setPage(page + 1)
  const disablePrevPage = page === 1
  const disableNextPage = page === meta

  useEffect(() => {
    setIsLoading(true)
    const getProdcts = async () => {
      const response = await axios.get(
        `${URLBASE}&pagination[page]=${page}&pagination[pageSize]=8${getFilterTitle(
          filterTitle
        )}${getFilterCat(filterCat)}${getFilterStock(
          filterStock
        )}${getFilterLtePrice(filterLtePrice)}${getFilterGtePrice(
          filterGtePrice
        )}
        `
      )
      setData(response.data.data)
      setMeta(response.data.meta.pagination.pageCount)
      setIsLoading(false)
    }
    getProdcts()
  }, [filterTitle, filterCat, filterStock, filterLtePrice, page, meta])

  return {
    data,
    isLoading,
    setFilterTitle,
    filterTitle,
    filterCat,
    setFilterCat,
    filterStock,
    setFilterStock,
    setFilterLtePrice,
    setFilterGtePrice,
    prevPage,
    nextPage,
    disablePrevPage,
    disableNextPage,
  }
}

export default useGetWithFilters
