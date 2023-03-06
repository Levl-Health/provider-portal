import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DailyMetricForm from 'src/components/DailyMetric/DailyMetricForm'

const CREATE_DAILY_METRIC_MUTATION = gql`
  mutation CreateDailyMetricMutation($input: CreateDailyMetricInput!) {
    createDailyMetric(input: $input) {
      id
    }
  }
`

const NewDailyMetric = () => {
  const [createDailyMetric, { loading, error }] = useMutation(
    CREATE_DAILY_METRIC_MUTATION,
    {
      onCompleted: () => {
        toast.success('DailyMetric created')
        navigate(routes.dailyMetrics())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDailyMetric({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DailyMetric</h2>
      </header>
      <div className="rw-segment-main">
        <DailyMetricForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDailyMetric
