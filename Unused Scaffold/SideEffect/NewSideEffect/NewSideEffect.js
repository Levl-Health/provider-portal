import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SideEffectForm from 'src/components/SideEffect/SideEffectForm'

const CREATE_SIDE_EFFECT_MUTATION = gql`
  mutation CreateSideEffectMutation($input: CreateSideEffectInput!) {
    createSideEffect(input: $input) {
      id
    }
  }
`

const NewSideEffect = () => {
  const [createSideEffect, { loading, error }] = useMutation(
    CREATE_SIDE_EFFECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('SideEffect created')
        navigate(routes.sideEffects())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSideEffect({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SideEffect</h2>
      </header>
      <div className="rw-segment-main">
        <SideEffectForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSideEffect
