import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client"; // Import your axios client

function ListOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersResponse = await axiosClient.get("/orders");
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching orders data", error);
      }
    };

    fetchOrders();
  }, []);

  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginTop: "20px" }}>
        <h3>List all Orders</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User Name</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Currency</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>P000{order.id}</td>
                <td>{order.user.name}</td>
                <td>${formatPrice(order.total)}</td>
                <td>{order.payment_method}</td>
                <td>{order.currency}</td>
                <td>{new Date(order.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

export default ListOrder;
