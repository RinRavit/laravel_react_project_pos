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

import React, { useState, useEffect } from "react";
import Barchart from "../../assets/image/Barchart.png"; // Import the icons
import axiosClient from "../../axios-client"; // Import your axios client

function Dashboardstaff() {
  const [todaySales, setTodaySales] = useState(0);
  const [yesterdaySales, setYesterdaySales] = useState(0);
  const [todayRevenue, setTodayRevenue] = useState(0);
  const [orders, setOrders] = useState([]);

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

        const ordersResponse = await axiosClient.get("/orders");
        setOrders(ordersResponse.data);
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
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>All Orders</h3>
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
                <td>{order.id}</td>
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

export default Dashboardstaff;
