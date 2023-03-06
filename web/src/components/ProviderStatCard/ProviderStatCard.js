import {
  Button,
  ButtonGroup,
  Box,
  Spacer,
  Text,
  Container,
  Stack,
  Img,
} from '@chakra-ui/react'



const ProviderStatCard = () => {
  return (
    <div>
      <Container bg="brand.blue.100" maxW="1728px" h="198px" paddingLeft="47px" paddingRight="54px" paddingY="30px">
        <Stack direction="row">
          <Box>
            <Button size='providerCard' bg="background.300">
            <Text fontSize="42" lineHeight="48px" fontFamily="heading">Hello, Farah</Text>
            </Button>
          </Box>
          <Spacer />
          <Box>
            <ButtonGroup spacing={30}>
              <Button bg="background.300" size='providerStatCard'>
                <Stack direction="column">
                  <Box>
                    <Img src="/images/mood_1.svg" alt="Image 2" w={35} h={35} />
                  </Box>
                  <Text fontSize="42x48" fontFamily="heading"> # </Text>
                  <Text>Active patients</Text>
                </Stack>
              </Button>
              <Button bg="background.300" size='providerStatCard'>
                <Stack direction="column">
                  <Box>
                    <Img src="/images/mood_2.svg" alt="Image 3" w={35} h={35} />
                  </Box>
                  <Text fontSize="42px" lineHeight="48px" fontFamily="heading"> # </Text>
                  <Text>Overdue patients</Text>
                </Stack>
              </Button>
              <Button bg="background.300" size='providerStatCard'>
                <Stack direction="column">
                  <Box>
                    <Img src="/images/mood_3.svg" alt="Image 4" w={35} h={35} />
                  </Box>
                  <Text fontSize="42" lineHeight="48px" fontFamily="heading"> # </Text>
                  <Text>High-risk patients</Text>
                </Stack>
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}

export default ProviderStatCard
