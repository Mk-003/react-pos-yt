import React, { useState, useMemo } from "react";
import { useSales } from "../context/SalesContext";


const FILTERS = {
  today: () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return { start, end: now };
  },
  week: () => {
    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - 7);
    return { start, end: now };
  },
  month: () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    return { start, end: now };
  },
  custom: (from, to) => ({
    start: new Date(from),
    end: new Date(to),
  }),
};

export default function SalesSummary() {
  const { transactions } = useSales();
  const [filter, setFilter] = useState("today");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filtered = useMemo(() => {
    let { start, end } = filter === "custom"
      ? FILTERS.custom(from, to)
      : FILTERS[filter]();

    return transactions.filter((t) => {
      const d = new Date(t.date);
      return d >= start && d <= end;
    });
  }, [transactions, filter, from, to]);

  const totalSales = filtered.reduce((sum, t) => sum + t.total, 0);
  const count = filtered.length;

  return (
    <div className="sales-summary">
      <h3>Sales Summary</h3>

      {/* Filter buttons */}
      <div className="filter-bar">
        <button
          onClick={() => setFilter("today")}
          className={filter === "today" ? "active" : ""}
        >
          Today
        </button>
        <button
          onClick={() => setFilter("week")}
          className={filter === "week" ? "active" : ""}
        >
          This Week
        </button>
        <button
          onClick={() => setFilter("month")}
          className={filter === "month" ? "active" : ""}
        >
          This Month
        </button>
        <button
          onClick={() => setFilter("custom")}
          className={filter === "custom" ? "active" : ""}
        >
          Custom
        </button>
      </div>

      {/* Custom date range */}
      {filter === "custom" && (
        <div className="date-range">
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
          <span>to</span>
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
      )}

      {/* Results */}
      <div className="summary-stats">
        <p><strong>Total:</strong> ${totalSales.toFixed(2)}</p>
        <p><strong>Transactions:</strong> {count}</p>
        {count > 0 && (
          <p><strong>Avg:</strong> ${(totalSales / count).toFixed(2)}</p>
        )}
      </div>
    </div>
  );
}   