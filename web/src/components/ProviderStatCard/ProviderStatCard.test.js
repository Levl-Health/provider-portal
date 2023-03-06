import { render } from '@redwoodjs/testing/web'

import ProviderStatCard from './ProviderStatCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProviderStatCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProviderStatCard />)
    }).not.toThrow()
  })
})
