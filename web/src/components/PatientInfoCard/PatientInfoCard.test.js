import { render } from '@redwoodjs/testing/web'

import PatientInfoCard from 'src/components/PatientInfoCard/PatientInfoCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientInfoCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientInfoCard />)
    }).not.toThrow()
  })
})
