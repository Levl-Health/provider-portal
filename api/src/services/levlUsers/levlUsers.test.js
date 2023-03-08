import {
  levlUsers,
  levlUser,
  createLevlUser,
  updateLevlUser,
  deleteLevlUser,
} from './levlUsers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('levlUsers', () => {
  scenario('returns all levlUsers', async (scenario) => {
    const result = await levlUsers()

    expect(result.length).toEqual(Object.keys(scenario.levlUser).length)
  })

  scenario('returns a single levlUser', async (scenario) => {
    const result = await levlUser({ id: scenario.levlUser.one.id })

    expect(result).toEqual(scenario.levlUser.one)
  })

  scenario('creates a levlUser', async (scenario) => {
    const result = await createLevlUser({
      input: {
        providerId: scenario.levlUser.two.providerId,
        firstName: 'String',
        lastName: 'String',
        email: 'String',
      },
    })

    expect(result.providerId).toEqual(scenario.levlUser.two.providerId)
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a levlUser', async (scenario) => {
    const original = await levlUser({
      id: scenario.levlUser.one.id,
    })
    const result = await updateLevlUser({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a levlUser', async (scenario) => {
    const original = await deleteLevlUser({
      id: scenario.levlUser.one.id,
    })
    const result = await levlUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
