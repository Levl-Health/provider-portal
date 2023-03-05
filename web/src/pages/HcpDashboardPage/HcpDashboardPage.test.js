import { render } from '@redwoodjs/testing/web'

import HcpDashboardPage from 'src/pages/HcpDashboardPage/HcpDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HcpDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HcpDashboardPage />)
    }).not.toThrow()
  })
})
