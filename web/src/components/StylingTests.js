import {
  Box,
  Text,
  Flex,
  Img
} from "@chakra-ui/react"

const StylingTests = () => {
  return (
    <>
      <Text m="4" p="4" fontSize="72" lineHeight="48px" fontFamily="heading" borderBottom="1px" borderColor="gray.300">
        Heading 1
      </Text>
      <Text m="4" p="4" fontSize="48" lineHeight="48px" fontFamily="heading" borderBottom="1px" borderColor="gray.300">
        Heading 2
      </Text>
      <Text m="4" p="4" fontSize="36" lineHeight="48px" fontFamily="heading" borderBottom="1px" borderColor="gray.300">
        Heading 3
      </Text>

      <Text m="4" p="4" fontSize="24" lineHeight="48px" fontFamily="headline" borderBottom="1px" borderColor="gray.300">
        Headline
      </Text>

      <Text m="4" p="4" fontSize="24" lineHeight="32px" fontFamily="Inter-Bold, sans-serif" borderBottom="1px" borderColor="gray.300">
        Body - Bold
      </Text>

      <Text m="4" p="4" fontSize="24" lineHeight="32px" fontFamily="Inter-Medium, sans-serif" borderBottom="1px" borderColor="gray.300">
        Body - Medium
      </Text>

      <Text m="4" p="4" fontSize="24" lineHeight="24px" fontFamily="body" borderBottom="1px" borderColor="gray.300">
        Body
      </Text>

      <Text m="4" p="4" fontSize="14" lineHeight="24px" fontFamily="body" borderBottom="1px" borderColor="gray.300">
        Body - Small
      </Text>

      <Flex wrap="wrap" justifyContent="space-between">
      <Box  w={200} h={200} bg="background.100" borderRadius="md" boxShadow="md" m="3">
      <Text>background.100</Text>
      </Box>

      <Box  w={200} h={200} bg="background.200" borderRadius="md" boxShadow="md" m="3">
      <Text>background.200</Text>
      </Box>

      <Box  w={200} h={200} bg="background.300" borderRadius="md" boxShadow="md" m="3">
      <Text>background.300</Text>
      </Box>

      <Box  w={200} h={200} bg="grey.100" borderRadius="md" boxShadow="md" m="3">
      <Text>grey.100</Text>
      </Box>

      <Box  w={200} h={200} bg="grey.200" borderRadius="md" boxShadow="md" m="3">
      <Text>grey.200</Text>
      </Box>

      <Box  w={200} h={200} bg="grey.300" borderRadius="md" boxShadow="md" m="3">
      <Text>grey.300</Text>
      </Box>

      <Box  w={200} h={200} bg="grey.400" borderRadius="md" boxShadow="md" m="3">
      <Text>grey.400</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.green.100" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.green.100</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.green.200" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.green.200</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.coral.100" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.coral.100</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.coral.200" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.coral.200</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.electric-violet.100" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.electric-violet.100</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.electric-violet.200" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.electric-violet.200</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.blue.100" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.blue.100</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.blue.200" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.blue.200</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.yellow.100" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.yellow.100</Text>
      </Box>

      <Box  w={200} h={200} bg="brand.yellow.200" borderRadius="md" boxShadow="md" m="3">
      <Text>brand.yellow.200</Text>
      </Box>

      <Box  w={200} h={200} bg="emoji.green" borderRadius="md" boxShadow="md" m="3">
      <Text>emoji.green</Text>
      </Box>

      <Box  w={200} h={200} bg="emoji.lime" borderRadius="md" boxShadow="md" m="3">
      <Text>emoji.lime</Text>
      </Box>

      <Box  w={200} h={200} bg="emoji.orange" borderRadius="md" boxShadow="md" m="3">
      <Text>emoji.orange</Text>
      </Box>

    </Flex>

    <Flex flexWrap="wrap">
      <Img src="/images/mood_0.svg" alt="Image 1" m="3" w={200} h={200} />
      <Img src="/images/mood_1.svg" alt="Image 2" m="3" w={200} h={200} />
      <Img src="/images/mood_2.svg" alt="Image 3" m="3" w={200} h={200} />
      <Img src="/images/mood_3.svg" alt="Image 4" m="3" w={200} h={200} />
      <Img src="/images/mood_4.svg" alt="Image 5" m="3" w={200} h={200} />
    </Flex>
    </>
  )
}

export default StylingTests;
