import {
  Button,
  ButtonGroup,
  Box,
  Flex,
  Spacer,
  Text
} from '@chakra-ui/react'


const ProviderStatCard = () => {
  return (
    <div>
      <Flex bg="#4DB3F4">
      <Box height="198px" width="1728px">
        <Button left="47px" top={30} height="138px" width={317} bg="white">
          Hello, Farah
        </Button>
      </Box>
      <Spacer />
      <Box>
        <ButtonGroup spacing={30}>
          <Button top={30} right={54} bg="white" width="138px" height="138px"> Active patients</Button>
          <Button top={30} right={54} bg="white" width="138px" height="138px"> Overdue patients</Button>
          <Button top={30} right={54} bg="white" width="138px" height="138px"> High-risk patients</Button>
        </ButtonGroup>
      </Box>
      </Flex>

    </div>
  )
}

export default ProviderStatCard
