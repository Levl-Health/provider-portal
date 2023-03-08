import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Provider/ProvidersCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PROVIDER_MUTATION = gql`
  mutation DeleteProviderMutation($id: Int!) {
    deleteProvider(id: $id) {
      id
    }
  }
`

const ProvidersList = ({ providers }) => {
  const [deleteProvider] = useMutation(DELETE_PROVIDER_MUTATION, {
    onCompleted: () => {
      toast.success('Provider deleted')
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
    if (confirm('Are you sure you want to delete provider ' + id + '?')) {
      deleteProvider({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Practice name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.id}>
              <td>{truncate(provider.id)}</td>
              <td>{truncate(provider.practiceName)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.provider({ id: provider.id })}
                    title={'Show provider ' + provider.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProvider({ id: provider.id })}
                    title={'Edit provider ' + provider.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete provider ' + provider.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(provider.id)}
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

export default ProvidersList
