import React from "react";
import "./cart.css";

export const AddCart = ({ cartItems }) => {


  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddCart;
