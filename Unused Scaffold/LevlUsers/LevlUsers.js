import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LevlUser/LevlUsersCell'
import { truncate } from 'src/lib/formatters'

const DELETE_LEVL_USER_MUTATION = gql`
  mutation DeleteLevlUserMutation($id: Int!) {
    deleteLevlUser(id: $id) {
      id
    }
  }
`

const LevlUsersList = ({ levlUsers }) => {
  const [deleteLevlUser] = useMutation(DELETE_LEVL_USER_MUTATION, {
    onCompleted: () => {
      toast.success('LevlUser deleted')
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
    if (confirm('Are you sure you want to delete levlUser ' + id + '?')) {
      deleteLevlUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Provider id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {levlUsers.map((levlUser) => (
            <tr key={levlUser.id}>
              <td>{truncate(levlUser.id)}</td>
              <td>{truncate(levlUser.providerId)}</td>
              <td>{truncate(levlUser.firstName)}</td>
              <td>{truncate(levlUser.lastName)}</td>
              <td>{truncate(levlUser.email)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.levlUser({ id: levlUser.id })}
                    title={'Show levlUser ' + levlUser.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLevlUser({ id: levlUser.id })}
                    title={'Edit levlUser ' + levlUser.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete levlUser ' + levlUser.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(levlUser.id)}
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

export default LevlUsersList
