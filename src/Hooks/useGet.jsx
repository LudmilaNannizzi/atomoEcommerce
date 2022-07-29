import { useEffect, useState } from 'react'

import axios from 'axios'
import { useRecoilValue } from 'recoil'

import { userAuthState } from '../Recoil/userAtom'

const URLBASE = 'https://strapiecommerce-production-4615.up.railway.app/api/'

const populate = '?populate[0]=image'

const useGet = (url, filterCategory = ' ') => {
  const user = useRecoilValue(userAuthState)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const header = user ? { Authorization: `Bearer ${user.jwt}` } : {}

  useEffect(() => {
    setIsLoading(true)
    const getProdcts = async () => {
      const response = await axios.get(
        `${URLBASE}${url}${populate}${filterCategory}`,
        header
      )
      setData(response.data.data)
      setIsLoading(false)
    }
    getProdcts()
  }, [])
  return { data, isLoading }
}
export default useGet
