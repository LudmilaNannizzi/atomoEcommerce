import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'

import Aside from '../../Components/Aside'
import useUser from '../../Hooks/useUser'
const MyAccount = () => {
  const { user } = useUser()
  return (
    <Flex display="flex">
      <Aside />
      <Box m="50px">
        <Heading size="md">¡Hola, {user.username}! </Heading>
        <Text my="15px">
          Desde esta sección vas a poder acceder de manera instanteanea a la
          información y actividades recientes
        </Text>
        <Heading>Información de la cuenta </Heading>
        <Divider my="15px" />
        <Text>{user.username} </Text>
        <Text>{user.email} </Text>
        <Heading size="lg" mt="30px">
          Direcciones{' '}
        </Heading>
        <Divider my="15px" />
      </Box>
    </Flex>
  )
}
export default MyAccount
