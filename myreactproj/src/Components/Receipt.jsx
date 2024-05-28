import React from "react";
import { useSelector } from "react-redux";
import "./Receipt.css"; // Import the CSS file

const Receipt = ({ orderNumber }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <div className="receipt-header">
        <p>Order Number: {orderNumber}</p>
      </div>
      <div className="receipt-items">
        {cart.cartItems.map((item) => (
          <div key={item.id} className="receipt-item">
            <p>{item.name}</p>
            <p>Quantity: {item.cartQuantity}</p>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.price * item.cartQuantity}</p>
          </div>
        ))}
      </div>
      <div className="receipt-summary">
        <p>Subtotal: ${cart.cartTotalAmount}</p>
        <p>Taxes and Shipping: To be calculated</p>
        <p>Total Amount: ${cart.cartTotalAmount}</p>
      </div>
    </div>
  );
};

export default Receipt;
