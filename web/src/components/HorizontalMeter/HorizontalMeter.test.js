import { render } from '@redwoodjs/testing/web'

import HorizontalMeter from 'src/components/HorizontalMeter/HorizontalMeter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HorizontalMeter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HorizontalMeter />)
    }).not.toThrow()
  })
})
