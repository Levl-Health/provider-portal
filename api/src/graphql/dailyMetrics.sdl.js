export const schema = gql`
  type DailyMetric {
    id: Int!
    patientId: Int!
    adhd: Int
    anxiety: Int
    depression: Int
    createdAt: DateTime!
    mood: String
    dosages: Int
    dosagesTaken: Int
    checkedIn: Int
    moodLevel: Int
    Patient: Patient!
    SideEffect: [SideEffect]!
  }

  type Query {
    dailyMetrics: [DailyMetric!]! @requireAuth
    dailyMetric(id: Int!): DailyMetric @requireAuth
  }

  input CreateDailyMetricInput {
    patientId: Int!
    adhd: Int
    anxiety: Int
    depression: Int
    mood: String
    dosages: Int
    dosagesTaken: Int
    checkedIn: Int
    moodLevel: Int
  }

  input UpdateDailyMetricInput {
    patientId: Int
    adhd: Int
    anxiety: Int
    depression: Int
    mood: String
    dosages: Int
    dosagesTaken: Int
    checkedIn: Int
    moodLevel: Int
  }

  type Mutation {
    createDailyMetric(input: CreateDailyMetricInput!): DailyMetric! @requireAuth
    updateDailyMetric(id: Int!, input: UpdateDailyMetricInput!): DailyMetric!
      @requireAuth
    deleteDailyMetric(id: Int!): DailyMetric! @requireAuth
  }
`
