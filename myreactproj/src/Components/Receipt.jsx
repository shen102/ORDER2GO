import React from "react";
import "./Receipt.css";
import { useSelector } from "react-redux";

const Receipt = () => {
  const cart = useSelector((state) => state.cart);
  const App = () => {
    const orderNumber = 46; // Example order number
  
    return (
      <Provider store={store}>
        <Receipt orderNumber={orderNumber} />
      </Provider>
    );
  };
  
  ReactDOM.redux(<App />, document.getElementById("root"));

  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <div className="receipt-items">
        {cart.cartItems.map((item) => (
          <div key={item.id} className="receipt-item">
            <p>{item.name}</p>
            <p>Quantity: {item.cartQuantity}</p>
            <p>Price: ₱{item.price}</p>
            <p>Total: ₱{item.price * item.cartQuantity}</p>
          </div>
        ))}
      </div>
      <div className="receipt-summary">
        <p1>Subtotal: ₱{cart.cartTotalAmount}</p1>
        <p1>Taxes and Shipping: To be calculated</p1>
        <p1>Total Amount: ₱{cart.cartTotalAmount}</p1>
      </div>
    </div>
  );
};

export default Receipt;