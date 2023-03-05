import { Box, Circle, Flex, Img, Text, Spacer } from '@chakra-ui/react'

const HorizontalMeter = ({
  text,
  textColor,
  imageSrc,
  bgColor,
  spacerWidth,
  meterHeight,
}) => {
  return (
    <Box position="relative" color={textColor}>
      <Box h="100%">
        <Flex alignItems="center" h="1.5em">
          <Flex
            alignItems="center"
            h={meterHeight}
            bg={bgColor}
            borderRadius="lg"
          >
            <Box>
              <Text ml=".5em">{text}</Text>
            </Box>
            <Spacer width={spacerWidth} />
          </Flex>
          <Circle
            bg="background.300"
            size="3em"
            position="relative"
            zIndex={1}
            left="-2em"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          >
            <Img src={imageSrc} h="80%" />
          </Circle>
        </Flex>
      </Box>
    </Box>
  )
}

export default HorizontalMeter

{
  /* <Box h="100%">
                <Flex alignItems="center" h="100%">
                  <Box
                    w="80%"
                    h="90%"
                    display="flex"
                    alignItems="center"
                    bg="emoji.green"
                    borderRadius="lg"
                  >
                    <Text ml=".5em">Very low-risk</Text>
                  </Box>
                  <Box
                    w="3em"
                    h="100%"
                    bg="background.300"
                    position="relative"
                    right="2.25em"
                    borderRadius="full"
                  ></Box>
                  <Img
                    position="relative"
                    src="/images/mood_0.svg"
                    h="90%"
                    right="4.5em"
                  />
                </Flex>
              </Box> */
}
