import { HeaderContainer, HeaderContent, NewTransactionButtom } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButtom>Nova transação</NewTransactionButtom>
      </HeaderContent>
    </HeaderContainer>
  )
}