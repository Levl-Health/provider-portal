import {
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
  <>
      <Flex alignItems="center">
        <Box>
          <img src='images/logo.png' alt='Logo' />
        </Box>
        <Spacer />
    </Flex>
  </>
  )
}

export default Navbar
