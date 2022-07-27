import {
  Box,
  Button,
  Heading,
  Spinner,
  Text,
  Wrap,
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
    <Wrap>
      <WrapItem w="45%" p="50px">
        <img src={product?.attributes.image.data.attributes.url} />
      </WrapItem>
      <WrapItem
        w="50%"
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
            colorScheme="facebook"
            onClick={() => addProduct(product)}
          >
            Agregar al carrito
          </Button>
          <Button variant="outline" mb={3} w="full">
            Agregar a Favoritos
          </Button>
        </Box>
      </WrapItem>
    </Wrap>
  )
}
export default Detail
