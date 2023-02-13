import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HcpDashboardPage = () => {
  return (
    <>
      <MetaTags title="HcpDashboard" description="HcpDashboard page" />

      <h1>HcpDashboardPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/HcpDashboardPage/HcpDashboardPage.js</code>
      </p>
      <p>
        My default route is named <code>hcpDashboard</code>, link to me with `
        <Link to={routes.hcpDashboard()}>HcpDashboard</Link>`
      </p>
    </>
  )
}

export default HcpDashboardPage
