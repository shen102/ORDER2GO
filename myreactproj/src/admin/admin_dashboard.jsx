import React, { useState, useEffect } from "react";
import "./admin_dashboard.css";

const AdminDashboard = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [items, setItems] = useState([]);
  const [orderNumbers, setOrderNumbers] = useState([]);

  useEffect(() => {
    const storedOrderNumbers = JSON.parse(localStorage.getItem("orders")) || {};
    setOrderNumbers(Object.keys(storedOrderNumbers));
  }, []);

  const handleOrderClick = (selectedOrderNumber) => {
    setOrderNumber(selectedOrderNumber);
    const storedItems = JSON.parse(localStorage.getItem(`orders`))[selectedOrderNumber];
    if (storedItems) {
      setItems(storedItems);
    } else {
      setItems([]);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <p>Click on an order number to view items:</p>
        {orderNumbers.map((orderNum) => (
          <button key={orderNum} onClick={() => handleOrderClick(orderNum)}>
            {orderNum}
          </button>
        ))}
      </div>
      <div>
        <h3>Items for Order Number: {orderNumber}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>Quantity: {item.cartQuantity}</p>
              <p>Price: P{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;