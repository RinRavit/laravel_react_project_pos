// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todayResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todayResponse.data.totalSales);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "20px",
//       }}
//     >
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Today Sales</h3>
//           <p style={amountStyle}>${todaySales.toFixed(1)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Today Sales" style={iconStyle} />
//       </div>
//       {/* Add similar cards for other sales metrics */}
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// export default Dashboardstaff;
// work on today
// work on yesterday
// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todayResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todayResponse.data.totalSales);

//         const yesterdayResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdayResponse.data.totalSales);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "20px",
//       }}
//     >
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Today Sales</h3>
//           <p style={amountStyle}>${todaySales.toFixed(1)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Today Sales" style={iconStyle} />
//       </div>
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Yesterday Sales</h3>
//           <p style={amountStyle}>${yesterdaySales.toFixed(1)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todayResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todayResponse.data.totalSales);

//         const yesterdayResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdayResponse.data.totalSales);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "20px",
//       }}
//     >
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Today Sales</h3>
//           <p style={amountStyle}>${Math.round(todaySales)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Today Sales" style={iconStyle} />
//       </div>
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Yesterday Sales</h3>
//           <p style={amountStyle}>${Math.round(yesterdaySales)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todayResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todayResponse.data.totalSales);

//         const yesterdayResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdayResponse.data.totalSales);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "20px",
//       }}
//     >
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Today Sales</h3>
//           <p style={amountStyle}>${formatPrice(todaySales)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Today Sales" style={iconStyle} />
//       </div>
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Yesterday Sales</h3>
//           <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// export default Dashboardstaff;
// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "20px",
//       }}
//     >
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Today Sales</h3>
//           <p style={amountStyle}>${formatPrice(todaySales)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Today Sales" style={iconStyle} />
//       </div>
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Yesterday Sales</h3>
//           <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//           <p>We have sold Items.</p>
//         </div>
//         <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//       </div>
//       <div style={cardStyle}>
//         <div style={textStyle}>
//           <h3>Today Revenue</h3>
//           <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//           <p>Available to payout</p>
//         </div>
//         <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);

//         const ordersResponse = await axiosClient.get("/orders/today");
//         setOrders(ordersResponse.data);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Sales</h3>
//             <p style={amountStyle}>${formatPrice(todaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Today Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Yesterday Sales</h3>
//             <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Revenue</h3>
//             <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//             <p>Available to payout</p>
//           </div>
//           <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//         </div>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <h3>Today's Orders</h3>
//         <table style={tableStyle}>
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>User Name</th>
//               <th>Total</th>
//               <th>Payment Method</th>
//               <th>Currency</th>
//               <th>Order Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.user.name}</td>
//                 <td>${formatPrice(order.total)}</td>
//                 <td>{order.payment_method}</td>
//                 <td>{order.currency}</td>
//                 <td>{new Date(order.created_at).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginTop: "20px",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);
//   const [orders, setOrders] = useState([]);
//   const [lowStockProducts, setLowStockProducts] = useState([]);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);

//         const ordersResponse = await axiosClient.get("/orders/today");
//         setOrders(ordersResponse.data);

//         const productsResponse = await axiosClient.get("/products");
//         const lowStock = productsResponse.data.filter(
//           (product) => product.stock < 5
//         );
//         setLowStockProducts(lowStock);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Sales</h3>
//             <p style={amountStyle}>${formatPrice(todaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Today Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Yesterday Sales</h3>
//             <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Revenue</h3>
//             <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//             <p>Available to payout</p>
//           </div>
//           <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ width: "70%" }}>
//           <h3>Today's Orders</h3>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>User Name</th>
//                 <th>Total</th>
//                 <th>Payment Method</th>
//                 <th>Currency</th>
//                 <th>Order Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id}>
//                   <td>{order.id}</td>
//                   <td>{order.user.name}</td>
//                   <td>${formatPrice(order.total)}</td>
//                   <td>{order.payment_method}</td>
//                   <td>{order.currency}</td>
//                   <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div style={{ width: "25%", marginLeft: "20px" }}>
//           <h3>Low Stock Alerts</h3>
//           {lowStockProducts.length > 0 ? (
//             <div style={alertBoxStyle}>
//               {lowStockProducts.map((product) => (
//                 <div key={product.id} style={alertItemStyle}>
//                   <p>
//                     <strong>{product.name}</strong> stock is low:{" "}
//                     {product.stock} items remaining.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No low stock alerts.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginTop: "20px",
// };

