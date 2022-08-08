import {
  Box,
  Button,
  Heading,
  Spinner,
  Text,
  Flex,
  WrapItem,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import useCart from '../../Hooks/useCart'
import useGet from '../../Hooks/useGet'

const Detail = () => {
  const { id } = useParams()
  const { addProduct } = useCart()
  const { data: product, isLoading } = useGet(`products/${id}`)
  console.log(product)

  if (isLoading) return <Spinner mx="50%" my="50px" size="xl" />
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} minH="100vh">
      <WrapItem w={{ base: '90%', md: '50%' }} p="50px">
        <img src={product?.attributes.image.data.attributes.url} />
      </WrapItem>
      <WrapItem
        w={{ base: '90%', md: '40%' }}
        p="40px"
        display="flex"
        flexDirection="column"
        alignContent="space-between"
      >
        <Box>
          <Heading>{product?.attributes.title}</Heading>
          <Text fontSize="4xl">$ {product?.attributes.price}</Text>
          <Text fontSize="xl">
            Stock disponible: {product?.attributes.stock}
          </Text>
          <Text fontSize="xl">{product?.attributes.description} </Text>
        </Box>
        <Box mt="100px">
          <Button
            mb={3}
            w="full"
            variant="outline"
            _hover={{
              background: 'black',
              color: 'teal.500',
            }}
            onClick={() => addProduct(product)}
          >
            Agregar al carrito
          </Button>
          <Button
            variant="outline"
            _hover={{
              background: 'black',
              color: 'teal.500',
            }}
            mb={3}
            w="full"
          >
            Agregar a Favoritos
          </Button>
        </Box>
      </WrapItem>
    </Flex>
  )
}
export default Detail
