import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import useCart from '../../Hooks/useCart'
import Product from './Product'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, deleteAllProducts, totalCart } = useCart()
  const total = cart.length
  return (
    <>
      <Flex onClick={onOpen} as={Button} colorScheme="black">
        <FaShoppingCart fontSize="1.5rem" mr="10px" /> ({total})
      </Flex>
      <Drawer isOpen={isOpen} size="sm" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#202124" color="#e1e1e3">
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> No hay artículos en su carrito de compras. </Text>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody w="100%">
                {cart.map((info) => (
                  <Product product={info} key={`cartProduct${info.id}`} />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Text>Total: $ {totalCart}</Text>

                <Button mb={3} w="full" colorScheme="teal" onClose={onClose}>
                  <Link to="checkOut"> Comprar</Link>
                </Button>

                <Button
                  mb={3}
                  w="full"
                  onClick={deleteAllProducts}
                  variant="outline"
                  _hover={{
                    background: 'black',
                    color: 'teal.500',
                  }}
                >
                  Vaciar Carrito
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
