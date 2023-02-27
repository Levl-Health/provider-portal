import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PATIENT_MUTATION = gql`
  mutation DeletePatientMutation($id: Int!) {
    deletePatient(id: $id) {
      id
    }
  }
`

const Patient = ({ patient }) => {
  const [deletePatient] = useMutation(DELETE_PATIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Patient deleted')
      navigate(routes.patients())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patient ' + id + '?')) {
      deletePatient({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Patient {patient.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{patient.id}</td>
            </tr>
            <tr>
              <th>Provider id</th>
              <td>{patient.providerId}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{patient.active}</td>
            </tr>
            <tr>
              <th>Overdue</th>
              <td>{patient.overdue}</td>
            </tr>
            <tr>
              <th>Risk status</th>
              <td>{patient.riskStatus}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{patient.firstName}</td>
            </tr>
            <tr>
              <th>Middle name</th>
              <td>{patient.middleName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{patient.lastName}</td>
            </tr>

            <tr>
              <th>Phone number</th>
              <td>{patient.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPatient({ id: patient.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(patient.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Patient
