// import React from "react";
// import Box from "../../assets/image/Box.png";
// import Supplies from "../../assets/image/Supplies.png";
// import Idcard from "../../assets/image/Idcard.png";
// import Truck from "../../assets/image/Truck.png";
// import Dollar from "../../assets/image/Dollar.png";
// import Download from "../../assets/image/Download.png";
// import Dollarsymbol from "../../assets/image/Dollarsymbol.png";
// // import "../../assets/css/admin/Dashboard/Dashboard.css"
// import { CircleArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <div>
//         <h1 style={{ marginLeft: "23px", marginTop: "24px", fontSize: "24px" }}>
//           Dashbord
//         </h1>
//       </div>
//       <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
//         <div className="dash-conten" style={{ backgroundColor: "#6F62FF" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Box}
//                 alt="Box"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Category" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#8C82FF",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#FF9179" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Supplies}
//                 alt="Supplies"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Product" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#AB6353",
//                 opacity: "0.25",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#FF8024" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Idcard}
//                 alt="Idcard"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Member" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#FDA15F",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#F262FF" }}>
//           <div className="dash-box1">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Truck}
//                 alt="Truck"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Supplier" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#F3A6FD",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* box-row2 */}
//       <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//         <div className="dash-conten1" style={{ backgroundColor: "#1CC700" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Dollar}
//                 alt="Dollar"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Expenses" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#20A50A",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>

//         <div className="dash-conten1" style={{ backgroundColor: "#05E4AF" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Download}
//                 alt="Download"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Purchase" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#05D0A0",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten1" style={{ backgroundColor: "#FFE63C" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Dollarsymbol}
//                 alt="Dollarsymbol"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="SalesList" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#EFD000",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "white",
//           width: "100%",
//           height: "300px",
//           marginTop: "50px",
//         }}
//       ></div>
//     </div>
//   );
// }

// export default Dashboard;

// update 01

// import React, { useEffect, useState } from "react";
// import Box from "../../assets/image/Box.png";
// import Supplies from "../../assets/image/Supplies.png";
// import Idcard from "../../assets/image/Idcard.png";
// import Truck from "../../assets/image/Truck.png";
// import Dollar from "../../assets/image/Dollar.png";
// import Download from "../../assets/image/Download.png";
// import Dollarsymbol from "../../assets/image/Dollarsymbol.png";
// import { CircleArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Assuming you are using axios for HTTP requests

// function Dashboard() {
//   const [categoryCount, setCategoryCount] = useState(0);

//   useEffect(() => {
//     fetchCategoryCount();
//   }, []);

//   const fetchCategoryCount = async () => {
//     try {
//       const response = await axios.get("/api/categories");
//       setCategoryCount(response.data.length);
//     } catch (error) {
//       console.error("Error fetching category count:", error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div>
//         <h1 style={{ marginLeft: "23px", marginTop: "24px", fontSize: "24px" }}>
//           Dashboard
//         </h1>
//       </div>
//       <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
//         <div className="dash-conten" style={{ backgroundColor: "#6F62FF" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>
//                 Count: {categoryCount}
//               </h1>
//             </div>
//             <div>
//               <img
//                 src={Box}
//                 alt="Box"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Category" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#8C82FF",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#FF9179" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Supplies}
//                 alt="Supplies"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Product" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#AB6353",
//                 opacity: "0.25",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#FF8024" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Idcard}
//                 alt="Idcard"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Member" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#FDA15F",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#F262FF" }}>
//           <div className="dash-box1">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Truck}
//                 alt="Truck"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Supplier" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#F3A6FD",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* box-row2 */}
//       <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//         <div className="dash-conten1" style={{ backgroundColor: "#1CC700" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Dollar}
//                 alt="Dollar"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Expenses" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#20A50A",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>

//         <div className="dash-conten1" style={{ backgroundColor: "#05E4AF" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Download}
//                 alt="Download"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Purchase" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#05D0A0",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten1" style={{ backgroundColor: "#FFE63C" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Dollarsymbol}
//                 alt="Dollarsymbol"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="SalesList" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#EFD000",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "white",
//           width: "100%",
//           height: "300px",
//           marginTop: "50px",
//         }}
//       ></div>
//     </div>
//   );
// }

// export default Dashboard;

// Code Work on count Category
// import React, { useEffect, useState } from "react";
// import axiosClient from "../../axios-client";
// import Box from "../../assets/image/Box.png";
// import Supplies from "../../assets/image/Supplies.png";
// import Idcard from "../../assets/image/Idcard.png";
// import Truck from "../../assets/image/Truck.png";
// import Dollar from "../../assets/image/Dollar.png";
// import Download from "../../assets/image/Download.png";
// import Dollarsymbol from "../../assets/image/Dollarsymbol.png";
// import { CircleArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const [categoryCount, setCategoryCount] = useState(0);

//   useEffect(() => {
//     fetchCategoryCount();
//   }, []);

//   const fetchCategoryCount = async () => {
//     try {
//       const response = await axiosClient.get("/categories");
//       setCategoryCount(response.data.length);
//     } catch (error) {
//       console.error("Error fetching category count:", error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div>
//         <h1 style={{ marginLeft: "23px", marginTop: "24px", fontSize: "24px" }}>
//           Dashboard
//         </h1>
//       </div>
//       <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
//         <div className="dash-conten" style={{ backgroundColor: "#6F62FF" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>
//                 {categoryCount}
//               </h1>
//             </div>
//             <div>
//               <img
//                 src={Box}
//                 alt="Box"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Category" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#8C82FF",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#FF9179" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Supplies}
//                 alt="Supplies"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Product" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#AB6353",
//                 opacity: "0.25",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#FF8024" }}>
//           <div className="dash-box1">
//             <div>
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Idcard}
//                 alt="Idcard"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Member" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#FDA15F",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten" style={{ backgroundColor: "#F262FF" }}>
//           <div className="dash-box1">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Truck}
//                 alt="Truck"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Supplier" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "220px",
//                 height: "29px",
//                 backgroundColor: "#F3A6FD",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* box-row2 */}
//       <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//         <div className="dash-conten1" style={{ backgroundColor: "#1CC700" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Dollar}
//                 alt="Dollar"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Expenses" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#20A50A",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>

//         <div className="dash-conten1" style={{ backgroundColor: "#05E4AF" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Download}
//                 alt="Download"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="Purchase" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#05D0A0",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//         <div className="dash-conten1" style={{ backgroundColor: "#FFE63C" }}>
//           <div className="dash-box2">
//             <div>
//               {" "}
//               <h1 style={{ color: "white", opacity: "0.7" }}>Count</h1>
//             </div>
//             <div>
//               <img
//                 src={Dollarsymbol}
//                 alt="Dollarsymbol"
//                 style={{ width: "70px", height: "70px", opacity: "0.5" }}
//               />
//             </div>
//           </div>
//           <Link to="SalesList" style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "5px",
//                 width: "305px",
//                 height: "29px",
//                 backgroundColor: "#EFD000",
//                 opacity: "0.5",
//               }}
//             >
//               <h3 style={{ color: "white" }}>View</h3>
//               <CircleArrowRight size={18} color="white" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "white",
//           width: "100%",
//           height: "300px",
//           marginTop: "50px",
//         }}
//       ></div>
//     </div>
//   );
// }

// export default Dashboard;
// end of code

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
              <th>User ID</th>
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
                <td>{order.user_id}</td>
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
