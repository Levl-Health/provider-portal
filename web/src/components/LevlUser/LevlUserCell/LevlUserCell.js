import PatientsCell from 'src/components/Patient/PatientsCell'

export const QUERY = gql`
  query FindLevlUserById($email: String!) {
    levlUser(email: $email) {
      id
      providerId
      firstName
      lastName
      email
      Provider {
        Patient {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>LevlUser not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

let filters = {
  risk: '',
  symptoms: '',
  mood: '',
  adherence: '',
}

export const Success = ({ levlUser }) => {
  console.log(levlUser)
  return <></>
  /*
  return (
    <PatientsCell
      providerId={levlUser.providerId}
      filters={filters}
    ></PatientsCell>
  )*/
}
