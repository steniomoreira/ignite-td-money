import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

type TransactionContextType = {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionContextType);

type TransactionsProviderProps = {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3004/transactions');
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  },[])

  return(
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}