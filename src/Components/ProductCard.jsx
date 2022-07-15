import { Button, GridItem, Heading, Text, Image, Box } from '@chakra-ui/react'
import { FaEye, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import useCart from '../Hooks/useCart'

const ProductCard = ({ info }) => {
  const { addProduct } = useCart()
  const { attributes: product, id } = info

  return (
    <GridItem
      w="250px"
      h="410px"
      p="20px"
      boxShadow="md"
      my="15px"
      borderRadius="10px"
      alignContent="space-between"
    >
      <Box
        h="80%"
        display="flex"
        flexDirection="column"
        alignContent="space-between"
      >
        <Image src={product.image.data.attributes.url} alt="" boxSize="200px" />
        <Heading size="md">{product.title}</Heading>
        <Text>$ {product.price}</Text>
        <Text>Stock disponible {product.stock}</Text>
      </Box>
      <Box
        h="30%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button onClick={() => addProduct(info)}>
          <Text>Agregar </Text> <FaShoppingCart />
        </Button>
        <Link to={`/shop/${id}`}>
          <Button>
            <FaEye />
          </Button>
        </Link>
        <Button>
          <FaRegHeart />
        </Button>
      </Box>
    </GridItem>
  )
}
export default ProductCard
