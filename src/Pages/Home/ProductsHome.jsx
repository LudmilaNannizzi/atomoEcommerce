import { SimpleGrid, Box, Spinner } from '@chakra-ui/react'

import ProductCard from '../../Components/ProductCard'
import useGet from '../../Hooks/useGet'

const ProductsHome = () => {
  const { data: products, isLoading } = useGet(
    'products',
    '&filters[categories][name]=home'
  )

  return (
    <>
      <Box w="100%" my="30px">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <SimpleGrid minChildWidth="250px" spacing="30px" mx="auto" w="70%">
            {products &&
              products.map((product) => {
                return <ProductCard info={product} key={product.id} />
              })}
          </SimpleGrid>
        )}
      </Box>
    </>
  )
}

export default ProductsHome
