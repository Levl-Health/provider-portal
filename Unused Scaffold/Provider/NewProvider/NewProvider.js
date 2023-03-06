import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProviderForm from 'src/components/Provider/ProviderForm'

const CREATE_PROVIDER_MUTATION = gql`
  mutation CreateProviderMutation($input: CreateProviderInput!) {
    createProvider(input: $input) {
      id
    }
  }
`

const NewProvider = () => {
  const [createProvider, { loading, error }] = useMutation(
    CREATE_PROVIDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Provider created')
        navigate(routes.providers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProvider({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Provider</h2>
      </header>
      <div className="rw-segment-main">
        <ProviderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProvider
