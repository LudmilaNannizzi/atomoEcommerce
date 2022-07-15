import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { DiTerminal } from 'react-icons/di'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const listStyle = {
  'list-style': 'none',
}

const Footer = () => {
  return (
    <Box h="10rem" bgColor="black" color="white" w="100%" p="30px">
      <Stack
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        px="30px"
      >
        <Flex>
          <ul style={listStyle}>
            <Link to="shop">
              <Heading as="h4" size="sm">
                Productos
              </Heading>
            </Link>

            <li>Espejos</li>
            <li>Luces</li>
          </ul>
          <Link to="aboutUs">
            <Heading as="h4" size="sm" px="15px">
              Nosotros
            </Heading>
          </Link>
        </Flex>
        <Link to="/">
          <Heading as="h4" size="sm">
            Logo
          </Heading>
        </Link>
      </Stack>
      <Stack justify="space-between" direction="row" align="center">
        <Text fontSize="sm" display="flex" alignItems="flex-end">
          <DiTerminal fontSize="2rem" />. Desarrollo: Ludmila Nannizzi
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/ludmila-nannizzi-dev/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="2rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="https://github.com/LudmilaNannizzi"
            aria-label="GitHub"
            icon={<FaGithub fontSize="2rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  )
}
export default Footer
