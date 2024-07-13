

import React, { useState, useEffect } from "react";
import Barchart from "../../assets/image/Barchart.png"; // Import the icons
import axiosClient from "../../axios-client"; // Import your axios client
import ChartComponent from "../staff/ChartComponent"; // Import your chart component

function Dashboard() {
  const [todaySales, setTodaySales] = useState(0);
  const [yesterdaySales, setYesterdaySales] = useState(0);
  const [todayRevenue, setTodayRevenue] = useState(0);
  const [orders, setOrders] = useState([]);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  // New states for total orders and total amount
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const todaySalesResponse = await axiosClient.get("/orders/today-sales");
        setTodaySales(todaySalesResponse.data.totalSales);

        const yesterdaySalesResponse = await axiosClient.get(
          "/orders/yesterday-sales"
        );
        setYesterdaySales(yesterdaySalesResponse.data.totalSales);

        const todayRevenueResponse = await axiosClient.get(
          "/orders/today-revenue"
        );
        setTodayRevenue(todayRevenueResponse.data.totalRevenue);

        const ordersResponse = await axiosClient.get("/orders/today");
        setOrders(ordersResponse.data);

        const productsResponse = await axiosClient.get("/products");
        // alert lower stock
        const lowStock = productsResponse.data.filter(
          (product) => product.stock < 5
        );
        setLowStockProducts(lowStock);

        // Fetch chart data
        const chartResponse = await axiosClient.get("/orders/chart-data");
        setChartData(chartResponse.data.data);
        setChartLabels(chartResponse.data.labels);

        // Set total orders and total order amount
        setTotalOrders(ordersResponse.data.length);
        setTotalOrderAmount(
          ordersResponse.data.reduce((total, order) => total + order.total, 0)
        );
      } catch (error) {
        console.error("Error fetching sales data", error);
      }
    };

    fetchSalesData();
  }, []);

  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={cardStyle}>
          <div style={textStyle}>
            <h3>Today Sales</h3>
            <p style={amountStyle}>${formatPrice(todaySales)}</p>
            <p>We have sold Items.</p>
          </div>
          <img src={Barchart} alt="Today Sales" style={iconStyle} />
        </div>
        <div style={cardStyle}>
          <div style={textStyle}>
            <h3>Yesterday Sales</h3>
            <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
            <p>We have sold Items.</p>
          </div>
          <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
        </div>
        <div style={cardStyle}>
          <div style={textStyle}>
            <h3>Today Revenue</h3>
            <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
            <p>Available to payout</p>
          </div>
          <img src={Barchart} alt="Today Revenue" style={iconStyle} />
        </div>
        <div style={cardStyle}>
          <div style={textStyle}>
            <h3>Today Orders</h3>
            <p style={amountStyle}>
              {totalOrders} / ${formatPrice(totalOrderAmount)}
            </p>
            <p>today_order / total order</p>
          </div>
          <img src={Barchart} alt="Total Orders" style={iconStyle} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "70%" }}>
          <h3>Today's Orders</h3>
          <div style={scrollContainerStyle}>
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
        <div style={{ width: "25%", marginLeft: "20px" }}>
          <h3>Low Stock Alerts</h3>
          {lowStockProducts.length > 0 ? (
            <div style={alertBoxStyle}>
              {lowStockProducts.map((product) => (
                <div key={product.id} style={alertItemStyle}>
                  <p>
                    <strong>{product.name}</strong> stock is low:{" "}
                    {product.stock} items remaining.
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No low stock alerts.</p>
          )}
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <h3>Orders Chart</h3>
        <ChartComponent data={chartData} labels={chartLabels} />
      </div>
    </div>
  );
}

const cardStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  width: "300px",
  margin: "10px",
};

const textStyle = {
  flex: 1,
};

const amountStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

const iconStyle = {
  width: "100px",
  height: "100px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const scrollContainerStyle = {
  height: "400px",
  overflowY: "scroll",
  marginTop: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  // Hide the scrollbar
  scrollbarWidth: "none" /* Firefox */,
  msOverflowStyle: "none" /* Internet Explorer 10+ */,
};

scrollContainerStyle["::-webkit-scrollbar"] = {
  display: "none" /* Safari and Chrome */,
};

const alertBoxStyle = {
  backgroundColor: "#ffcccc",
  borderRadius: "8px",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const alertItemStyle = {
  padding: "5px 0",
};

export default Dashboard;
