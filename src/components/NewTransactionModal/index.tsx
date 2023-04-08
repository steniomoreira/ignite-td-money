import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {createTransactions} = useTransactionsContext();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      price: 0,
      type: "income",
    }
  });

  async function handleNewCreateTransactions(data: NewTransactionFormInputs) {
    await createTransactions(data);
    
    reset();
  }

  return (
    <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton> <X size={24} /> </CloseButton>

          <Dialog.Title>Nova Transação</Dialog.Title>

          <form action="" onSubmit={handleSubmit(handleNewCreateTransactions)}>
            <input 
              type="text"
              placeholder="Descrição"
              autoFocus
              required
              {...register('description')}
            />
            <input 
              type="number" 
              placeholder="Preço" 
              required 
              {...register('price', { valueAsNumber: true} )}
            />
            <input 
              type="text" 
              placeholder="Categoria" 
              required
              {...register('category')}
            />

            <Controller 
              control={control}
              name="type"
              render={({field}) => {               
                return (
                  <TransactionType 
                    onValueChange={field.onChange} 
                    value={field.value}
                  >
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}
            />
            

            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
  )
}