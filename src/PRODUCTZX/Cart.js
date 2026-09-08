import React from "react";

export default function Cart({ items, onQtyChange, onRemove, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {items.length === 0 && <p>Cart is empty</p>}
      <table>
        <thead>
          <tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th /></tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onQtyChange(item.id, e.target.value)}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => onRemove(item.id)}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => onCheckout(total)}>Checkout</button>
    </div>
  );
}   