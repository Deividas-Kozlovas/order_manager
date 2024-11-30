import { useState } from "react";
import OrderItem from "../orderItem/OrderItem";
import "./OrderList.scss";

const OrderList = ({ orders, setOrders }) => {
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredOrders = orders.filter((order) =>
    filterStatus === "all" ? true : order.status === filterStatus
  );

  return (
    <div className="order-list">
      <div className="order-list__filter">
        <label htmlFor="statusFilter">Filter by status:</label>
        <select
          id="statusFilter"
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="inProgress">In Progress</option>
        </select>
      </div>

      <table className="order-list__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
              setOrders={setOrders}
              orders={orders}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
