import React, { createContext, useContext, useState } from "react";

const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [totalSales, setTotalSales] = useState(0);
  const [receiptCount, setReceiptCount] = useState(0);

  const addSale = (amount) => {
    setTotalSales((prev) => prev + amount);
    setReceiptCount((prev) => prev + 1);
  };

  return (
    <SalesContext.Provider value={{ totalSales, receiptCount, addSale }}>
      {children}
    </SalesContext.Provider>
  );
}

export const useSales = () => useContext(SalesContext);   