import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionTable, TransactionTableContainer } from "./styles";

export function Transaction() {
  return (
    <>    
      <Header />
      <Summary />

      <TransactionTableContainer>      
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00
                </PriceHighLight>               
              </td>
              <td>Venda</td>
              <td>04/04/2023</td>
            </tr>
            <tr>
              <td>Aluguel Aparmtamento</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 1.500,00
                </PriceHighLight>
              </td>
              <td>Casa</td>
              <td>10/04/2023</td>
            </tr>            
          </tbody>
        </TransactionTable>
      </TransactionTableContainer>
    </>
  )
}