// const alertBoxStyle = {
//   backgroundColor: "#ffcccc",
//   borderRadius: "8px",
//   padding: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const alertItemStyle = {
//   padding: "5px 0",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);
//   const [orders, setOrders] = useState([]);
//   const [lowStockProducts, setLowStockProducts] = useState([]);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);

//         const ordersResponse = await axiosClient.get("/orders/today");
//         setOrders(ordersResponse.data);

//         const productsResponse = await axiosClient.get("/products");
//         const lowStock = productsResponse.data.filter(
//           (product) => product.stock < 5
//         );
//         setLowStockProducts(lowStock);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Sales</h3>
//             <p style={amountStyle}>${formatPrice(todaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Today Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Yesterday Sales</h3>
//             <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Revenue</h3>
//             <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//             <p>Available to payout</p>
//           </div>
//           <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ width: "70%" }}>
//           <h3>Today's Orders</h3>
//           <div style={tableContainerStyle}>
//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th>Order ID</th>
//                   <th>User Name</th>
//                   <th>Total</th>
//                   <th>Payment Method</th>
//                   <th>Currency</th>
//                   <th>Order Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.slice(0, 10).map((order) => (
//                   <tr key={order.id}>
//                     <td>{order.id}</td>
//                     <td>{order.user.name}</td>
//                     <td>${formatPrice(order.total)}</td>
//                     <td>{order.payment_method}</td>
//                     <td>{order.currency}</td>
//                     <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div style={{ width: "25%", marginLeft: "20px" }}>
//           <h3>Low Stock Alerts</h3>
//           {lowStockProducts.length > 0 ? (
//             <div style={alertBoxStyle}>
//               {lowStockProducts.map((product) => (
//                 <div key={product.id} style={alertItemStyle}>
//                   <p>
//                     <strong>{product.name}</strong> stock is low:{" "}
//                     {product.stock} items remaining.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No low stock alerts.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// const tableContainerStyle = {
//   maxHeight: "400px",
//   overflowY: "auto",
//   overflowX: "hidden",
//   marginTop: "20px",
//   scrollbarWidth: "none",
//   msOverflowStyle: "none",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
// };

// const alertBoxStyle = {
//   backgroundColor: "#ffcccc",
//   borderRadius: "8px",
//   padding: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const alertItemStyle = {
//   padding: "5px 0",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);
//   const [orders, setOrders] = useState([]);
//   const [lowStockProducts, setLowStockProducts] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Orders",
//         data: [],
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);

//         const ordersResponse = await axiosClient.get("/orders/today");
//         setOrders(ordersResponse.data);

//         const productsResponse = await axiosClient.get("/products");
//         const lowStock = productsResponse.data.filter(
//           (product) => product.stock < 5
//         );
//         setLowStockProducts(lowStock);

//         // Prepare data for the chart
//         const chartResponse = await axiosClient.get("/orders/chart-data");
//         setChartData({
//           labels: chartResponse.data.labels,
//           datasets: [
//             {
//               label: "Orders",
//               data: chartResponse.data.data,
//               backgroundColor: "rgba(75, 192, 192, 0.2)",
//               borderColor: "rgba(75, 192, 192, 1)",
//               borderWidth: 1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Sales</h3>
//             <p style={amountStyle}>${formatPrice(todaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Today Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Yesterday Sales</h3>
//             <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Revenue</h3>
//             <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//             <p>Available to payout</p>
//           </div>
//           <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ width: "70%" }}>
//           <h3>Today's Orders</h3>
//           <div style={tableContainerStyle}>
//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th>Order ID</th>
//                   <th>User Name</th>
//                   <th>Total</th>
//                   <th>Payment Method</th>
//                   <th>Currency</th>
//                   <th>Order Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.slice(0, 10).map((order) => (
//                   <tr key={order.id}>
//                     <td>{order.id}</td>
//                     <td>{order.user.name}</td>
//                     <td>${formatPrice(order.total)}</td>
//                     <td>{order.payment_method}</td>
//                     <td>{order.currency}</td>
//                     <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div style={{ width: "25%", marginLeft: "20px" }}>
//           <h3>Low Stock Alerts</h3>
//           {lowStockProducts.length > 0 ? (
//             <div style={alertBoxStyle}>
//               {lowStockProducts.map((product) => (
//                 <div key={product.id} style={alertItemStyle}>
//                   <p>
//                     <strong>{product.name}</strong> stock is low:{" "}
//                     {product.stock} items remaining.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No low stock alerts.</p>
//           )}
//         </div>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <h3>Order Comparison</h3>
//         {chartData && chartData.labels.length > 0 ? (
//           <Bar data={chartData} />
//         ) : (
//           <p>Loading chart...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// const tableContainerStyle = {
//   maxHeight: "400px",
//   overflowY: "auto",
//   overflowX: "hidden",
//   marginTop: "20px",
//   scrollbarWidth: "none",
//   msOverflowStyle: "none",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
// };

