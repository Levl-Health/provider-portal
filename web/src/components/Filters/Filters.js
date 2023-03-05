import {
  ButtonGroup,
  Box,
  Spacer,
  Text,
  Container,
  Stack,
  Icon,
  Select,
} from '@chakra-ui/react'

const Filters = () => {
  return (
    <div>
      <Container maxW="1728px" h="106px" paddingLeft="50px" paddingRight="54px" paddingY="25px">
        <Stack direction="row">
          <Box paddingY="19px">
            <Text>Filter Patients:</Text>
          </Box>
          <Spacer/>
          <Box>
          <ButtonGroup spacing="44px">
            <Select bg="background.300" width="237px" height="56px" placeholder='Risk Status'>
              <option value='option1'>High-risk</option>
              <option value='option2'>Moderate-risk</option>
              <option value='option3'>Low-risk</option>
              <option value='option3'>Very Low-risk</option>
            </Select>
            <Select bg="background.300" width="237px" height="56px" placeholder='Symptoms Reported'>
              <option value='option1'>ADHD</option>
              <option value='option2'>Depression</option>
              <option value='option3'>Anxiety</option>
            </Select>
            <Select bg="background.300" width="237px" height="56px" placeholder='Mood Reported'>
              <option value='option1'>Restless</option>
              <option value='option2'>Frustrated</option>
              <option value='option3'>Sad</option>
            </Select>
            <Select bg="background.300" width="237px" height="56px" placeholder='Adherance'>
              <option value='option1'>Hight to Low</option>
              <option value='option2'>Low to High</option>
            </Select>
            <Select bg="background.300" width="156px" height="56px" placeholder='Sort By'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </ButtonGroup>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}

export default Filters