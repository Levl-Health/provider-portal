import { Link, routes } from '@redwoodjs/router'

import Patients from 'src/components/Patient/Patients'

export const QUERY = gql`
  query FindPatients($providerId: Int!) {
    patients(providerId: $providerId) {
      id
      providerId
      active
      overdue
      riskStatus
      firstName
      middleName
      lastName

      phoneNumber
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
