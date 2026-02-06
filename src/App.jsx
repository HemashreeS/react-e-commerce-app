import React from "react";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Products />
        <Cart />
      </div>
    </>
  );
};

export default App;
