import { MetaTags } from '@redwoodjs/web'

import PatientList from 'src/components/PatientList'

const ProviderDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="ProviderDashboard"
        description="ProviderDashboard page"
      />

      <PatientList />
    </>
  )
}

export default ProviderDashboardPage
