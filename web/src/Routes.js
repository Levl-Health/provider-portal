// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'
import BannerLayout from './layouts/BannerLayout/BannerLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BannerLayout}>
        <Route path="/hcp-dashboard" page={HcpDashboardPage} name="hcpDashboard" />
        <Route path="/provider-dashboard" page={ProviderDashboardPage} name="providerDashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
