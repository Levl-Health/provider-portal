// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PatientHeaderCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PatientHeaderCard from 'src/components/PatientHeaderCard/PatientHeaderCard'

export const generated = (args) => {
  return <PatientHeaderCard {...args} />
}

export default {
  title: 'Components/PatientHeaderCard',
  component: PatientHeaderCard,
  args: {
    patient: {
      avatar: 'images/avatar_3.png',
      firstName: 'Jonathan',
      lastName: 'Michael',
      riskStatus: 'High-risk for 3 weeks',
    },
  },
}
