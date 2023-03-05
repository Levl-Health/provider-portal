import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DailyMetricForm from 'src/components/DailyMetric/DailyMetricForm'

export const QUERY = gql`
  query EditDailyMetricById($id: Int!) {
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
const UPDATE_DAILY_METRIC_MUTATION = gql`
  mutation UpdateDailyMetricMutation(
    $id: Int!
    $input: UpdateDailyMetricInput!
  ) {
    updateDailyMetric(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dailyMetric }) => {
  const [updateDailyMetric, { loading, error }] = useMutation(
    UPDATE_DAILY_METRIC_MUTATION,
    {
      onCompleted: () => {
        toast.success('DailyMetric updated')
        navigate(routes.dailyMetrics())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDailyMetric({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DailyMetric {dailyMetric?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DailyMetricForm
          dailyMetric={dailyMetric}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
