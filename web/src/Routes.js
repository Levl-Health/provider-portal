// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'

import BannerLayout from 'src/layouts/BannerLayout/BannerLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/landing" page={LandingPage} name="landing" />
      <Set wrap={ScaffoldLayout} title="SideEffects" titleTo="sideEffects" buttonLabel="New SideEffect" buttonTo="newSideEffect">
        <Route path="/side-effects/new" page={SideEffectNewSideEffectPage} name="newSideEffect" />
        <Route path="/side-effects/{id:Int}/edit" page={SideEffectEditSideEffectPage} name="editSideEffect" />
        <Route path="/side-effects/{id:Int}" page={SideEffectSideEffectPage} name="sideEffect" />
        <Route path="/side-effects" page={SideEffectSideEffectsPage} name="sideEffects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="DailyMetrics" titleTo="dailyMetrics" buttonLabel="New DailyMetric" buttonTo="newDailyMetric">
        <Route path="/daily-metrics/new" page={DailyMetricNewDailyMetricPage} name="newDailyMetric" />
        <Route path="/daily-metrics/{id:Int}/edit" page={DailyMetricEditDailyMetricPage} name="editDailyMetric" />
        <Route path="/daily-metrics/{id:Int}" page={DailyMetricDailyMetricPage} name="dailyMetric" />
        <Route path="/daily-metrics" page={DailyMetricDailyMetricsPage} name="dailyMetrics" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Patients" titleTo="patients" buttonLabel="New Patient" buttonTo="newPatient">
        <Route path="/patients/new" page={PatientNewPatientPage} name="newPatient" />
        <Route path="/patients/{id:Int}/edit" page={PatientEditPatientPage} name="editPatient" />
        <Route path="/patients/{id:Int}" page={PatientPatientPage} name="patient" />
        <Route path="/patients" page={PatientPatientsPage} name="patients" />
      </Set>
      <Set wrap={ScaffoldLayout} title="LevlUsers" titleTo="levlUsers" buttonLabel="New LevlUser" buttonTo="newLevlUser">
        <Route path="/levl-users/new" page={LevlUserNewLevlUserPage} name="newLevlUser" />

        <Route path="/levl-users/{id:Int}" page={LevlUserLevlUserPage} name="levlUser" />
        <Route path="/levl-users" page={LevlUserLevlUsersPage} name="levlUsers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Providers" titleTo="providers" buttonLabel="New Provider" buttonTo="newProvider">
        <Route path="/providers/new" page={ProviderNewProviderPage} name="newProvider" />
        <Route path="/providers/{id:Int}/edit" page={ProviderEditProviderPage} name="editProvider" />
        <Route path="/providers/{id:Int}" page={ProviderProviderPage} name="provider" />
        <Route path="/providers" page={ProviderProvidersPage} name="providers" />
      </Set>
      <Set wrap={BannerLayout}>
        <Route path="/hcp-dashboard" page={HcpDashboardPage} name="hcpDashboard" />
        <Route path="/provider-dashboard" page={ProviderDashboardPage} name="providerDashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
