import { Box, Heading, Text } from '@chakra-ui/react'

const AboutUs = () => {
  return (
    <Box minH="100vh" p={{ base: '20px', md: '100px' }}>
      <Heading size="lg"> Sobre Átomo Lab</Heading>
      <Text>
        Átomo Lab se creó como un espacio de experimentación lumínica diferentes
        objetos cotidianos.
      </Text>
    </Box>
  )
}
export default AboutUs
