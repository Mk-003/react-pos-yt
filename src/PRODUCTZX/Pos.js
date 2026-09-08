import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductsList";
import Cart from "./Cart";
import Receipt from "./Receipt";
import SalesSummary from './SALES/SalesContext';
import { useSales } from "../context/SalesContext";

const HOST = "http://localhost:5000/api";

export default function Pos() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [receipt, setReceipt] = useState(null);
  const { addSale } = useSales(); // ← pulls from context

  useEffect(() => {
    axios.get(`${HOST}/products`).then((res) => setProducts(res.data));
  }, []);

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i._id === product._id);
      if (existing) {
        return prev.map((i) =>
          i._id === product._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1, id: Date.now() }];
    });
  };

  const updateQty = (id, qty) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const handleCheckout = async (total) => {
    const res = await axios.post(`${HOST}/transactions/new`, {
      date: new Date().toISOString(),
      total,
      items,
    });
    setReceipt(res.data);
    addSale(total);   // ← updates cumulative total
    setItems([]);
  };

  return (
    <div className="pos-container">
      <ProductList products={products} onAdd={addItem} />
      <Cart
        items={items}
        onQtyChange={updateQty}
        onRemove={removeItem}
        onCheckout={handleCheckout}
      />
      <Receipt receipt={receipt} onClose={() => setReceipt(null)} />
      <SalesSummary />
    </div>
  );
}   