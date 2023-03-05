import { Link, routes } from '@redwoodjs/router'

import Patients from 'src/components/Patient/Patients'

export const QUERY = gql`
  query FindPatients($providerId: Int!, $filters: JSON) {
    patients(providerId: $providerId, filters: $filters) {
      id
      providerId
      active
      overdue
      riskStatus
      firstName
      middleName
      lastName
      phoneNumber
      DailyMetric {
        id
        patientId
        adhd
        anxiety
        depression
        createdAt
        mood
        dosages
        dosagesTaken
        checkedIn
        moodLevel
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No patients yet. '}
      <Link to={routes.newPatient()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ patients }) => {
  return <Patients patients={patients} />
}
