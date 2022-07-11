import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${({ theme }) => theme['gray-600']};
      color: ${({ theme }) => theme['gray-100']};
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${({ theme }) => theme['gray-700']};
      border-top: ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

type StatusProps = {
  statusColor: 'yellow' | 'red' | 'green'
}

const STATUS_COLORS: Record<
  StatusProps['statusColor'],
  keyof typeof defaultTheme
> = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`
