

import React, { useState } from 'react';
import OrderForm from './orderForm';
import Receipt from './Receipt';


export const useForm = () => {
  const [order, setOrder] = useState(null);

  const handleOrderSubmit = (orderDetails) => {
    setOrder(orderDetails);
  };

  return (
    <div>
      <h1>Online Ordering System</h1>
      <OrderForm onSubmit={handleOrderSubmit} />
      <Receipt order={order} />
    </div>
  );
};

export default useForm;
