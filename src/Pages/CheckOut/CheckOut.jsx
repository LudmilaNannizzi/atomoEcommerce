import { Box, Table, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

import useCart from '../../Hooks/useCart'
import ProductCheckOut from './ProductCheckOut'

const CheckOut = () => {
  const { cart, totalCart } = useCart()
  return (
    <Box h="100vh" w="100%">
      <Table variant="simple" size="lg" w="900px" mx="auto">
        <Thead>
          <Tr color="white">
            <Th />
            <Th color="teal.400">Artículo</Th>
            <Th color="teal.400">Precio</Th>
            <Th color="teal.400">Cantidad</Th>
            <Th color="teal.400">Subtotal</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((info) => (
            <ProductCheckOut product={info} key={`cartProduct${info.id}`} />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th />
            <Th />
            <Th />
            <Th />
            <Th color="teal.400">Total </Th>
            <Th color="teal.400"> ${totalCart}</Th>
          </Tr>
          <Tr>
            <Th />
            <Th />
            <Th />
            <Th />
            <Th />
            <Th
              color="teal.400"
              textAlign="center"
              _hover={{
                background: 'gray.900',
                color: 'teal.500',
              }}
            >
              Pepe
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}
export default CheckOut
