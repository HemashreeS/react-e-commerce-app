import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <h1>🛍 React Shop</h1>
      <div className="cart-count">
        Cart: <span>{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
