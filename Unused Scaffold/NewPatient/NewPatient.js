import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PatientForm from 'src/components/Patient/PatientForm'

const CREATE_PATIENT_MUTATION = gql`
  mutation CreatePatientMutation($input: CreatePatientInput!) {
    createPatient(input: $input) {
      id
    }
  }
`

const NewPatient = () => {
  const [createPatient, { loading, error }] = useMutation(
    CREATE_PATIENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Patient created')
        navigate(routes.patients())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPatient({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Patient</h2>
      </header>
      <div className="rw-segment-main">
        <PatientForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPatient
