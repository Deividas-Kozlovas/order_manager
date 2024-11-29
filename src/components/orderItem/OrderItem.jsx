const OrderItem = ({ order }) => {
    return (
      <div>
        <p>{order.id}</p> 
        <p>{order.title}</p> 
        <p>{order.status}</p> 
      </div>
    );
  };
  
  export default OrderItem;
  