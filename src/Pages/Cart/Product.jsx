import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import useCart from '../../Hooks/useCart'

const Product = ({ product }) => {
  const { deleteItemCart } = useCart()
  return (
    <Flex mt="5" w="100%" justifyContent="space-between">
      <Link to={`/shop/${product.id}`}>
        <Flex>
          <Image
            src={product.attributes.image.data.attributes.url}
            w="70px"
            mr="30px"
            objectFit="cover"
            alt={`imagen de producto ${product.attributes.title}`}
          />
          <Box>
            <Heading size="sm"> {product.attributes.title}</Heading>
            <Text>$ {product.attributes.price}</Text>
            <Text>Cantidad: {product.cantidad} </Text>
          </Box>
        </Flex>
      </Link>

      <IconButton
        icon={<BsFillTrashFill />}
        onClick={() => deleteItemCart(product.id)}
      />
    </Flex>
  )
}

export default Product
