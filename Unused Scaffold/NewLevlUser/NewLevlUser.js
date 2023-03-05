import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LevlUserForm from 'src/components/LevlUser/LevlUserForm'

const CREATE_LEVL_USER_MUTATION = gql`
  mutation CreateLevlUserMutation($input: CreateLevlUserInput!) {
    createLevlUser(input: $input) {
      id
    }
  }
`

const NewLevlUser = () => {
  const [createLevlUser, { loading, error }] = useMutation(
    CREATE_LEVL_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('LevlUser created')
        navigate(routes.levlUsers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createLevlUser({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LevlUser</h2>
      </header>
      <div className="rw-segment-main">
        <LevlUserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLevlUser
