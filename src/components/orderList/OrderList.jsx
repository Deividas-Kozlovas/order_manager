import OrederItem from "./orderItem/OrederItem";

const OrderList = (title) => {
    return(
        <div>
            <OrederItem />
            {title}
            {Map.orders((map) => (<p>map</p>))}
        </div>
    )
}

export default OrderList;