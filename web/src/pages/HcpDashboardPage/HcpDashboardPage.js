import { MetaTags } from '@redwoodjs/web'

import PatientList from 'src/components/PatientList'

const HcpDashboardPage = () => {
  return (
    <>
      <MetaTags title="HcpDashboard" description="HcpDashboard page" />

      <PatientList />
      {/* <Link to={routes.hcpDashboard()}>HcpDashboard</Link>` */}
    </>
  )
}

export default HcpDashboardPage
