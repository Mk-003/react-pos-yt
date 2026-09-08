import React from "react";

export default function Receipt({ receipt, onClose }) {
  if (!receipt) return null;

  return (
    <div className="receipt">
      <h3>Receipt</h3>
      <p>Date: {receipt.date}</p>
      <table>
        <thead>
          <tr><th>Item</th><th>Qty</th><th>Price</th></tr>
        </thead>
        <tbody>
          {receipt.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><strong>Total: ${receipt.total.toFixed(2)}</strong></p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}   