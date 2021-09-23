import { ComponentProps } from 'react'
import { Container } from './styles'

export type ButtonProps = Omit<ComponentProps<typeof Container>, 'css'>

export const Button = ({ children, ...props }: ButtonProps) => (
  <Container {...props}>{children || 'Button'}</Container>
)
