import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProviderDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="ProviderDashboard"
        description="ProviderDashboard page"
      />

      <h1>ProviderDashboardPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/ProviderDashboardPage/ProviderDashboardPage.js
        </code>
      </p>
      <p>
        My default route is named <code>providerDashboard</code>, link to me
        with `<Link to={routes.providerDashboard()}>ProviderDashboard</Link>`
      </p>
    </>
  )
}

export default ProviderDashboardPage
