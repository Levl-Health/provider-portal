export const standard = defineScenario({
  dailyMetric: {
    one: {
      data: {
        createdAt: '2023-02-27T00:28:57.296Z',
        Patient: {
          create: {
            active: 340448,
            overdue: 866483,
            firstName: 'String',
            lastName: 'String',
            phoneNumber: 'String',
            Provider: { create: { practiceName: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        createdAt: '2023-02-27T00:28:57.296Z',
        Patient: {
          create: {
            active: 6131625,
            overdue: 2391622,
            firstName: 'String',
            lastName: 'String',
            phoneNumber: 'String',
            Provider: { create: { practiceName: 'String' } },
          },
        },
      },
    },
  },
})
