import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DAILY_METRIC_MUTATION = gql`
  mutation DeleteDailyMetricMutation($id: Int!) {
    deleteDailyMetric(id: $id) {
      id
    }
  }
`

const DailyMetric = ({ dailyMetric }) => {
  const [deleteDailyMetric] = useMutation(DELETE_DAILY_METRIC_MUTATION, {
    onCompleted: () => {
      toast.success('DailyMetric deleted')
      navigate(routes.dailyMetrics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dailyMetric ' + id + '?')) {
      deleteDailyMetric({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DailyMetric {dailyMetric.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dailyMetric.id}</td>
            </tr>
            <tr>
              <th>Patient id</th>
              <td>{dailyMetric.patientId}</td>
            </tr>
            <tr>
              <th>Adhd</th>
              <td>{dailyMetric.adhd}</td>
            </tr>
            <tr>
              <th>Anxiety</th>
              <td>{dailyMetric.anxiety}</td>
            </tr>
            <tr>
              <th>Depression</th>
              <td>{dailyMetric.depression}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(dailyMetric.createdAt)}</td>
            </tr>
            <tr>
              <th>Mood</th>
              <td>{dailyMetric.mood}</td>
            </tr>
            <tr>
              <th>Dosages</th>
              <td>{dailyMetric.dosages}</td>
            </tr>
            <tr>
              <th>Dosages taken</th>
              <td>{dailyMetric.dosagesTaken}</td>
            </tr>
            <tr>
              <th>Checked in</th>
              <td>{dailyMetric.checkedIn}</td>
            </tr>
            <tr>
              <th>Mood level</th>
              <td>{dailyMetric.moodLevel}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDailyMetric({ id: dailyMetric.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dailyMetric.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default DailyMetric
