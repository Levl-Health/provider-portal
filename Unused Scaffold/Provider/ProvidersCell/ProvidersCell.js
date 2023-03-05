import { Link, routes } from '@redwoodjs/router'

import Providers from 'src/components/Provider/Providers'

export const QUERY = gql`
  query FindProviders {
    providers {
      id
      practiceName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No providers yet. '}
      <Link to={routes.newProvider()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ providers }) => {
  return <Providers providers={providers} />
}
