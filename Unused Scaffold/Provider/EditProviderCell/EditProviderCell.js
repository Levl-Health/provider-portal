import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProviderForm from 'src/components/Provider/ProviderForm'

export const QUERY = gql`
  query EditProviderById($id: Int!) {
    provider: provider(id: $id) {
      id
      practiceName
    }
  }
`
const UPDATE_PROVIDER_MUTATION = gql`
  mutation UpdateProviderMutation($id: Int!, $input: UpdateProviderInput!) {
    updateProvider(id: $id, input: $input) {
      id
      practiceName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ provider }) => {
  const [updateProvider, { loading, error }] = useMutation(
    UPDATE_PROVIDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Provider updated')
        navigate(routes.providers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProvider({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Provider {provider?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProviderForm
          provider={provider}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
