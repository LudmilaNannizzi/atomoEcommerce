import { Box, Button, Flex, Heading } from '@chakra-ui/react'

import Aside from '../../Components/Aside'
import useFav from '../../Hooks/useFav'
import ProductFavs from './ProductsFavs'

const Favs = () => {
  const { fav, deleteAllProductsFav } = useFav('products')

  return (
    <Flex>
      <Aside />
      <Box my="30px" p="20px">
        <Heading>Favoritos </Heading>
        {fav.map((info) => (
          <ProductFavs key={info.id} product={info} />
        ))}
        <Button
          w="600px"
          m="50px"
          variant="outline"
          mb={3}
          onClick={deleteAllProductsFav}
        >
          Eliminar favoritos
        </Button>
      </Box>
    </Flex>
  )
}

export default Favs
