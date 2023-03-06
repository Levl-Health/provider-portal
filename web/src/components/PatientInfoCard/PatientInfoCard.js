import { Box, Flex, Text, Link } from '@chakra-ui/react'

const PatientInfoCard = ({ patient }) => {
  return (
    <Box
      borderRadius="lg"
      boxShadow="md"
      m="2em"
      p="2em"
      fontSize="sm"
      bg="background.300"
    >
      <Text fontFamily="Greed, sans-serif" mb=".5em" fontSize="1.5em">
        Patient Information
      </Text>
      <Flex fontFamily="Inter, sans-serif" alignItems="flex-start">
        <Box flex="1" mr="2em">
          <Text>
            <b>Date of Birth: </b>
            {patient.dob}
          </Text>
          <Text>
            <b>Email: </b>
            {patient.email}
          </Text>
          <Text>
            <b>Phone: </b>
            {patient.phone}
          </Text>
        </Box>
        <Box flex="1" mr="2em">
          <Text>
            <b>Last Check In: </b>
            {patient.lastCheckIn}
          </Text>
          <Text>
            <b>Last Assesment: </b>
            {patient.lastAssesment}
          </Text>
        </Box>
        <Box flex="1">
          <Text>
            <b>Next Check In: </b>
            {patient.nextCheckIn}
          </Text>
          <Text>
            <b>Next Assesment: </b>
            {patient.nextAssesment}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" pt="1.5em">
        <Link color="brand.blue.100">View all information</Link>
      </Flex>
    </Box>
  )
}

export default PatientInfoCard
