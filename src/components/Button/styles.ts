import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

type ButtonContainerProps = {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  border: 0;
  margin: 12px;

  background: ${({ theme }) => theme['green-500']};

  /* ${({ variant }) => css`
    background: ${buttonVariants[variant]};
  `} */
`
