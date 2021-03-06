import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import useUser from '../Hooks/useUser'
import authModaState from '../Recoil/authModalAtom'

const Log = () => {
  const { signOut } = useUser()
  /* const [setShowModal] = useRecoilState(authModaState) */

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="black"
        rightIcon={<ChevronDownIcon />}
      >
        <FaUserAlt mx="10px" fontSize="1.5rem" />
      </MenuButton>

      <MenuList bgColor="black">
        <Link to="/my-account">
          <MenuItem>Mis datos</MenuItem>
        </Link>
        <MenuItem>Mis pedidos</MenuItem>
        <Link to="favs">
          <MenuItem>Favoritos</MenuItem>
        </Link>

        <MenuItem onClick={() => signOut(null)}>Salir</MenuItem>
      </MenuList>
    </Menu>
  )
}
export default Log
