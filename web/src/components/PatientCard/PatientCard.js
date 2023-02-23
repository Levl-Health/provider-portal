import React from 'react';
import { Box, Flex, Img, Spacer, Text, Button} from '@chakra-ui/react';

const PatientCard = ({ avatar, firstName, middleName, lastName, riskStatus, mood, adherence, checkedIn }) => {
  return (
    <>


      <Box borderRadius="lg" boxShadow="md" pt="1em" pb="1em" mb=".5em" mt=".5em" fontSize="sm" bg="background.300">
        <Flex fontFamily="body" alignItems="center">
          <Box flex="1.5" ml="1em">
            <Flex alignItems="center">
              {/* Image */}
              <Box borderRadius="full" overflow="hidden">
                <Img src={avatar} alt={`${firstName} ${lastName}`}/>
              </Box>

              {/* Patient Name */}
              <Text ml="1em" fontWeight="bold">
                {`${firstName} ${middleName ? middleName + ' ' : ''}${lastName}`}
              </Text>
            </Flex>
          </Box>

          {/* Risk Status */}
          <Box flex="1.25" h="3em" fontWeight="bold" color="background.300">
              { riskStatus === 'High-risk for 3 weeks' && (
                <Box h="100%">
                  <Flex alignItems="center" h="100%">
                    <Box w="80%" h="90%" display="flex" alignItems="center" bg="emoji.coral" borderRadius="lg">
                      <Text ml=".5em">High-risk</Text>
                    </Box>
                    <Box w="3em" h="100%" bg="background.300" position="relative" right="2.25em" borderRadius="full"></Box>
                    <Img
                    position="relative"
                    src="/images/mood_4.svg"
                    h="90%"
                    right="4.5em"
                    />
                  </Flex>
                </Box>
              )}
              { riskStatus === 'Very low-risk' && (
                <Box h="100%">
                  <Flex alignItems="center" h="100%">
                    <Box w="80%" h="90%" display="flex" alignItems="center" bg="emoji.green" borderRadius="lg">
                      <Text ml=".5em">Very low-risk</Text>
                    </Box>
                    <Box w="3em" h="100%" bg="background.300" position="relative" right="2.25em" borderRadius="full"></Box>
                    <Img
                    position="relative"
                    src="/images/mood_0.svg"
                    h="90%"
                    right="4.5em"
                    />
                  </Flex>
                </Box>
              )}
              { riskStatus === 'Low-risk' && (
                <Box h="100%">
                  <Flex alignItems="center" h="100%">
                    <Box w="80%" h="90%" display="flex" alignItems="center" bg="emoji.lime" borderRadius="lg">
                      <Text ml=".5em">Low-risk</Text>
                    </Box>
                    <Box w="3em" h="100%" bg="background.300" position="relative" right="2.25em" borderRadius="full"></Box>
                    <Img
                    position="relative"
                    src="/images/mood_1.svg"
                    h="90%"
                    right="4.5em"
                    />
                  </Flex>
                </Box>
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
              <Box w={`${adherence}%`} h="1em" bg="brand.blue.100" borderRadius="full"></Box>
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
                  boxShadow="md">
                    Make Appointment
                </Button>
                <Button
                  fontSize="sm"
                  width="95%"
                  bg="background.300"
                  borderRadius="md"
                  boxShadow="md">
                    Send Message
                </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default PatientCard;
