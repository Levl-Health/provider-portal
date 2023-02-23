import { MetaTags } from '@redwoodjs/web'

import StylingTests from 'src/components/StylingTests'

const HcpDashboardPage = () => {
  return (
    <>
      <MetaTags title="HcpDashboard" description="HcpDashboard page" />
      <StylingTests />
      {/* <Link to={routes.hcpDashboard()}>HcpDashboard</Link>` */}
    </>
  )
}

export default HcpDashboardPage
