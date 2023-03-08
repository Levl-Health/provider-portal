// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PatientList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PatientList from 'src/components/PatientList/PatientList'

export const generated = () => {
  return <PatientList />
}

export default {
  title: 'Components/PatientList',
  component: PatientList,
}
