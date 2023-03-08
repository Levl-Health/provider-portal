// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Filters {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Filters from './Filters'

export const generated = () => {
  return <Filters />
}

export default {
  title: 'Components/Filters',
  component: Filters,
}
