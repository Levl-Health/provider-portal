import { Link, routes } from '@redwoodjs/router'

import SideEffects from 'src/components/SideEffect/SideEffects'

export const QUERY = gql`
  query FindSideEffects {
    sideEffects {
      id
      patientMetricsId
      patientId
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sideEffects yet. '}
      <Link to={routes.newSideEffect()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sideEffects }) => {
  return <SideEffects sideEffects={sideEffects} />
}
