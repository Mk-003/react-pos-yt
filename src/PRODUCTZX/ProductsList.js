import React from "react";
import Product from "./Product";

export default function ProductList({ products, onAdd }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <Product key={p._id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}   



