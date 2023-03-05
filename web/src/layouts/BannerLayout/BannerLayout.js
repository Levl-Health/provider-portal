import Navbar from 'src/components/Navbar'
import { Box } from '@chakra-ui/react'

const BannerLayout = ({ children }) => {
  return (
  <>
  <Box bg="background.100" h="100vh" w="100vw" position="absolute" zIndex="-1" />
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
  </>
  )
}

export default BannerLayout
