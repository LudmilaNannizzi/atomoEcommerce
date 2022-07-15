import { Grid, Box, Spinner } from '@chakra-ui/react'

import ProductCard from '../../Components/ProductCard'
import useGet from '../../Hooks/useGet'
import FilterShop from './FilterShop'

const Shop = () => {
  const { data: products, isLoading } = useGet('products')

  return (
    <>
      <FilterShop />
      <Box w="100%" my="30px">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <Grid templateColumns="repeat(4, 1fr)" mx="auto" w="90%">
            {products &&
              products.map((product) => {
                return <ProductCard info={product} key={product.id} />
              })}
          </Grid>
        )}
      </Box>
    </>
  )
}

export default Shop