// const alertBoxStyle = {
//   backgroundColor: "#ffcccc",
//   borderRadius: "8px",
//   padding: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const alertItemStyle = {
//   padding: "5px 0",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client
// import ChartComponent from "./ChartComponent"; // Import your chart component

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);
//   const [orders, setOrders] = useState([]);
//   const [lowStockProducts, setLowStockProducts] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [chartLabels, setChartLabels] = useState([]);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);

//         const ordersResponse = await axiosClient.get("/orders/today");
//         setOrders(ordersResponse.data);

//         const productsResponse = await axiosClient.get("/products");
//         // alert lower stock
//         const lowStock = productsResponse.data.filter(
//           (product) => product.stock < 5
//         );
//         setLowStockProducts(lowStock);

//         // Fetch chart data
//         const chartResponse = await axiosClient.get("/orders/chart-data");
//         setChartData(chartResponse.data.data);
//         setChartLabels(chartResponse.data.labels);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Sales</h3>
//             <p style={amountStyle}>${formatPrice(todaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Today Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Yesterday Sales</h3>
//             <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Revenue</h3>
//             <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//             <p>Available to payout</p>
//           </div>
//           <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ width: "70%" }}>
//           <h3>Today's Orders</h3>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>User Name</th>
//                 <th>Total</th>
//                 <th>Payment Method</th>
//                 <th>Currency</th>
//                 <th>Order Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.slice(0, 10).map((order) => (
//                 <tr key={order.id}>
//                   <td>P000{order.id}</td>
//                   <td>{order.user.name}</td>
//                   <td>${formatPrice(order.total)}</td>
//                   <td>{order.payment_method}</td>
//                   <td>{order.currency}</td>
//                   <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {orders.length > 10 && (
//             <div>
//               <table style={tableStyle}>
//                 <tbody>
//                   {orders.slice(10).map((order) => (
//                     <tr key={order.id}>
//                       <td>{order.id}</td>
//                       <td>{order.user.name}</td>
//                       <td>${formatPrice(order.total)}</td>
//                       <td>{order.payment_method}</td>
//                       <td>{order.currency}</td>
//                       <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//         <div style={{ width: "25%", marginLeft: "20px" }}>
//           <h3>Low Stock Alerts</h3>
//           {lowStockProducts.length > 0 ? (
//             <div style={alertBoxStyle}>
//               {lowStockProducts.map((product) => (
//                 <div key={product.id} style={alertItemStyle}>
//                   <p>
//                     <strong>{product.name}</strong> stock is low:{" "}
//                     {product.stock} items remaining.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No low stock alerts.</p>
//           )}
//         </div>
//       </div>
//       <div style={{ marginTop: "40px" }}>
//         <h3>Orders Chart</h3>
//         <ChartComponent data={chartData} labels={chartLabels} />
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginTop: "20px",
// };

// const scrollContainerStyle = {
//   height: "100px",
//   overflowY: "scroll",
//   // marginTop: "20px",
//   // border: "1px solid #ddd",
//   borderRadius: "8px",
// };

// const alertBoxStyle = {
//   backgroundColor: "#ffcccc",
//   borderRadius: "8px",
//   padding: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const alertItemStyle = {
//   padding: "5px 0",
// };

// export default Dashboardstaff;

// import React, { useState, useEffect } from "react";
// import Barchart from "../../assets/image/Barchart.png"; // Import the icons
// import axiosClient from "../../axios-client"; // Import your axios client
// import ChartComponent from "./ChartComponent"; // Import your chart component

// function Dashboardstaff() {
//   const [todaySales, setTodaySales] = useState(0);
//   const [yesterdaySales, setYesterdaySales] = useState(0);
//   const [todayRevenue, setTodayRevenue] = useState(0);
//   const [orders, setOrders] = useState([]);
//   const [lowStockProducts, setLowStockProducts] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [chartLabels, setChartLabels] = useState([]);

