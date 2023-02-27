import LevlUser from 'src/components/LevlUser/LevlUser'
import PatientsCell from 'src/components/Patient/PatientsCell'

export const QUERY = gql`
  query FindLevlUserById($email: String!) {
    levlUser(email: $email) {
      id
      providerId
      firstName
      lastName
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>LevlUser not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ levlUser }) => {
  return <PatientsCell providerId={levlUser.providerId}></PatientsCell>
}
