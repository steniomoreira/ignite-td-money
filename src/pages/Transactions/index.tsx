import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionTable, TransactionTableContainer } from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";

export function Transaction() {
  const { transactions } = useContext(TransactionsContext);

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