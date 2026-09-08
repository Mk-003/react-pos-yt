import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/products", label: "Product List" },
  { to: "/cart", label: "Cart" },
  { to: "/receipt", label: "Receipt" },
  { to: "/pos", label: "Full POS" },
];

export default function Home() {
  return (
    <div className="home">
      <h1>POS System</h1>
      <p>Select a module:</p>
      <nav className="home-links">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="home-link">
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}   