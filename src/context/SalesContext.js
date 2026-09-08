import React, { createContext, useContext, useState } from "react";

const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const addSale = (total) => {
    setTransactions((prev) => [
      ...prev,
      { total, date: new Date().toISOString() },
    ]);
  };

  return (
    <SalesContext.Provider value={{ transactions, addSale }}>
      {children}
    </SalesContext.Provider>
  );
}

export const useSales = () => useContext(SalesContext);   