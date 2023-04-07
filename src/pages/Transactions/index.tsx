import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionTable, TransactionTableContainer } from "./styles";

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transaction() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3004/transactions');
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  },[])

  return (
    <>    
      <Header />
      <Summary />

      <TransactionTableContainer>        
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map(({id, description, type, price, category, createdAt}) =>(
              <tr key={id}>
                <td width="50%">{description}</td>
                <td>
                  <PriceHighLight variant={type}>
                    {price}
                  </PriceHighLight>               
                </td>
                <td>{category}</td>
                <td>{createdAt}</td>
              </tr>
            ))}           
          </tbody>
        </TransactionTable>
      </TransactionTableContainer>
    </>
  )
}