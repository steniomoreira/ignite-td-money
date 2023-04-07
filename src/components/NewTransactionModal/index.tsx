import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton> <X size={24} /> </CloseButton>

          <Dialog.Title>Nova Transação</Dialog.Title>

          <form action="">
            <input type="text" placeholder="Descrição" autoFocus required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <TransactionType>
              <TransactionTypeButton variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton variant="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
  )
}