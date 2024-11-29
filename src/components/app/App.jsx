import './App.scss'
import OrderForm from "../orderForm/OrderForm";
import OrderList from "../orderItem/OrderItem";
import { useState } from 'react';

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <div>
      <OrderForm orders={orders} setOrders={setOrders} />
      <OrderList orders={orders} />
    </div>
  );
}

export default App;
