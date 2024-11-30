import { useState } from "react";
import "./OrderForm.scss";
const OrderForm = ({ orders, setOrders }) => {
  const [orderInput, setOrderInput] = useState("");
  const [id, setId] = useState(1);

  const addOrder = (e) => {
    e.preventDefault();

    if (orderInput.trim() === "") {
      alert("Please enter an order");
      return;
    }

    const newOrder = {
      id: id,
      title: orderInput,
      status: "all",
    };

    setId((prevId) => prevId + 1);
    setOrders([...orders, newOrder]);
    setOrderInput("");
  };

  const inputChange = (e) => {
    setOrderInput(e.target.value);
  };

  return (
    <form className="order-function" onSubmit={addOrder}>
      <input
        className="order-function__input"
        type="text"
        name="order"
        value={orderInput}
        onChange={inputChange}
        placeholder="Enter your order"
      />
      <button className="order-function__button" type="submit">
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
