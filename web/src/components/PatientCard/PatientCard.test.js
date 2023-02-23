import { render } from '@redwoodjs/testing/web'

import PatientCard from 'src/components/PatientCard/PatientCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientCard />)
    }).not.toThrow()
  })
})
