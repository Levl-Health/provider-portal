// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options

import { extendTheme } from '@chakra-ui/react'
import '/public/fonts.css'

const BaseTheme = extendTheme(
  {
    colors: {
      background: {
        100: '#FFF5ED',
        200: '#FFF8F3',
        300: '#FFFFFF',
      },
      grey: {
        100: '#363636',
        200: '#888C93',
        300: '#D6D6D7',
        400: '#FAFAFA',
      },
      brand: {
        green: {
          100: '#317C07',
          200: '#D6E5CD',
        },
        coral: {
          100: '#F17454',
          200: '#FCE3DD',
        },
        'electric-violet': {
          100: '#7642fe',
          200: '#E4D9FF',
        },
        blue: {
          100: '#4DB3F4',
          200: '#DBF0FD',
        },
        yellow: {
          100: '#FAD93C',
          200: '#FEF7D8',
        },
      },
      emoji: {
        green: '#63B635',
        lime: '#C2D64D',
        yellow: '#fad93c',
        orange: '#FA803C',
        coral: '#F17454',
      },
    },

    fonts: {
      heading: 'Greed, sans-serif',
      headline: 'Inter-SemiBold, sans-serif',
      body: 'Inter, sans-serif',
    },

    fontSizes: {
      '42x48': { size: '42px', lineHeight: '48px' },
      '24x32': { size: '24px', lineHeight: '32px' },
      '18x24': { size: '18px', lineHeight: '24px' },
      '16x24': { size: '16px', lineHeight: '24px' },
      '11x16': { size: '11px', lineHeight: '16px' },
      '14x24': { size: '14px', lineHeight: '24px' },
    },
  },
  {
    components: {
      Button: {
        sizes: {
          providerStatCard: {
            h: '138px',
            w: '138px',
          },
          providerCard: {
            h: '138px',
            w: '317px',
          },
        },
      },
      Select: {
        sizes: {
          filter1: {
            h: '56px',
            w: '237px',
          },
          filter2: {
            h: '56px',
            w: '156px',
          },
        },
      },
    },
  }
)

export default BaseTheme
