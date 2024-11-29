const OrderItem = ({ order, setOrders, orders = [] }) => {
  const updateOrderStatus = (newStatus) => {
    setOrders(
      orders.map((ord) =>
        ord.id === order.id ? { ...ord, status: newStatus } : o
      )
    );
  };

  return (
    <div>
      <p>{order.id}</p>
      <p>{order.title}</p>
      <p>{order.status}</p>
      <button onClick={() => updateOrderStatus("finished")}>
        Order Finished
      </button>
      <button onClick={() => updateOrderStatus("inProgress")}>
        Order In Progress
      </button>
    </div>
  );
};

export default OrderItem;
