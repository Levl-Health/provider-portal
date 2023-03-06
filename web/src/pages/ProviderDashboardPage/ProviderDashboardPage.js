import { MetaTags } from '@redwoodjs/web'

import Filters from 'src/components/Filters/Filters'
import ProviderStatCard from 'src/components/ProviderStatCard/ProviderStatCard'

const ProviderDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="ProviderDashboard"
        description="ProviderDashboard page"
      />
      <ProviderStatCard />
      <Filters />
    </>
  )
}

export default ProviderDashboardPage
