import React from "react";
import { useSales } from "../context/SalesContext";

export default function SalesSummary() {
  const { totalSales, receiptCount } = useSales();

  return (
    <div className="sales-summary">
      <h3>Total Sales</h3>
      <p><strong>${totalSales.toFixed(2)}</strong></p>
      <p>Receipts: {receiptCount}</p>
      {receiptCount > 0 && (
        <p>Avg: ${(totalSales / receiptCount).toFixed(2)}</p>
      )}
    </div>
  );
}   