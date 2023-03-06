export const standard = defineScenario({
  sideEffect: {
    one: {
      data: {
        title: 'String',
        DailyMetric: {
          create: {
            createdAt: '2023-02-27T00:29:05.794Z',
            Patient: {
              create: {
                active: 86195,
                overdue: 7689891,
                firstName: 'String',
                lastName: 'String',
                phoneNumber: 'String',
                Provider: { create: { practiceName: 'String' } },
              },
            },
          },
        },
        Patient: {
          create: {
            active: 5534551,
            overdue: 5759624,
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
        title: 'String',
        DailyMetric: {
          create: {
            createdAt: '2023-02-27T00:29:05.794Z',
            Patient: {
              create: {
                active: 8091591,
                overdue: 137630,
                firstName: 'String',
                lastName: 'String',
                phoneNumber: 'String',
                Provider: { create: { practiceName: 'String' } },
              },
            },
          },
        },
        Patient: {
          create: {
            active: 815512,
            overdue: 2840426,
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
