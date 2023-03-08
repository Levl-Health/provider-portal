// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <HorizontalMeter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import HorizontalMeter from 'src/components/HorizontalMeter/HorizontalMeter'

export const generated = (args) => {
  return <HorizontalMeter {...args} />
}

export default {
  title: 'Components/HorizontalMeter',
  component: HorizontalMeter,
  args: {
    riskStatus: 'High-risk for 3 weeks',
    spacerWidth: '10em',
    meterHeight: '2.5em',
    hasMoodImg: true,
  },
}
