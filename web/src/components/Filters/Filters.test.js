import { render } from '@redwoodjs/testing/web'

import Filters from './Filters'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Filters', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Filters />)
    }).not.toThrow()
  })
})
