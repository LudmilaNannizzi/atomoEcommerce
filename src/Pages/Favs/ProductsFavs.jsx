import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import useCart from '../../Hooks/useCart'
import useFav from '../../Hooks/useFav'

const ProductFavs = ({ product }) => {
  const { addProduct } = useCart()
  const { deleteItemFav } = useFav()
  return (
    <Flex
      m="50px"
      w={{ base: '400px', md: '550px' }}
      h="120px"
      p="20px"
      borderRadius="10px"
      boxShadow="md"
      justifyContent="space-between"
      bgColor="rgb(43, 44, 48, 0.5)"
    >
      <Link to={`/shop/${product.id}`}>
        <Flex>
          <Image
            src={product.attributes.image.data.attributes.url}
            w="80px"
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
      <ButtonGroup
        h="110px"
        display="flex"
        flexDirection="column"
        alignContent="space-around"
      >
        <IconButton
          w="30px"
          ml="9px"
          icon={<BsFillTrashFill />}
          onClick={() => deleteItemFav(product.id)}
          variant="outline"
          _hover={{
            background: 'black',
            color: 'teal.500',
          }}
        />
        <IconButton
          w="30px"
          mt="10px"
          icon={<FaShoppingCart />}
          onClick={() => addProduct(product)}
          variant="outline"
          _hover={{
            background: 'black',
            color: 'teal.500',
          }}
        />
      </ButtonGroup>
    </Flex>
  )
}

export default ProductFavs
