import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'
const OrdersCard = ({ order }) => {
  return (
    <Box w="250px" minH="150px" bgColor="rgb(43, 44, 48, 0.5)" p="15px">
      <Heading size="md">Pedido N° {order.id}</Heading>
      <Text> {new Date(order.attributes.createdAt).toLocaleDateString()}</Text>
      <Box>
        <UnorderedList>
          {order.attributes.Item.map((item) => (
            <ListItem key={item.id} fontSize="sm">
              {item.attributes.title}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  )
}
export default OrdersCard
