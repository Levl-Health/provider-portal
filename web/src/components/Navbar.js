import { Box, Flex, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
      <Flex alignItems="center">
        <Box>
          <img src="images/logo.png" alt="Logo" />
        </Box>
        <Spacer />
      </Flex>
    </>
  )
}

export default Navbar
