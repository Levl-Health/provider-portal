import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PROVIDER_MUTATION = gql`
  mutation DeleteProviderMutation($id: Int!) {
    deleteProvider(id: $id) {
      id
    }
  }
`

const Provider = ({ provider }) => {
  const [deleteProvider] = useMutation(DELETE_PROVIDER_MUTATION, {
    onCompleted: () => {
      toast.success('Provider deleted')
      navigate(routes.providers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete provider ' + id + '?')) {
      deleteProvider({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Provider {provider.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{provider.id}</td>
            </tr>
            <tr>
              <th>Practice name</th>
              <td>{provider.practiceName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProvider({ id: provider.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(provider.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Provider
