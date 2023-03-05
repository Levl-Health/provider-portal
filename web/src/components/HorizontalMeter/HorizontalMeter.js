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
          {imageSrc ? (
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
          ) : (
            <Circle
              bg="background.300"
              size="3em"
              position="relative"
              zIndex={1}
              left="-2em"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
            >
              <Circle bg={bgColor} size="2.25em" />
            </Circle>
          )}
        </Flex>
      </Box>
    </Box>
  )
}

export default HorizontalMeter
