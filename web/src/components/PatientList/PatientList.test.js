import { render } from '@redwoodjs/testing/web'

import PatientList from './PatientList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PatientList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientList />)
    }).not.toThrow()
  })
})
