import React from 'react'

import { Box, Flex, Img, Text, Button } from '@chakra-ui/react'

import HorizontalMeter from 'src/components/HorizontalMeter/HorizontalMeter'

const PatientCard = ({ patient }) => {
  return (
    <>
      <Box
        borderRadius="lg"
        boxShadow="md"
        pt="1em"
        pb="1em"
        mb=".5em"
        mt=".5em"
        fontSize="sm"
        bg="background.300"
      >
        <Flex fontFamily="body" alignItems="center">
          <Box flex="1.5" ml="1em">
            <Flex alignItems="center">
              {/* Image */}
              <Box borderRadius="full" overflow="hidden">
                <Img
                  src={patient.avatar}
                  alt={`${patient.firstName} ${patient.lastName}`}
                />
              </Box>

              {/* Patient Name */}
              <Text ml="1em" fontWeight="bold">
                {`${patient.firstName} ${
                  patient.middleName ? patient.middleName + ' ' : ''
                }${patient.lastName}`}
              </Text>
            </Flex>
          </Box>

          {/* Risk Status */}
          <Box
            flex="1.25"
            h="3em"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <HorizontalMeter
              riskStatus={patient.riskStatus}
              spacerWidth="10em"
              meterHeight="2.5em"
              hasMoodImg={true}
            />
          </Box>

          {/* Symptoms */}
          <Box flex="1">
            <Box>Symptoms</Box>
          </Box>

          {/* Mood */}
          <Box flex="1">
            <Box>{patient.mood.join(', ')}</Box>
          </Box>

          {/* Adherence */}
          <Box flex="1">
            <Box w="75%">
              <Text fontWeight="bold">{patient.adherence}%</Text>
              <Box
                w={`${patient.adherence}%`}
                h="1em"
                bg="brand.blue.100"
                borderRadius="full"
              ></Box>
            </Box>
          </Box>

          {/* Last Check-In */}
          <Box flex="1">{patient.checkedIn}</Box>

          {/* Actions */}
          <Box flex="1">
            <Button
              fontSize="sm"
              width="95%"
              p="1em"
              mb="1em"
              bg="brand.coral.100"
              color="background.300"
              borderRadius="md"
              boxShadow="md"
            >
              Make Appointment
            </Button>
            <Button
              fontSize="sm"
              width="95%"
              bg="background.300"
              borderRadius="md"
              boxShadow="md"
            >
              Send Message
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default PatientCard
