import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SideEffectForm from 'src/components/SideEffect/SideEffectForm'

export const QUERY = gql`
  query EditSideEffectById($id: Int!) {
    sideEffect: sideEffect(id: $id) {
      id
      patientMetricsId
      patientId
      title
    }
  }
`
const UPDATE_SIDE_EFFECT_MUTATION = gql`
  mutation UpdateSideEffectMutation($id: Int!, $input: UpdateSideEffectInput!) {
    updateSideEffect(id: $id, input: $input) {
      id
      patientMetricsId
      patientId
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sideEffect }) => {
  const [updateSideEffect, { loading, error }] = useMutation(
    UPDATE_SIDE_EFFECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('SideEffect updated')
        navigate(routes.sideEffects())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSideEffect({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SideEffect {sideEffect?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SideEffectForm
          sideEffect={sideEffect}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
