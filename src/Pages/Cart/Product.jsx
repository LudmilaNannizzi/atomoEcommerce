import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'

import useCart from '../../Hooks/useCart'

const Product = ({ product }) => {
  const { deleteItemCart } = useCart()
  return (
    <Flex mt="5">
      <Image
        src={product.image}
        w="70px"
        objectFit="cover"
        alt={`imagen de producto ${product.title}`}
      />
      <Box>
        <Heading size="sm"> {product.title}</Heading>
        <Text>{product.price}</Text>
        <Text>{product.cantidad}</Text>
      </Box>
      <IconButton
        icon={<BsFillTrashFill />}
        onClick={() => deleteItemCart(product.id)}
      />
    </Flex>
  )
}

export default Product
