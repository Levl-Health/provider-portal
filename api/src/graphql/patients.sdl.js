export const schema = gql`
  type Patient {
    id: Int!
    providerId: Int!
    active: Int!
    overdue: Int!
    riskStatus: Int
    firstName: String!
    middleName: String
    lastName: String!

    phoneNumber: String!
    DailyMetric: [DailyMetric]!
    Provider: Provider!
    SideEffect: [SideEffect]!
  }

  type Query {
    patients(providerId: Int!, filters: JSON): [Patient!]! @requireAuth
    patient(id: Int!): Patient @requireAuth
  }

  input CreatePatientInput {
    providerId: Int!
    active: Int!
    overdue: Int!
    riskStatus: Int
    firstName: String!
    middleName: String
    lastName: String!
    phoneNumber: String!
  }

  input UpdatePatientInput {
    providerId: Int
    active: Int
    overdue: Int
    riskStatus: Int
    firstName: String
    middleName: String
    lastName: String
    phoneNumber: String
  }

  type Mutation {
    createPatient(input: CreatePatientInput!): Patient! @requireAuth
    updatePatient(id: Int!, input: UpdatePatientInput!): Patient! @requireAuth
    deletePatient(id: Int!): Patient! @requireAuth
  }
`
