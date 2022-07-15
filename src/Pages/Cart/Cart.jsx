import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'

import useCart from '../../Hooks/useCart'
import Product from './Product'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, deleteAllProducts, totalCart } = useCart()
  const total = cart.length
  return (
    <>
      <Button bgColor="black" onClick={onOpen}>
        {' '}
        <FaShoppingCart /> ({total})
      </Button>{' '}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> No hay productos </Text>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody>
                {cart.map((product) => (
                  <Product product={product} key={`cartProduct${product.id}`} />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Button
                  variant="outline"
                  mb={3}
                  w="full"
                  onClick={deleteAllProducts}
                >
                  Vaciar Carrito
                </Button>
                <Text>Total: {totalCart}</Text>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
