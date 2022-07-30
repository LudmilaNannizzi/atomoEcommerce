import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { AiFillFire } from 'react-icons/ai'
import { NavLink as ReachLink } from 'react-router-dom'

import Log from '../Components/Log'
import Cart from '../Pages/Cart/Cart'

const Links = [
  { label: 'Tienda', url: '/shop' },
  { label: 'Nosotros', url: '/nosotros' },
]

const NavLink = ({ text, link }) => {
  return (
    <Link
      px={2}
      py={1}
      as={ReachLink}
      to={link}
      rounded={'md'}
      _hover={{ color: 'teal' }}
      style={({ isActive }) => (isActive ? { color: 'teal' } : undefined)}
    >
      {text}
    </Link>
  )
}

const Navbar2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box borderBottom="1px solid" bgColor="black" color="white">
      <Flex minH="4rem" alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          variant="link"
          color="white"
          display={{ md: 'none' }}
          ml={2}
          onClick={isOpen ? onClose : onOpen}
        />

        <Heading size="md" textTransform="capitalize" ml="4rem">
          <Link as={ReachLink} to={'/'}>
            <AiFillFire fontSize="2rem" />
          </Link>
        </Heading>

        <Flex alignItems={'center'} gap={{ base: 1, lg: 3 }} mr="4rem">
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            justify="flex-end"
          >
            {Links.map((link) => (
              <NavLink
                key={`link-${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </HStack>
          {/* Carrito */}
          <Cart />
          {/* Menu del usuario */}
          <Log />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={`link${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar2