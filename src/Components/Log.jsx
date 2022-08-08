import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import useUser from '../Hooks/useUser'

const Log = () => {
  const { signOut, user } = useUser()

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="black"
        rightIcon={<ChevronDownIcon />}
      >
        <FaUserAlt mx="10px" fontSize="1.5rem" />
      </MenuButton>

      <MenuList bgColor="black" color="teal">
        <Link to="/my-account">
          <MenuItem>{user.username}</MenuItem>
        </Link>
        <Link to="/orders">
          <MenuItem>Mis pedidos</MenuItem>
        </Link>

        <Link to="favs">
          <MenuItem>Favoritos</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={() => signOut(null)}>Salir</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
export default Log
