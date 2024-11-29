import { useState } from "react";

const OrderFunction = ({ orders, setOrders }) => {
  const [orderInput, setOrderInput] = useState("");
  const [id, setId] = useState(1);

  const addOrder = (e) => {
    e.preventDefault();

    if (orderInput.trim() === "") {
      alert("Add order input");
      return;
    }

    const newOrder = {
      id: id,
      title: orderInput,
      status: "all",
    };

    setId((prewId) => prewId + 1);

    setOrders([...orders, newOrder]);
    setOrderInput("");
  };

  const inputChange = (e) => {
    setOrderInput(e.target.value);
  };
  return (
    <form onSubmit={addOrder}>
      <input type="text" name="order" onChange={inputChange} />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderFunction;
