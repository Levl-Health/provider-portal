import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

import PatientCard from 'src/components/PatientCard/PatientCard'

const PatientList = () => {
  // Temporary Sample Data
  const samplePatients = [
    {
      avatar: 'images/avatar_3.png',
      firstName: 'Jonathan',
      middleName: 'Michael',
      lastName: 'Davis',
      riskStatus: 'High-risk for 3 weeks',
      mood: ['Restless', 'Frustated', 'Sad'],
      adherence: 60,
      checkedIn: '2022-12-05',
    },
    {
      avatar: 'images/avatar_4.png',
      firstName: 'Nadia',
      middleName: '',
      lastName: 'Esperanza',
      riskStatus: 'Very low-risk',
      mood: ['Happy', 'Relaxed', 'Grateful'],
      adherence: 96,
      checkedIn: '2022-12-22',
    },
    {
      avatar: 'images/avatar_2.png',
      firstName: 'Milan',
      middleName: '',
      lastName: 'McGregor',
      riskStatus: 'Very low-risk',
      mood: ['Meh', 'average'],
      adherence: 80,
      checkedIn: '2022-12-20',
    },
    {
      avatar: 'images/avatar_1.png',
      firstName: 'Alex',
      middleName: '',
      lastName: 'Lots',
      riskStatus: 'Low-risk',
      mood: ['Happy', 'Relaxed', 'Grateful'],
      adherence: 80,
      checkedIn: '2022-12-20',
    },
  ]

  return (
    <Box m="2em">
      <Flex
        bg="brand.blue.100"
        color="background.300"
        borderRadius="lg"
        fontFamily="headline"
        fontSize="lg"
        pl="1em"
        pt="1.5em"
        pb="1.5em"
      >
        <Box flex="1.5">Patient</Box>
        <Box flex="1.25">Risk Status</Box>
        <Box flex="1">
          <Flex alignItems="center">
            <Text>Symptoms</Text>
            <Icon
              as={InfoOutlineIcon}
              color="background.300"
              ml=".25em"
              w="1em"
              h="1em"
            />
          </Flex>
        </Box>
        <Box flex="1">Mood Reported</Box>
        <Box flex="1">Adherence</Box>
        <Box flex="1">Last Check-In</Box>
        <Box flex="1">Actions</Box>
      </Flex>

      <PatientCard {...samplePatients[0]} />
      <PatientCard {...samplePatients[1]} />
      <PatientCard {...samplePatients[2]} />
      <PatientCard {...samplePatients[3]} />
    </Box>
  )
}

export default PatientList
