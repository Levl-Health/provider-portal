// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PatientCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PatientCard from './PatientCard'

export const generated = (args) => {
  return <PatientCard {...args} />
}

export default {
  title: 'Components/PatientCard',
  component: PatientCard,
  args: {
    avatar: 'images/avatar_2.png',
    firstName: 'Milan',
    middleName: '',
    lastName: 'McGregor',
    riskStatus: 'Very low-risk',
    mood: ['Anxious', 'Average'],
    adherence: 80,
    checkedIn: '2022-12-20'
  }
}


