import { useEffect, useState } from 'react'

import axios from 'axios'

const URLBASE = 'https://strapiecommerce-production-4615.up.railway.app/api/'

const populate = '?populate[0]=image'

const useGet = (url, filterCategory = ' ') => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getProdcts = async () => {
      const response = await axios.get(
        `${URLBASE}${url}${populate}${filterCategory}`
      )
      setData(response.data.data)
      setIsLoading(false)
    }
    getProdcts()
  }, [])
  return { data, isLoading }
}
export default useGet
