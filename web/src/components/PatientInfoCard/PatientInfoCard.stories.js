// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PatientInfoCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PatientInfoCard from 'src/components/PatientInfoCard/PatientInfoCard'

export const generated = (args) => {
  return <PatientInfoCard {...args} />
}

export default {
  title: 'Components/PatientInfoCard',
  component: PatientInfoCard,
  args: {
    patient: {
      dob: '2011-01-01 (Age 12)',
      email: 'Jonathan@michaeldavis.com',
      phone: '+5 555.555.5555',
      lastCheckIn: 'Today',
      lastAssesment: '10/21/2022',
      nextCheckIn: 'Today',
      nextAssesment: '10/21/2024',
    },
  },
}
