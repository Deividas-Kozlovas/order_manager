import { useState } from "react";
import OrderItem from "../orderItem/OrderItem";

const OrderList = ({ orders, setOrders }) => {
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredOrders = orders.filter((order) =>
    filterStatus === "all" ? true : order.status === filterStatus
  );

  return (
    <div>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="inProgress">In Progress</option>
      </select>

      {filteredOrders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          setOrders={setOrders}
          orders={orders}
        />
      ))}
    </div>
  );
};

export default OrderList;
