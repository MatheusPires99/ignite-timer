import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme['gray-100']};

      &:hover:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`
