import { Button } from '.'

// TODO: Fix typo problems
// type ButtonStory = Story<ButtonProps>

export default {
  component: Button,
  title: 'components/Button',
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Primary = {
  args: { children: 'Primary Button' },
}

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Pill = {
  args: {
    variant: 'secondary',
    pill: true,
    children: 'Pill Button',
  },
}
