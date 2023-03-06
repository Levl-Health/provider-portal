import SideEffect from 'src/components/SideEffect/SideEffect'

export const QUERY = gql`
  query FindSideEffectById($id: Int!) {
    sideEffect: sideEffect(id: $id) {
      id
      patientMetricsId
      patientId
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SideEffect not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sideEffect }) => {
  return <SideEffect sideEffect={sideEffect} />
}
