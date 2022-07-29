import { Button, GridItem, Heading, Text, Image, Box } from '@chakra-ui/react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import useCart from '../Hooks/useCart'
import useFav from '../Hooks/useFav'

const ProductCard = ({ info }) => {
  const { addProduct } = useCart()
  const { attributes: product, id } = info
  const { addFav } = useFav()

  return (
    <GridItem
      w="250px"
      h="410px"
      p="20px"
      my="15px"
      borderRadius="10px"
      alignContent="space-between"
      bgColor="rgb(43, 44, 48, 0.5)"
    >
      <Link to={`/shop/${id}`}>
        <Box
          h="80%"
          display="flex"
          flexDirection="column"
          alignContent="space-between"
        >
          <Image
            src={product.image.data.attributes.url}
            alt=""
            boxSize="200px"
          />
          <Heading size="md">{product.title}</Heading>
          <Text>$ {product.price}</Text>
          <Text>Stock disponible {product.stock}</Text>
        </Box>
      </Link>
      <Box
        h="30%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          variant="outline"
          _hover={{
            background: 'black',
            color: 'teal.500',
          }}
          onClick={() => addProduct(info)}
        >
          <Text>Agregar al carrito </Text>
        </Button>
        <Button
          onClick={() => addFav(info)}
          variant="outline"
          _hover={{
            background: 'black',
            color: 'teal.500',
          }}
        >
          <FaRegHeart />
        </Button>
      </Box>
    </GridItem>
  )
}
export default ProductCard
