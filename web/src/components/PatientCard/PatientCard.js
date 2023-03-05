import React from 'react'

import { Box, Flex, Img, Text, Button } from '@chakra-ui/react'

import HorizontalMeter from 'src/components/HorizontalMeter/HorizontalMeter'

const PatientCard = ({
  avatar,
  firstName,
  middleName,
  lastName,
  riskStatus,
  mood,
  adherence,
  checkedIn,
}) => {
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
                <Img src={avatar} alt={`${firstName} ${lastName}`} />
              </Box>

              {/* Patient Name */}
              <Text ml="1em" fontWeight="bold">
                {`${firstName} ${
                  middleName ? middleName + ' ' : ''
                }${lastName}`}
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
            {riskStatus === 'High-risk for 3 weeks' && (
              <HorizontalMeter
                text="High-risk"
                textColor="background.100"
                imageSrc="/images/mood_4.svg"
                bgColor="emoji.coral"
                spacerWidth="10em"
                meterHeight="2.5em"
              />
            )}
            {riskStatus === 'Very low-risk' && (
              <HorizontalMeter
                text="Very low-risk"
                textColor="background.100"
                imageSrc="/images/mood_0.svg"
                bgColor="emoji.green"
                spacerWidth="10em"
                meterHeight="2.5em"
              />
            )}
            {riskStatus === 'Low-risk' && (
              <HorizontalMeter
                text="Low-risk"
                textColor="background.100"
                imageSrc="/images/mood_1.svg"
                bgColor="emoji.lime"
                spacerWidth="10em"
                meterHeight="2.5em"
              />
            )}
          </Box>

          {/* Symptoms */}
          <Box flex="1">
            <Box>Symptoms</Box>
          </Box>

          {/* Mood */}
          <Box flex="1">
            <Box>{mood.join(', ')}</Box>
          </Box>

          {/* Adherence */}
          <Box flex="1">
            <Box w="75%">
              <Text fontWeight="bold">{adherence}%</Text>
              <Box
                w={`${adherence}%`}
                h="1em"
                bg="brand.blue.100"
                borderRadius="full"
              ></Box>
            </Box>
          </Box>

          {/* Last Check-In */}
          <Box flex="1">{checkedIn}</Box>

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
