import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCoundownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;

  color: ${({ theme }) => theme['gray-100']};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCoundownButton = styled(BaseCoundownButton)`
  background: ${({ theme }) => theme['green-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`

export const StopCoundownButton = styled(BaseCoundownButton)`
  background: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }
`
