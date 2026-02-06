import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
