import { ButtonContainer, ButtonVariant } from './styles'

export type ButtonProps = {
  variant?: ButtonVariant
}

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
