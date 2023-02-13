import { render } from '@redwoodjs/testing/web'

import ProviderDashboardPage from './ProviderDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProviderDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProviderDashboardPage />)
    }).not.toThrow()
  })
})
