import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/DailyMetric/DailyMetricsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DAILY_METRIC_MUTATION = gql`
  mutation DeleteDailyMetricMutation($id: Int!) {
    deleteDailyMetric(id: $id) {
      id
    }
  }
`

const DailyMetricsList = ({ dailyMetrics }) => {
  const [deleteDailyMetric] = useMutation(DELETE_DAILY_METRIC_MUTATION, {
    onCompleted: () => {
      toast.success('DailyMetric deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dailyMetric ' + id + '?')) {
      deleteDailyMetric({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Patient id</th>
            <th>Adhd</th>
            <th>Anxiety</th>
            <th>Depression</th>
            <th>Created at</th>
            <th>Mood</th>
            <th>Dosages</th>
            <th>Dosages taken</th>
            <th>Checked in</th>
            <th>Mood level</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dailyMetrics.map((dailyMetric) => (
            <tr key={dailyMetric.id}>
              <td>{truncate(dailyMetric.id)}</td>
              <td>{truncate(dailyMetric.patientId)}</td>
              <td>{truncate(dailyMetric.adhd)}</td>
              <td>{truncate(dailyMetric.anxiety)}</td>
              <td>{truncate(dailyMetric.depression)}</td>
              <td>{timeTag(dailyMetric.createdAt)}</td>
              <td>{truncate(dailyMetric.mood)}</td>
              <td>{truncate(dailyMetric.dosages)}</td>
              <td>{truncate(dailyMetric.dosagesTaken)}</td>
              <td>{truncate(dailyMetric.checkedIn)}</td>
              <td>{truncate(dailyMetric.moodLevel)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dailyMetric({ id: dailyMetric.id })}
                    title={'Show dailyMetric ' + dailyMetric.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDailyMetric({ id: dailyMetric.id })}
                    title={'Edit dailyMetric ' + dailyMetric.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete dailyMetric ' + dailyMetric.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dailyMetric.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DailyMetricsList
