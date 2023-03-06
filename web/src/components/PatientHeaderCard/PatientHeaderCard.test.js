import { render } from '@redwoodjs/testing/web'

import PatientHeaderCard from 'src/components/PatientHeaderCard/PatientHeaderCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientHeaderCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientHeaderCard />)
    }).not.toThrow()
  })
})
