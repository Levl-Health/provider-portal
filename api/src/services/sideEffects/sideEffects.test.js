import {
  sideEffects,
  sideEffect,
  createSideEffect,
  updateSideEffect,
  deleteSideEffect,
} from './sideEffects'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sideEffects', () => {
  scenario('returns all sideEffects', async (scenario) => {
    const result = await sideEffects()

    expect(result.length).toEqual(Object.keys(scenario.sideEffect).length)
  })

  scenario('returns a single sideEffect', async (scenario) => {
    const result = await sideEffect({ id: scenario.sideEffect.one.id })

    expect(result).toEqual(scenario.sideEffect.one)
  })

  scenario('creates a sideEffect', async (scenario) => {
    const result = await createSideEffect({
      input: {
        patientMetricsId: scenario.sideEffect.two.patientMetricsId,
        patientId: scenario.sideEffect.two.patientId,
        title: 'String',
      },
    })

    expect(result.patientMetricsId).toEqual(
      scenario.sideEffect.two.patientMetricsId
    )

    expect(result.patientId).toEqual(scenario.sideEffect.two.patientId)
    expect(result.title).toEqual('String')
  })

  scenario('updates a sideEffect', async (scenario) => {
    const original = await sideEffect({
      id: scenario.sideEffect.one.id,
    })
    const result = await updateSideEffect({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a sideEffect', async (scenario) => {
    const original = await deleteSideEffect({
      id: scenario.sideEffect.one.id,
    })
    const result = await sideEffect({ id: original.id })

    expect(result).toEqual(null)
  })
})
