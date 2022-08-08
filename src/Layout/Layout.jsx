import { Box } from '@chakra-ui/react'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <Box
      backgroundImage=" linear-gradient(to right bottom, #535253, #5c5a65, #5a6479, #4a728a, #2f8093, #217f8b, #177e82, #157c77, #156c67, #145c58, #134c49, #113d3b);"
      color="#e1e1e3"
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
export default Layout
