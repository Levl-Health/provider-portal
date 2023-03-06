export const schema = gql`
  type LevlUser {
    id: Int!
    providerId: Int!
    firstName: String!
    lastName: String!
    email: String!
    Provider: Provider!
  }

  type Query {
    levlUsers: [LevlUser!]! @requireAuth
    levlUser(email: String!): LevlUser @requireAuth
  }

  input CreateLevlUserInput {
    providerId: Int!
    firstName: String!
    lastName: String!
    email: String!
  }

  input UpdateLevlUserInput {
    providerId: Int
    firstName: String
    lastName: String
    email: String
  }

  type Mutation {
    createLevlUser(input: CreateLevlUserInput!): LevlUser! @requireAuth
    updateLevlUser(id: Int!, input: UpdateLevlUserInput!): LevlUser!
      @requireAuth
    deleteLevlUser(id: Int!): LevlUser! @requireAuth
  }
`
