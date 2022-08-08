import { Box, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react'

import Aside from '../../Components/Aside'
import useGet from '../../Hooks/useGet'
import useUser from '../../Hooks/useUser'
import OrdersCard from './OrdersCard'

const Orders = () => {
  const { data: orders, isLoading } = useGet('orders')
  const { user } = useUser()
  if (!user) {
    return (
      <Box minH="100vh" p="30px">
        <Text> Inicie sesión para ver sus ordenes. </Text>
      </Box>
    )
  } else {
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
}

export default Orders
