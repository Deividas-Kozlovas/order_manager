import OrderItem from "../orderItem/OrderItem";

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} /> 
      ))}
    </div>
  );
};

export default OrderList;
