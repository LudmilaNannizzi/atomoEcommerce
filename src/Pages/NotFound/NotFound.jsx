import { Box, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box w="50%" mx="auto" h="100vh">
      <Heading size="3xl" mt="100px">
        Oops!
      </Heading>
      <Heading size="lg"> No encontramos la página que estás buscando</Heading>
      <Link to="/">
        <Button>Volver a atomolab.com.ar</Button>
      </Link>
    </Box>
  )
}
export default NotFound