//   useEffect(() => {
//     const fetchSalesData = async () => {
//       try {
//         const todaySalesResponse = await axiosClient.get("/orders/today-sales");
//         setTodaySales(todaySalesResponse.data.totalSales);

//         const yesterdaySalesResponse = await axiosClient.get(
//           "/orders/yesterday-sales"
//         );
//         setYesterdaySales(yesterdaySalesResponse.data.totalSales);

//         const todayRevenueResponse = await axiosClient.get(
//           "/orders/today-revenue"
//         );
//         setTodayRevenue(todayRevenueResponse.data.totalRevenue);

//         const ordersResponse = await axiosClient.get("/orders/today");
//         setOrders(ordersResponse.data);

//         const productsResponse = await axiosClient.get("/products");
//         // alert lower stock
//         const lowStock = productsResponse.data.filter(
//           (product) => product.stock < 5
//         );
//         setLowStockProducts(lowStock);

//         // Fetch chart data
//         const chartResponse = await axiosClient.get("/orders/chart-data");
//         setChartData(chartResponse.data.data);
//         setChartLabels(chartResponse.data.labels);
//       } catch (error) {
//         console.error("Error fetching sales data", error);
//       }
//     };

//     fetchSalesData();
//   }, []);

//   const formatPrice = (price) => {
//     return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Sales</h3>
//             <p style={amountStyle}>${formatPrice(todaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Today Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Yesterday Sales</h3>
//             <p style={amountStyle}>${formatPrice(yesterdaySales)}</p>
//             <p>We have sold Items.</p>
//           </div>
//           <img src={Barchart} alt="Yesterday Sales" style={iconStyle} />
//         </div>
//         <div style={cardStyle}>
//           <div style={textStyle}>
//             <h3>Today Revenue</h3>
//             <p style={amountStyle}>${formatPrice(todayRevenue)}</p>
//             <p>Available to payout</p>
//           </div>
//           <img src={Barchart} alt="Today Revenue" style={iconStyle} />
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ width: "70%" }}>
//           <h3>Today's Orders</h3>
//           <div style={scrollContainerStyle}>
//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th>Order ID</th>
//                   <th>User Name</th>
//                   <th>Total</th>
//                   <th>Payment Method</th>
//                   <th>Currency</th>
//                   <th>Order Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.id}>
//                     <td>P000{order.id}</td>
//                     <td>{order.user.name}</td>
//                     <td>${formatPrice(order.total)}</td>
//                     <td>{order.payment_method}</td>
//                     <td>{order.currency}</td>
//                     <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div style={{ width: "25%", marginLeft: "20px" }}>
//           <h3>Low Stock Alerts</h3>
//           {lowStockProducts.length > 0 ? (
//             <div style={alertBoxStyle}>
//               {lowStockProducts.map((product) => (
//                 <div key={product.id} style={alertItemStyle}>
//                   <p>
//                     <strong>{product.name}</strong> stock is low:{" "}
//                     {product.stock} items remaining.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No low stock alerts.</p>
//           )}
//         </div>
//       </div>
//       <div style={{ marginTop: "40px" }}>
//         <h3>Orders Chart</h3>
//         <ChartComponent data={chartData} labels={chartLabels} />
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   width: "300px",
//   margin: "10px",
// };

// const textStyle = {
//   flex: 1,
// };

// const amountStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const iconStyle = {
//   width: "100px",
//   height: "100px",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginTop: "20px",
// };

// const scrollContainerStyle = {
//   height: "400px",
//   overflowY: "scroll",
//   marginTop: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   // Hide the scrollbar
//   scrollbarWidth: "none" /* Firefox */,
//   msOverflowStyle: "none" /* Internet Explorer 10+ */,
// };

// scrollContainerStyle["::-webkit-scrollbar"] = {
//   display: "none" /* Safari and Chrome */,
// };

// const alertBoxStyle = {
//   backgroundColor: "#ffcccc",
//   borderRadius: "8px",
//   padding: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const alertItemStyle = {
//   padding: "5px 0",
// };

// export default Dashboardstaff;

import React, { useState, useEffect } from "react";
import Barchart from "../../assets/image/Barchart.png"; // Import the icons
import axiosClient from "../../axios-client"; // Import your axios client
import ChartComponent from "./ChartComponent"; // Import your chart component

function Dashboardstaff() {
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

export default Dashboardstaff;
