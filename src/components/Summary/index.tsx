import {ArrowCircleUp,ArrowCircleDown, CurrencyCircleDollar } from 'phosphor-react'
import { SummaryCard, SummaryContaier } from "./styles";
import { useTheme } from 'styled-components';
import { priceFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
  const theme = useTheme();
  const summary = useSummary();

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