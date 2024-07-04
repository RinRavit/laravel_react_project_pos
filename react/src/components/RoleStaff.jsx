// // web/src/components/RoleStaff.jsx
// import React from "react";

// const RoleStaff = () => {
//   return (
//     <div>
//       <h2>Staff Dashboard</h2>
//       <p>Welcome to the staff dashboard.</p>
//     </div>
//   );
// };

// export default RoleStaff;

// // // update 01
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function RoleStaff() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   useEffect(() => {
//     axiosClient.get("/user").then(({ data }) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div id="defaultLayout">
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }
//  update 02
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";

// export default function RoleStaff() {
//   const { user, token, setUser, setToken } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   return (
//     <div id="roleStaffLayout">
//       <aside>
//         <Link to="/staff/dashboard">Dashboard</Link>
//       </aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// update 03
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";

// export default function RoleStaff() {
//   const { user, token, setUser, setToken } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   return (
//     <div id="roleStaffLayout">
//       <aside></aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link, Navigate, Outlet } from "react-router-dom";
// import {
//   Home,
//   ShoppingCart,
//   MessageSquare,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";

// const RoleStaff = () => {
//   const { user, token, setUser, setToken } = useStateContext();
//   const [selectedCategory, setSelectedCategory] = useState("Hot");
//   const [order, setOrder] = useState([]);

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   const menuCategories = [
//     "Hot",
//     "Burger",
//     "Pizza",
//     "Snack",
//     "Soft Drink",
//     "Coffee",
//     "Ice Cream",
//   ];
//   const products = [
//     { name: "Triple Burger", price: 5.48 },
//     { name: "Double Cheese", price: 4.99 },
//     { name: "Cheese Burger", price: 4.4 },
//     { name: "Origin Burger", price: 4.59 },
//     { name: "Chicken Pop3", price: 5.48 },
//     { name: "Happy Breakfast", price: 6.0 },
//     { name: "Kebab Katsu", price: 5.49 },
//     { name: "Chicken Nugget", price: 2.0 },
//   ];

//   const addToOrder = (product) => {
//     setOrder([...order, product]);
//   };

//   const calculateTotal = () => {
//     return order.reduce((total, item) => total + item.price, 0).toFixed(2);
//   };

//   return (
//     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
//       <aside
//         style={{
//           width: "15%",
//           backgroundColor: "#FAFAFA",
//           padding: "20px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <div style={{ marginBottom: "20px" }}>
//           <Home size={24} style={{ marginRight: "10px" }} /> Menu
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           <ShoppingCart size={24} style={{ marginRight: "10px" }} /> Dashboard
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           <MessageSquare size={24} style={{ marginRight: "10px" }} /> Messages
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           <Settings size={24} style={{ marginRight: "10px" }} /> Settings
//         </div>
//         <div style={{ marginTop: "auto" }}>
//           <LogOut size={24} style={{ marginRight: "10px" }} /> Log Out
//         </div>
//       </aside>
//       <div
//         className="content"
//         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
//       >
//         <header
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>Menu Category</div>
//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main style={{ display: "flex", justifyContent: "space-between" }}>
//           <div style={{ width: "70%" }}>
//             <div style={{ display: "flex", marginBottom: "20px" }}>
//               {menuCategories.map((category) => (
//                 <div
//                   key={category}
//                   style={{
//                     marginRight: "10px",
//                     cursor: "pointer",
//                     backgroundColor:
//                       selectedCategory === category ? "#FFD700" : "#FFFFFF",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                   }}
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </div>
//               ))}
//             </div>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//               {products.map((product, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     width: "30%",
//                     backgroundColor: "#FFFFFF",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                     textAlign: "center",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => addToOrder(product)}
//                 >
//                   <img
//                     src={`https://via.placeholder.com/100?text=${product.name}`}
//                     alt={product.name}
//                     style={{
//                       width: "100%",
//                       borderRadius: "5px",
//                       marginBottom: "10px",
//                     }}
//                   />
//                   <h3>{product.name}</h3>
//                   <p>${product.price.toFixed(2)}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div
//             style={{
//               width: "25%",
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2>Order Menu</h2>
//             <div>
//               {order.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <span>{item.name}</span>
//                   <span>${item.price.toFixed(2)}</span>
//                 </div>
//               ))}
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "20px",
//                 fontWeight: "bold",
//               }}
//             >
//               <span>Total</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <button
//               style={{
//                 width: "100%",
//                 backgroundColor: "#FF6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 marginTop: "20px",
//                 cursor: "pointer",
//               }}
//             >
//               Charge ${calculateTotal()}
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RoleStaff;

// import React, { useState, useEffect } from "react";
// import { Link, Navigate, Outlet } from "react-router-dom";
// import {
//   Home,
//   ShoppingCart,
//   MessageSquare,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";

// const RoleStaff = () => {
//   const { user, token, setUser, setToken } = useStateContext();
//   const [selectedCategory, setSelectedCategory] = useState("Hot");
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     if (token) {
//       axiosClient.get("/categories").then(({ data }) => {
//         setCategories(data);
//       });
//       axiosClient.get("/products").then(({ data }) => {
//         setProducts(data);
//       });
//     }
//   }, [token]);

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   const addToOrder = (product) => {
//     setOrder([...order, product]);
//   };

//   const calculateTotal = () => {
//     return order.reduce((total, item) => total + item.price, 0).toFixed(2);
//   };

//   return (
//     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
//       <aside
//         style={{
//           width: "15%",
//           backgroundColor: "#FAFAFA",
//           padding: "20px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <div style={{ marginBottom: "20px" }}>
//           <Home size={24} style={{ marginRight: "10px" }} /> Menu
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           <ShoppingCart size={24} style={{ marginRight: "10px" }} /> Dashboard
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           <MessageSquare size={24} style={{ marginRight: "10px" }} /> Messages
//         </div>
//         <div style={{ marginBottom: "20px" }}>
//           <Settings size={24} style={{ marginRight: "10px" }} /> Settings
//         </div>
//         <div style={{ marginTop: "auto" }}>
//           <LogOut size={24} style={{ marginRight: "10px" }} /> Log Out
//         </div>
//       </aside>
//       <div
//         className="content"
//         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
//       >
//         <header
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>Menu Category</div>
//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main style={{ display: "flex", justifyContent: "space-between" }}>
//           <div style={{ width: "70%" }}>
//             <div style={{ display: "flex", marginBottom: "20px" }}>
//               {categories.map((category) => (
//                 <div
//                   key={category.id}
//                   style={{
//                     marginRight: "10px",
//                     cursor: "pointer",
//                     backgroundColor:
//                       selectedCategory === category.name
//                         ? "#FFD700"
//                         : "#FFFFFF",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                   }}
//                   onClick={() => setSelectedCategory(category.name)}
//                 >
//                   <img
//                     src={`path/to/your/images/${category.image}`}
//                     alt={category.name}
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       marginBottom: "10px",
//                     }}
//                   />
//                   <div>{category.name}</div>
//                 </div>
//               ))}
//             </div>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//               {products
//                 .filter((product) => product.category.name === selectedCategory)
//                 .map((product, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       width: "30%",
//                       backgroundColor: "#FFFFFF",
//                       padding: "10px",
//                       borderRadius: "5px",
//                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                       textAlign: "center",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => addToOrder(product)}
//                   >
//                     <img
//                       src={`path/to/your/images/${product.image}`}
//                       alt={product.name}
//                       style={{
//                         width: "100%",
//                         borderRadius: "5px",
//                         marginBottom: "10px",
//                       }}
//                     />
//                     <h3>{product.name}</h3>
//                     <p>${product.price.toFixed(2)}</p>
//                   </div>
//                 ))}
//             </div>
//           </div>
//           <div
//             style={{
//               width: "25%",
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2>Order Menu</h2>
//             <div>
//               {order.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <span>{item.name}</span>
//                   <span>${item.price.toFixed(2)}</span>
//                 </div>
//               ))}
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "20px",
//                 fontWeight: "bold",
//               }}
//             >
//               <span>Total</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <button
//               style={{
//                 width: "100%",
//                 backgroundColor: "#FF6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 marginTop: "20px",
//                 cursor: "pointer",
//               }}
//             >
//               Charge ${calculateTotal()}
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RoleStaff;

// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import LOGO_SHOP from "../assets/image/LOGO_SHOP.jpg";
// import Dashboard from "../assets/image/Dashboard.png";
// import Download from "../assets/image/Download.png";
// import Choices from "../assets/image/Choices.png";
// import Menu from "../assets/image/Menu.png";

// export default function RoleStaff() {
//   const { user, token, setUser, setToken } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   return (
//     <div id="roleStaffLayout">
//       <aside>
//         <div>
//           <img
//             src={LOGO_SHOP}
//             alt=""
//             style={{
//               width: "40px",
//               borderRadius: "50px",
//             }}
//           />
//         </div>
//         <div>
//           <Link to="/staff/dashboard">
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: "10px",
//               }}
//             >
//               <div>
//                 <img
//                   src={Dashboard}
//                   alt="ListOrder"
//                   style={{
//                     width: "25px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <p>Dashboard</p>
//               </div>
//             </div>
//           </Link>
//           <Link to="/staff/order">
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: "10px",
//               }}
//             >
//               <div>
//                 <img
//                   src={Choices}
//                   alt="ListOrder"
//                   style={{
//                     width: "25px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <p>Order</p>
//               </div>
//             </div>
//           </Link>
//           <Link to="/staff/listorder">
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: "10px",
//               }}
//             >
//               <div>
//                 <img
//                   src={Download}
//                   alt="ListOrder"
//                   style={{
//                     width: "25px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <p>List Order</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </aside>
//       <div className="content">
//         <header>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: " 10px",
//             }}
//           >
//             <div>
//               {/* <h2>ONESHOP</h2> */}
//               <img
//                 src={Menu}
//                 alt="Menu"
//                 style={{
//                   width: " 25px",
//                 }}
//               />
//             </div>
//           </div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import LOGO_SHOP from "../assets/image/LOGO_SHOP.jpg";
// import Dashboard from "../assets/image/Dashboard.png";
// import Download from "../assets/image/Download.png";
// import Choices from "../assets/image/Choices.png";
// import Menu from "../assets/image/Menu.png";
// import { useState } from "react";

// export default function RoleStaff() {
//   const { user, token, setUser, setToken } = useStateContext();
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to control sidebar visibility

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "staff") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
//   };

//   return (
//     <div id="roleStaffLayout">
//       {isSidebarVisible && ( // Conditionally render the sidebar
//         <aside>
//           <div>
//             <img
//               src={LOGO_SHOP}
//               alt=""
//               style={{
//                 width: "40px",
//                 borderRadius: "50px",
//               }}
//             />
//           </div>
//           <div>
//             <Link to="/staff/dashboard">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <img
//                     src={Dashboard}
//                     alt="Dashboard"
//                     style={{
//                       width: "25px",
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <p>Dashboard</p>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/staff/order">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <img
//                     src={Choices}
//                     alt="Order"
//                     style={{
//                       width: "25px",
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <p>Order</p>
//                 </div>
//               </div>
//             </Link>
//             <Link to="/staff/listorder">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <div>
//                   <img
//                     src={Download}
//                     alt="ListOrder"
//                     style={{
//                       width: "25px",
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <p>List Order</p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </aside>
//       )}
//       <div className="content">
//         <header>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             <div onClick={toggleSidebar} style={{ cursor: "pointer" }}>
//               <img
//                 src={Menu}
//                 alt="Menu"
//                 style={{
//                   width: "25px",
//                 }}
//               />
//             </div>
//           </div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import LOGO_SHOP from "../assets/image/LOGO_SHOP.jpg";
import Dashboard from "../assets/image/Dashboard.png";
import Download from "../assets/image/Download.png";
import Choices from "../assets/image/Choices.png";
import Menu from "../assets/image/Menu.png";
import { useState } from "react";
// import "./RoleStaff.css"; // Import the CSS file

export default function RoleStaff() {
  const { user, token, setUser, setToken } = useStateContext();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to control sidebar visibility

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "staff") {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div id="roleStaffLayout">
      {isSidebarVisible && ( // Conditionally render the sidebar
        <aside>
          <div>
            <img
              src={LOGO_SHOP}
              alt=""
              style={{
                width: "40px",
                borderRadius: "50px",
              }}
            />
          </div>
          <div>
            <Link to="/staff/dashboard">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div>
                  <img
                    src={Dashboard}
                    alt="Dashboard"
                    style={{
                      width: "25px",
                    }}
                  />
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
            </Link>
            <Link to="/staff/order">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div>
                  <img
                    src={Choices}
                    alt="Order"
                    style={{
                      width: "25px",
                    }}
                  />
                </div>
                <div>
                  <p>Order</p>
                </div>
              </div>
            </Link>
            <Link to="/staff/listorder">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div>
                  <img
                    src={Download}
                    alt="ListOrder"
                    style={{
                      width: "25px",
                    }}
                  />
                </div>
                <div>
                  <p>List Order</p>
                </div>
              </div>
            </Link>
          </div>
        </aside>
      )}
      <div className={`content ${isSidebarVisible ? "" : "expanded"}`}>
        <header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div onClick={toggleSidebar} style={{ cursor: "pointer" }}>
              <img
                src={Menu}
                alt="Menu"
                style={{
                  width: "25px",
                }}
              />
            </div>
          </div>

          <div>
            {user.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
