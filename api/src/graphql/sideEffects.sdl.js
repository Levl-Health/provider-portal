export const schema = gql`
  type SideEffect {
    id: Int!
    patientMetricsId: Int!
    patientId: Int!
    title: String!
    DailyMetric: DailyMetric!
    Patient: Patient!
  }

  type Query {
    sideEffects: [SideEffect!]! @requireAuth
    sideEffect(id: Int!): SideEffect @requireAuth
  }

  input CreateSideEffectInput {
    patientMetricsId: Int!
    patientId: Int!
    title: String!
  }

  input UpdateSideEffectInput {
    patientMetricsId: Int
    patientId: Int
    title: String
  }

  type Mutation {
    createSideEffect(input: CreateSideEffectInput!): SideEffect! @requireAuth
    updateSideEffect(id: Int!, input: UpdateSideEffectInput!): SideEffect!
      @requireAuth
    deleteSideEffect(id: Int!): SideEffect! @requireAuth
  }
`
