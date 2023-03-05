import { Link, routes } from '@redwoodjs/router'

import DailyMetrics from 'src/components/DailyMetric/DailyMetrics'

export const QUERY = gql`
  query FindDailyMetrics {
    dailyMetrics {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dailyMetrics yet. '}
      <Link to={routes.newDailyMetric()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dailyMetrics }) => {
  return <DailyMetrics dailyMetrics={dailyMetrics} />
}
