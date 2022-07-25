import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Currency Converter</Link>
      <Link to="exchange-rate">Exchange Rate</Link>
    </nav>
  );
}
