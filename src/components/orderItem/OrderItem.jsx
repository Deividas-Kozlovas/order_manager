const OrderList = ({ title, orders }) => {
    return (
      <div>
        <p>{title}</p>
        {orders.map((order, index) => (
          <p key={index}>{order}</p> 
        ))}
      </div>
    );
  };
  
  export default OrderList;
  