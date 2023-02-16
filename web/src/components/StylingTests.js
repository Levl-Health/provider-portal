import {
  Box,
  Text
} from "@chakra-ui/react"

const StylingTests = () => {
  return (
    <>
      <Text fontSize="42x48" lineHeight="48px" fontFamily="Greed, sans-serif">
        This is big text
      </Text>
      <Text fontSize="24x32" lineHeight="32px" fontFamily="Inter, sans-serif">
        This is medium text
      </Text>
      <Text fontSize="16x24" lineHeight="24px" fontFamily="Inter, sans-serif">
        This is small text
      </Text>

      <Box
        w={200}
        h={200}
        bg="brand.green.100"
        borderRadius="md"
        boxShadow="md"
      />
    </>
  )
}

export default StylingTests;
