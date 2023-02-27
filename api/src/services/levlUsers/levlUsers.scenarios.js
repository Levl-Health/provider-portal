export const standard = defineScenario({
  levlUser: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        Provider: { create: { practiceName: 'String' } },
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        Provider: { create: { practiceName: 'String' } },
      },
    },
  },
})
