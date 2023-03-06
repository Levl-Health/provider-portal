import { Link, routes } from '@redwoodjs/router'

import LevlUsers from 'src/components/LevlUser/LevlUsers'

export const QUERY = gql`
  query FindLevlUsers {
    levlUsers {
      id
      providerId
      firstName
      lastName
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No levlUsers yet. '}
      <Link to={routes.newLevlUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ levlUsers }) => {
  return <LevlUsers levlUsers={levlUsers} />
}
