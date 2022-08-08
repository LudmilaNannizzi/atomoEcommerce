import { Box, Flex, SimpleGrid, Spinner } from '@chakra-ui/react'

import Aside from '../../Components/Aside'
import useGet from '../../Hooks/useGet'
import OrdersCard from './OrdersCard'

const Orders = () => {
  const { data: orders, isLoading } = useGet('orders')

  console.log(orders)

  return (
    <Flex>
      <Aside />
      <Box w="100%" my="30px">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <SimpleGrid minChildWidth="250px" spacing="30px" mx="auto" w="70%">
            {orders &&
              orders.map((order) => {
                return <OrdersCard key={order.id} order={order} />
              })}
          </SimpleGrid>
        )}
      </Box>
    </Flex>
  )
}

export default Orders
