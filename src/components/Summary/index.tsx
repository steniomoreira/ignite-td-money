import {ArrowCircleUp,ArrowCircleDown, CurrencyCircleDollar } from 'phosphor-react'
import { SummaryCard, SummaryContaier } from "./styles";
import { useTheme } from 'styled-components';

export function Summary() {
  const theme = useTheme();

  return (
    <SummaryContaier>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color={theme.white} />
        </header>
        
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContaier>
  )
}