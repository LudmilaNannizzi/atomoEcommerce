import { Flex, Text } from '@chakra-ui/react'
import { AiFillFire } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Log from '../Components/Log'
import Cart from '../Pages/Cart/Cart'

const Navbar = () => {
  return (
    <Flex
      w="100%"
      h="3rem"
      bgColor="black"
      color="white"
      alignItems="center"
      justifyContent="space-between"
      px="40px"
    >
      <Flex>
        <Link to="/">
          <AiFillFire fontSize="2rem" />
        </Link>
      </Flex>
      <Flex w="20%" justifyContent="space-around">
        <Flex w="50%" justifyContent="center">
          <Link to="/shop">
            <Text mx="10px">Tienda</Text>
          </Link>
          <Link to="/aboutUs" mx="20px">
            <Text mx="10px">Nosotros</Text>
          </Link>
        </Flex>
        <Flex w="50%" justifyContent="center">
          <Cart />
          <Link to="/">
            <Log />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Navbar
