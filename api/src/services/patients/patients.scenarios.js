export const standard = defineScenario({
  patient: {
    one: {
      data: {
        active: 5316085,
        overdue: 5153585,
        firstName: 'String',
        lastName: 'String',
        phoneNumber: 'String',
        Provider: { create: { practiceName: 'String' } },
      },
    },
    two: {
      data: {
        active: 1253712,
        overdue: 8347023,
        firstName: 'String',
        lastName: 'String',
        phoneNumber: 'String',
        Provider: { create: { practiceName: 'String' } },
      },
    },
  },
})
