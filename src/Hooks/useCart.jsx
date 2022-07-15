import { useRecoilState } from 'recoil'

import { cartState } from '../Recoil/cartAtom'

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState)

  const addProduct = (info) => {
    const productExist = cart.some((pr) => pr.id === info.id)
    if (productExist === false) {
      const productoCantidad = { ...info, cantidad: 1 }
      setCart([...cart, productoCantidad])
    } else {
      setCart(
        cart.map((pr) => {
          if (pr.id === info.id) {
            return { ...pr, cantidad: pr.cantidad + 1 }
          }
          return pr
        })
      )
    }
  }

  const deleteItemCart = (id) => {
    setCart(cart.filter((info) => info.id !== id))
  }
  const deleteAllProducts = () => {
    setCart([])
  }

  const totalCart = cart.reduce(
    (acc, product) => acc + product.price * product.cantidad,
    0
  )

  return {
    cart,
    addProduct,
    deleteItemCart,
    deleteAllProducts,
    totalCart,
  }
}
export default useCart
