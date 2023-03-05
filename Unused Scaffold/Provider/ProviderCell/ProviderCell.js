import Provider from 'src/components/Provider/Provider'

export const QUERY = gql`
  query FindProviderById($id: Int!) {
    provider: provider(id: $id) {
      id
      practiceName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Provider not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ provider }) => {
  return <Provider provider={provider} />
}
