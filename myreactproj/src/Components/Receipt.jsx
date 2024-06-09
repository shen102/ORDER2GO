import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Receipt.css"; // Import the CSS file

const Receipt = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const orderNumber = generateOrderNumber();
    updateLocalStorage(orderNumber, cart.cartItems);
  }, [cart.cartItems]);

  const generateOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const updateLocalStorage = (orderNumber, items) => {
    const orders = JSON.parse(localStorage.getItem("orders")) || {};
    orders[orderNumber] = items;
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("orderNumber", orderNumber.toString());
  };

  return (
    <div className="receipt-container">
      <h2>Wait for order to be prepared</h2>
      <div className="receipt-header">
        <p>Order Number: {localStorage.getItem("orderNumber")}</p>
      </div>
      <div className="receipt-items">
        {cart.cartItems.map((item) => (
          <div key={item.id} className="receipt-item">
            <p>{item.name}</p>
            <p>Quantity: {item.cartQuantity}</p>
            <p>Price: P{item.price}</p>
            <p>Total: P{item.price * item.cartQuantity}</p>
          </div>
        ))}
      </div>
      <div className="receipt-summary">
        <p>Total Amount: P{cart.cartTotalAmount}</p>
      </div>
    </div>
  );
};

export default Receipt;