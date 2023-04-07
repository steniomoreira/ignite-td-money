import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useTransactionsContext() {
  const  useTransitionsContext =  useContext(TransactionsContext);

  return useTransitionsContext;
}