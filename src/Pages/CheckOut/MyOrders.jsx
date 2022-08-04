import { useState } from 'react'

import {
  Box,
  Table,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import Forms from '../../Components/Forms'
import useCart from '../../hooks/useCart'
import useUser from '../../hooks/useUser'
import ProductCheckOut from './ProductCheckOut'

export const MyOrders = () => {
  const { totalCart, cart, deleteAllProducts } = useCart()
  const [loading, setLoading] = useState(false)
  const { user } = useUser()
  const toast = useToast({
    variant: 'top-accent',
    isClosable: true,
    duration: 3000,
  })
  const navigate = useNavigate()
  console.log(user)

  const handleOnClick = async () => {
    setLoading(true)
    if (!user) {
      return <Forms />
    } else {
      try {
        await axios.post(
          'https://strapiecommerce-production-4615.up.railway.app/api/orders',
          {
            data: { Item: cart, users_permissions_users: user.id },
          },
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        )
        toast({
          title: 'Compra realizada con exito',
          status: 'success',
        })
        deleteAllProducts()
        navigate('/')
      } catch (error) {
        console.log(error)
        toast({
          title: 'Error',
          description: 'Ups algo salio mal',
          status: 'error',
        })
      }
    }
    setLoading(false)
  }

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
              onClick={handleOnClick}
              isLoading={loading}
              color="teal.400"
              textAlign="center"
              _hover={{
                background: 'gray.900',
                color: 'teal.500',
              }}
            >
              Finalizar comprar
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}
export default MyOrders
