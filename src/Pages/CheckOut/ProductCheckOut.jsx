import { Image, Td, Tr } from '@chakra-ui/react'
import { FaRegWindowClose } from 'react-icons/fa'

import useCart from '../../Hooks/useCart'

const ProductCheckOut = ({ product }) => {
  const { deleteItemCart } = useCart()
  return (
    <Tr>
      <Td>
        <Image
          src={product.attributes.image.data.attributes.url}
          w="70px"
          mr="30px"
          objectFit="cover"
          alt={`imagen de producto ${product.attributes.title}`}
        />
      </Td>
      <Td>{product.attributes.title}</Td>
      <Td>$ {product.attributes.price} </Td>
      <Td>{product.cantidad}</Td>
      <Td>$ {product.cantidad * product.attributes.price}</Td>
      <Td onClick={() => deleteItemCart(product.id)}>
        <FaRegWindowClose />
      </Td>
    </Tr>
  )
}

export default ProductCheckOut
