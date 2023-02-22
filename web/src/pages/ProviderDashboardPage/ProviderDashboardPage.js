import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProviderStatCard from 'src/components/ProviderStatCard/ProviderStatCard'

const ProviderDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="ProviderDashboard"
        description="ProviderDashboard page"
      />
      <ProviderStatCard/>
    </>
  )
}

export default ProviderDashboardPage
