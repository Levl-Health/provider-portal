import {
  dailyMetrics,
  dailyMetric,
  createDailyMetric,
  updateDailyMetric,
  deleteDailyMetric,
} from './dailyMetrics'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dailyMetrics', () => {
  scenario('returns all dailyMetrics', async (scenario) => {
    const result = await dailyMetrics()

    expect(result.length).toEqual(Object.keys(scenario.dailyMetric).length)
  })

  scenario('returns a single dailyMetric', async (scenario) => {
    const result = await dailyMetric({ id: scenario.dailyMetric.one.id })

    expect(result).toEqual(scenario.dailyMetric.one)
  })

  scenario('creates a dailyMetric', async (scenario) => {
    const result = await createDailyMetric({
      input: {
        patientId: scenario.dailyMetric.two.patientId,
        createdAt: '2023-02-27T00:28:57.289Z',
      },
    })

    expect(result.patientId).toEqual(scenario.dailyMetric.two.patientId)
    expect(result.createdAt).toEqual(new Date('2023-02-27T00:28:57.289Z'))
  })

  scenario('updates a dailyMetric', async (scenario) => {
    const original = await dailyMetric({
      id: scenario.dailyMetric.one.id,
    })
    const result = await updateDailyMetric({
      id: original.id,
      input: { createdAt: '2023-02-28T00:28:57.289Z' },
    })

    expect(result.createdAt).toEqual(new Date('2023-02-28T00:28:57.289Z'))
  })

  scenario('deletes a dailyMetric', async (scenario) => {
    const original = await deleteDailyMetric({
      id: scenario.dailyMetric.one.id,
    })
    const result = await dailyMetric({ id: original.id })

    expect(result).toEqual(null)
  })
})
