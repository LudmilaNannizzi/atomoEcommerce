import { useRecoilState } from 'recoil'

import { favState } from '../Recoil/favAtom'

const useFav = () => {
  const [fav, setFav] = useRecoilState(favState)

  const addFav = (info) => {
    const productExist = fav.some((pr) => pr.id === info.id)
    if (productExist === false) {
      const productoCantidad = { ...info, cantidad: 1 }
      setFav([...fav, productoCantidad])
    } else {
      setFav(
        fav.map((pr) => {
          if (pr.id === info.id) {
            return { ...pr, cantidad: pr.cantidad + 1 }
          }
          return pr
        })
      )
    }
  }

  const deleteItemFav = (id) => {
    setFav(fav.filter((product) => product.id !== id))
  }
  const deleteAllProductsFav = () => {
    setFav([])
  }

  return {
    fav,
    addFav,
    deleteItemFav,
    deleteAllProductsFav,
  }
}
export default useFav
