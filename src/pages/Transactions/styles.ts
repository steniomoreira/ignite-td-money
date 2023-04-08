import styled from 'styled-components'

export const TransactionTableContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;

  td {
    padding: 1.5rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    text-align: center;

    :first-child {
      text-align: left;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    :nth-child(2) {
      text-align: right;
    }

    :last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
