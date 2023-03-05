import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_LEVL_USER_MUTATION = gql`
  mutation DeleteLevlUserMutation($id: Int!) {
    deleteLevlUser(id: $id) {
      id
    }
  }
`

const LevlUser = ({ levlUser }) => {
  const [deleteLevlUser] = useMutation(DELETE_LEVL_USER_MUTATION, {
    onCompleted: () => {
      toast.success('LevlUser deleted')
      navigate(routes.levlUsers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete levlUser ' + id + '?')) {
      deleteLevlUser({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LevlUser {levlUser.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{levlUser.id}</td>
            </tr>
            <tr>
              <th>Provider id</th>
              <td>{levlUser.providerId}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{levlUser.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{levlUser.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{levlUser.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLevlUser({ id: levlUser.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(levlUser.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default LevlUser
