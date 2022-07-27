import { Box } from '@chakra-ui/react'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <Box bgColor="#202124" color="#e1e1e3">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
export default Layout
