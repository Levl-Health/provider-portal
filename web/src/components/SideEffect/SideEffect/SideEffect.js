import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_SIDE_EFFECT_MUTATION = gql`
  mutation DeleteSideEffectMutation($id: Int!) {
    deleteSideEffect(id: $id) {
      id
    }
  }
`

const SideEffect = ({ sideEffect }) => {
  const [deleteSideEffect] = useMutation(DELETE_SIDE_EFFECT_MUTATION, {
    onCompleted: () => {
      toast.success('SideEffect deleted')
      navigate(routes.sideEffects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sideEffect ' + id + '?')) {
      deleteSideEffect({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SideEffect {sideEffect.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{sideEffect.id}</td>
            </tr>
            <tr>
              <th>Patient metrics id</th>
              <td>{sideEffect.patientMetricsId}</td>
            </tr>
            <tr>
              <th>Patient id</th>
              <td>{sideEffect.patientId}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{sideEffect.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSideEffect({ id: sideEffect.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(sideEffect.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SideEffect
