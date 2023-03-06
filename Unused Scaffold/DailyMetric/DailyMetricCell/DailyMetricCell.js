import DailyMetric from 'src/components/DailyMetric/DailyMetric'

export const QUERY = gql`
  query FindDailyMetricById($id: Int!) {
    dailyMetric: dailyMetric(id: $id) {
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
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>DailyMetric not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dailyMetric }) => {
  return <DailyMetric dailyMetric={dailyMetric} />
}
