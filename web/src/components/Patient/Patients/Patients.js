import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Patient/PatientsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PATIENT_MUTATION = gql`
  mutation DeletePatientMutation($id: Int!) {
    deletePatient(id: $id) {
      id
    }
  }
`

const PatientsList = ({ patients }) => {
  const [deletePatient] = useMutation(DELETE_PATIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Patient deleted')
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
    if (confirm('Are you sure you want to delete patient ' + id + '?')) {
      deletePatient({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Provider id</th>
            <th>Active</th>
            <th>Overdue</th>
            <th>Risk status</th>
            <th>First name</th>
            <th>Middle name</th>
            <th>Last name</th>

            <th>Phone number</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{truncate(patient.id)}</td>
              <td>{truncate(patient.providerId)}</td>
              <td>{truncate(patient.active)}</td>
              <td>{truncate(patient.overdue)}</td>
              <td>{truncate(patient.riskStatus)}</td>
              <td>{truncate(patient.firstName)}</td>
              <td>{truncate(patient.middleName)}</td>
              <td>{truncate(patient.lastName)}</td>

              <td>{truncate(patient.phoneNumber)}</td>
              <td>
                <nav className="rw-table-actions">
                  {/*<Link
                    to={routes.patient({ id: patient.id })}
                    title={'Show patient ' + patient.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPatient({ id: patient.id })}
                    title={'Edit patient ' + patient.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  */}
                  <button
                    type="button"
                    title={'Delete patient ' + patient.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(patient.id)}
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

export default PatientsList
