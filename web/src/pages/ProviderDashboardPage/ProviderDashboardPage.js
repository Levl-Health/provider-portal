import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProviderStatCard from 'src/components/ProviderStatCard/ProviderStatCard'
import Filters from 'src/components/Filters/Filters'

const ProviderDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="ProviderDashboard"
        description="ProviderDashboard page"
      />
      <ProviderStatCard/>
      <Filters/>
    </>
  )
}

export default ProviderDashboardPage
