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
          <img src='logo.png' alt='Logo' />
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup>
            <Button bg="transparent">Menu Item</Button>
            <Button bg="transparent">Menu Item</Button>
            <Button bg="transparent">Menu Item</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
              Menu Item
            </MenuButton>
            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuList>
          </Menu>
      </Box>
    </Flex>
  </>
  )
}

export default Navbar
