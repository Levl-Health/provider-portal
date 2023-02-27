export const schema = gql`
  type Provider {
    id: Int!
    practiceName: String!
    LevlUser: [LevlUser]!
    Patient: [Patient]!
  }

  type Query {
    providers: [Provider!]! @requireAuth
    provider(id: Int!): Provider @requireAuth
  }

  input CreateProviderInput {
    practiceName: String!
  }

  input UpdateProviderInput {
    practiceName: String
  }

  type Mutation {
    createProvider(input: CreateProviderInput!): Provider! @requireAuth
    updateProvider(id: Int!, input: UpdateProviderInput!): Provider!
      @requireAuth
    deleteProvider(id: Int!): Provider! @requireAuth
  }
`
