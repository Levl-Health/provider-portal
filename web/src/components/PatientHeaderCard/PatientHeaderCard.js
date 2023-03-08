import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Text,
  Img,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import HorizontalMeter from 'src/components/HorizontalMeter/HorizontalMeter'

const PatientHeaderCard = ({ patient }) => {
  return (
    <Box>
      <Box
        borderRadius="lg"
        boxShadow="md"
        m="1em"
        p="2em"
        fontSize="sm"
        bg="background.300"
      >
        <Flex alignItems="center">
          <Box borderRadius="full" overflow="hidden" mt="1.75em">
            <Img
              h="6.5em"
              src={patient.avatar}
              alt={`${patient.firstName} ${patient.lastName}`}
            />
          </Box>
          <Box m="1em">
            <Text pb=".25em" fontFamily="Greed, sans-serif" fontSize="3em">
              {patient.firstName + ' ' + patient.lastName}
            </Text>
            <HorizontalMeter
              riskStatus={patient.riskStatus}
              spacerWidth="10em"
              meterHeight="2.5em"
              hasMoodImg={false}
            />
          </Box>
        </Flex>
      </Box>
      <Flex alignItems="center">
        <Button
          fontSize="sm"
          width="50%"
          p="2.5em"
          m="1em"
          bg="grey.100"
          color="background.300"
          borderRadius="md"
          boxShadow="md"
        >
          Start Session
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            fontSize="sm"
            width="50%"
            bg="background.300"
            borderRadius="md"
            p="2.5em"
            m="1em"
            boxShadow="md"
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
            <MenuItem>Action 3</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}

export default PatientHeaderCard
