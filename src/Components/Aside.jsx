import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import useUser from '../Hooks/useUser'

const Aside = () => {
  const { signOut } = useUser()
  return (
    <TableContainer
      w="300px"
      boxShadow="dark-lg"
      h="255px"
      m="50px"
      display={{ base: 'none', md: 'flex' }}
    >
      <Table variant="outline">
        <Thead bgColor="rgb(43, 44, 48, 0.5)" w="100%">
          <Tr>
            <Th>Mi cuenta</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            borderBottom="1px solid white"
            _hover={{
              background: 'black',
              color: 'teal.500',
            }}
          >
            <Link to="/my-account">
              <Td>Mis datos</Td>
            </Link>
          </Tr>
          <Tr
            borderBottom="1px solid white"
            _hover={{
              background: 'black',
              color: 'teal.500',
            }}
          >
            <Td>Mis pedidos</Td>
          </Tr>
          <Tr
            borderBottom="1px solid white"
            _hover={{
              background: 'black',
              color: 'teal.500',
            }}
          >
            <Link to="/favs">
              <Td>Favoritos</Td>
            </Link>
          </Tr>
          <Tr
            borderBottom="1px solid white"
            _hover={{
              background: 'black',
              color: 'teal.500',
            }}
          >
            <Td onClick={() => signOut(null)}>Cerrar sesión</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
export default Aside
