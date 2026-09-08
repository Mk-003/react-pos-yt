import React from "react";

export default function Product({ product, onAdd }) {
  return (
    
    
    <button className="product-card" onClick={() => onAdd(product)}>
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
      <small>Stock: {product.quantity_on_hand}</small>
    </button>
  );
}   