import { defaultStyled } from '../../styles'

export const Container = defaultStyled('button', {
  appearance: 'none',
  border: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '$16 $32',
  color: '$white',

  variants: {
    variant: {
      primary: {
        background: '$red',
      },
      secondary: {
        background: 'transparent',
        border: '1px solid $red',
      },
    },
    pill: {
      true: {
        borderRadius: '$pill',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
