import "./OrderItem.scss";

const OrderItem = ({ order, setOrders, orders = [] }) => {
  const updateOrderStatus = (newStatus) => {
    setOrders(
      orders.map((ord) =>
        ord.id === order.id ? { ...ord, status: newStatus } : ord
      )
    );
  };

  return (
    <tr className="order-item">
      <td className="order-item__id">{order.id}</td>
      <td className="order-item__title">{order.title}</td>
      <td className="order-item__status">{order.status}</td>
      <td className="order-item__actions">
        <button
          className="order-item__button order-item__button--finished"
          onClick={() => updateOrderStatus("finished")}
        >
          Finished
        </button>
        <button
          className="order-item__button order-item__button--in-progress"
          onClick={() => updateOrderStatus("inProgress")}
        >
          In Progress
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
