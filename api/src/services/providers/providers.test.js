import {
  providers,
  provider,
  createProvider,
  updateProvider,
  deleteProvider,
} from './providers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('providers', () => {
  scenario('returns all providers', async (scenario) => {
    const result = await providers()

    expect(result.length).toEqual(Object.keys(scenario.provider).length)
  })

  scenario('returns a single provider', async (scenario) => {
    const result = await provider({ id: scenario.provider.one.id })

    expect(result).toEqual(scenario.provider.one)
  })

  scenario('creates a provider', async () => {
    const result = await createProvider({
      input: { practiceName: 'String' },
    })

    expect(result.practiceName).toEqual('String')
  })

  scenario('updates a provider', async (scenario) => {
    const original = await provider({
      id: scenario.provider.one.id,
    })
    const result = await updateProvider({
      id: original.id,
      input: { practiceName: 'String2' },
    })

    expect(result.practiceName).toEqual('String2')
  })

  scenario('deletes a provider', async (scenario) => {
    const original = await deleteProvider({
      id: scenario.provider.one.id,
    })
    const result = await provider({ id: original.id })

    expect(result).toEqual(null)
  })
})
