import { useState } from "react";

const OrderFunction = ({orders, setOrders}) => {
  const[orderInput, setOrderInput] = useState("");
  
  const addOrder = (e) => {
    e.preventDefault(); 
    setOrders([...orders, orderInput])}

  const inputChange = (e) => {
    setOrderInput(e.target.value);
  }
  return (
    <form onSubmit={addOrder}>
      <input type="text" name="order" onChange={inputChange}/>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderFunction;
