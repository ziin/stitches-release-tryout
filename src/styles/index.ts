import { createStitches, ScaleValue } from '@stitches/react'

const pixelToRem = (value: number) => `${value / 16}rem`

const space = {
  4: pixelToRem(4),
  8: pixelToRem(8),
  12: pixelToRem(12),
  16: pixelToRem(16),
  20: pixelToRem(20),
  24: pixelToRem(24),
  28: pixelToRem(28),
  32: pixelToRem(32),
  36: pixelToRem(36),
  40: pixelToRem(40),
}

export const { styled: defaultStyled, globalCss, createTheme } = createStitches(
  {
    prefix: 'default',
    theme: {
      colors: {
        white: '#ffffff',

        gray900: '#090909',
        gray800: '#181818',
        gray700: '#333333',

        red: '#ff2748',

        background: '#090909',
        shape: '#181818',

        text: '#ffffff',
        'text-highlight': '#ff2748',
      },
      radii: {
        default: '0px',
        pill: '999999px',
      },
      space,
      sizes: space,
    },
    utils: {
      px: (value: ScaleValue<'space'>) => ({
        paddingRight: value,
        paddingLeft: value,
      }),
      py: (value: ScaleValue<'space'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  }
)

export const otherTheme = createTheme({
  colors: {
    red: '#223388',
  },
})

export const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
  },
})
