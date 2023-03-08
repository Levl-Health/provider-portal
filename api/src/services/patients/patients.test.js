import {
  patients,
  patient,
  createPatient,
  updatePatient,
  deletePatient,
} from './patients'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('patients', () => {
  scenario('returns all patients', async (scenario) => {
    const result = await patients()

    expect(result.length).toEqual(Object.keys(scenario.patient).length)
  })

  scenario('returns a single patient', async (scenario) => {
    const result = await patient({ id: scenario.patient.one.id })

    expect(result).toEqual(scenario.patient.one)
  })

  scenario('creates a patient', async (scenario) => {
    const result = await createPatient({
      input: {
        providerId: scenario.patient.two.providerId,
        active: 4051920,
        overdue: 9778990,
        firstName: 'String',
        lastName: 'String',
        phoneNumber: 'String',
      },
    })

    expect(result.providerId).toEqual(scenario.patient.two.providerId)
    expect(result.active).toEqual(4051920)
    expect(result.overdue).toEqual(9778990)
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.phoneNumber).toEqual('String')
  })

  scenario('updates a patient', async (scenario) => {
    const original = await patient({ id: scenario.patient.one.id })
    const result = await updatePatient({
      id: original.id,
      input: { active: 4143723 },
    })

    expect(result.active).toEqual(4143723)
  })

  scenario('deletes a patient', async (scenario) => {
    const original = await deletePatient({
      id: scenario.patient.one.id,
    })
    const result = await patient({ id: original.id })

    expect(result).toEqual(null)
  })
})
