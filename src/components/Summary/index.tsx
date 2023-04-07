import {ArrowCircleUp,ArrowCircleDown, CurrencyCircleDollar } from 'phosphor-react'
import { SummaryCard, SummaryContaier } from "./styles";
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';

export function Summary() {
  const theme = useTheme();
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price;
      acc.total += transaction.price;
    }

    if (transaction.type === 'outcome') {
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
    }

    return acc;
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })

  return (
    <SummaryContaier>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color={theme.white} />
        </header>
        
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContaier>
  )
}