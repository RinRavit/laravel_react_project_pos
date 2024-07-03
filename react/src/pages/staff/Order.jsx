// // import React, { useState, useEffect } from "react";
// // import { Link, Navigate, Outlet } from "react-router-dom";
// // import {
// //   Home,
// //   ShoppingCart,
// //   MessageSquare,
// //   Settings,
// //   LogOut,
// // } from "lucide-react";

// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../.././axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("Hot");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const onLogout = (ev) => {
// //     ev.preventDefault();

// //     axiosClient.post("/logout").then(() => {
// //       setUser({});
// //       setToken(null);
// //     });
// //   };

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const calculateTotal = () => {
// //     return order.reduce((total, item) => total + item.price, 0).toFixed(2);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "100%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`path/to/your/images/${category.image}`}
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder(product)}
// //                   >
// //                     <img
// //                       src={`path/to/your/images/${product.image}`}
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3>{product.name}</h3>
// //                     <p>${product.price.toFixed(2)}</p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "25%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2>Order Menu</h2>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <span>{item.name}</span>
// //                   <span>${item.price.toFixed(2)}</span>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 marginTop: "20px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <span>Total</span>
// //               <span>${calculateTotal()}</span>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#FF6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 marginTop: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Charge ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;

// // is this the code that we update
// // import React, { useState, useEffect } from "react";
// // import { Link, Navigate, Outlet } from "react-router-dom";
// // import {
// //   Home,
// //   ShoppingCart,
// //   MessageSquare,
// //   Settings,
// //   LogOut,
// // } from "lucide-react";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("Hot");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || "Hot");
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const onLogout = (ev) => {
// //     ev.preventDefault();

// //     axiosClient.post("/logout").then(() => {
// //       setUser({});
// //       setToken(null);
// //     });
// //   };

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const calculateTotal = () => {
// //     return order.reduce((total, item) => total + item.price, 0).toFixed(2);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //           <div>
// //             {user.name} &nbsp; &nbsp;
// //             <a onClick={onLogout} className="btn-logout" href="#">
// //               Logout
// //             </a>
// //           </div>
// //         </header>
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`/${category.image}`} // Assuming the images are stored at the root of the public folder
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder(product)}
// //                   >
// //                     <img
// //                       src={`/${product.image}`} // Assuming the images are stored at the root of the public folder
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3>{product.name}</h3>
// //                     <p>${product.price ? product.price.toFixed(2) : "N/A"}</p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "25%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2>Order Menu</h2>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <span>{item.name}</span>
// //                   <span>${item.price ? item.price.toFixed(2) : "N/A"}</span>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 marginTop: "20px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <span>Total</span>
// //               <span>${calculateTotal()}</span>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#FF6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 marginTop: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Charge ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;

// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const onLogout = (ev) => {
// //     ev.preventDefault();

// //     axiosClient.post("/logout").then(() => {
// //       setUser({});
// //       setToken(null);
// //     });
// //   };

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const calculateTotal = () => {
// //     return order.reduce((total, item) => total + item.price, 0).toFixed(2);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //           <div>
// //             {user.name} &nbsp; &nbsp;
// //             <a onClick={onLogout} className="btn-logout" href="#">
// //               Logout
// //             </a>
// //           </div>
// //         </header>
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`/${category.image}`} // Assuming the images are stored at the root of the public folder
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder(product)}
// //                   >
// //                     <img
// //                       src={`/${product.image}`} // Assuming the images are stored at the root of the public folder
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         height: "150px",
// //                         objectFit: "cover",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                     <p style={{ fontSize: "16px", fontWeight: "bold" }}>
// //                       ${product.price ? product.price.toFixed(2) : "N/A"}
// //                     </p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "25%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2>Order Menu</h2>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <span>{item.name}</span>
// //                   <span>${item.price ? item.price.toFixed(2) : "N/A"}</span>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 marginTop: "20px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <span>Total</span>
// //               <span>${calculateTotal()}</span>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#FF6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 marginTop: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Charge ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;
// // Order.jsx
// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const onLogout = (ev) => {
// //     ev.preventDefault();

// //     axiosClient.post("/logout").then(() => {
// //       setUser({});
// //       setToken(null);
// //     });
// //   };

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const calculateTotal = () => {
// //     return order.reduce((total, item) => total + item.price, 0).toFixed(2);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //           <div>
// //             {user.name} &nbsp; &nbsp;
// //             <a onClick={onLogout} className="btn-logout" href="#">
// //               Logout
// //             </a>
// //           </div>
// //         </header>
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:3000/${category.image}`} // Corrected image URL
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder(product)}
// //                   >
// //                     <img
// //                       src={`http://localhost:3000/${product.image}`} // Corrected image URL
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         height: "150px",
// //                         objectFit: "cover",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                     <p style={{ fontSize: "16px", fontWeight: "bold" }}>
// //                       $
// //                       {product.selling_price
// //                         ? product.selling_price.toFixed(2)
// //                         : ""}
// //                     </p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "25%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2>Order Menu</h2>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <span>{item.name}</span>
// //                   <span>${item.price ? item.price.toFixed(2) : "N/A"}</span>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 marginTop: "20px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <span>Total</span>
// //               <span>${calculateTotal()}</span>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#FF6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 marginTop: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Charge ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;
// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const onLogout = (ev) => {
// //     ev.preventDefault();

// //     axiosClient.post("/logout").then(() => {
// //       setUser({});
// //       setToken(null);
// //     });
// //   };

// //   const addToOrder = (product) => {
// //     const existingProduct = order.find((item) => item.id === product.id);
// //     if (existingProduct) {
// //       setOrder(
// //         order.map((item) =>
// //           item.id === product.id
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         )
// //       );
// //     } else {
// //       setOrder([...order, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   const removeFromOrder = (productId) => {
// //     const existingProduct = order.find((item) => item.id === productId);
// //     if (existingProduct.quantity === 1) {
// //       setOrder(order.filter((item) => item.id !== productId));
// //     } else {
// //       setOrder(
// //         order.map((item) =>
// //           item.id === productId
// //             ? { ...item, quantity: item.quantity - 1 }
// //             : item
// //         )
// //       );
// //     }
// //   };

// //   const calculateTotal = () => {
// //     return order
// //       .reduce(
// //         (total, item) =>
// //           total + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //           <div>
// //             {user.name} &nbsp; &nbsp;
// //             <a onClick={onLogout} className="btn-logout" href="#">
// //               Logout
// //             </a>
// //           </div>
// //         </header>
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:3000/uploads/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder(product)}
// //                   >
// //                     <img
// //                       src={`http://localhost:3000/uploads/${product.image}`} // Ensure the URL matches your backend's served path
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         height: "150px",
// //                         objectFit: "cover",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                     <p style={{ fontSize: "16px", fontWeight: "bold" }}>
// //                       $
// //                       {product.selling_price
// //                         ? parseFloat(product.selling_price).toFixed(2)
// //                         : "N/A"}
// //                     </p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "25%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2>Order Menu</h2>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <img
// //                       src={`http://localhost:3000/uploads/${item.image}`}
// //                       alt={item.name}
// //                       style={{
// //                         width: "50px",
// //                         height: "50px",
// //                         borderRadius: "5px",
// //                         marginRight: "10px",
// //                       }}
// //                     />
// //                     <div>
// //                       <span>{item.name}</span>
// //                       <p>
// //                         $
// //                         {item.selling_price
// //                           ? parseFloat(item.selling_price).toFixed(2)
// //                           : "N/A"}
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => removeFromOrder(item.id)}
// //                       style={{
// //                         backgroundColor: "#FF6347",
// //                         color: "#FFFFFF",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         padding: "5px 10px",
// //                         cursor: "pointer",
// //                         marginRight: "10px",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => addToOrder(item)}
// //                       style={{
// //                         backgroundColor: "#FF6347",
// //                         color: "#FFFFFF",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         padding: "5px 10px",
// //                         cursor: "pointer",
// //                         marginLeft: "10px",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 marginTop: "20px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <span>Total</span>
// //               <span>${calculateTotal()}</span>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#FF6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 marginTop: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Charge ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;
// // Import necessary modules
// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const onLogout = (ev) => {
// //     ev.preventDefault();

// //     axiosClient.post("/logout").then(() => {
// //       setUser({});
// //       setToken(null);
// //     });
// //   };

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const calculateTotal = () => {
// //     return order
// //       .reduce((total, item) => total + parseFloat(item.selling_price || 0), 0)
// //       .toFixed(2);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //           <div>
// //             {user.name} &nbsp; &nbsp;
// //             <a onClick={onLogout} className="btn-logout" href="#">
// //               Logout
// //             </a>
// //           </div>
// //         </header>
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder(product)}
// //                   >
// //                     <img
// //                       src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         height: "150px",
// //                         objectFit: "cover",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                     <p style={{ fontSize: "16px", fontWeight: "bold" }}>
// //                       $
// //                       {product.selling_price
// //                         ? parseFloat(product.selling_price).toFixed(2)
// //                         : ""}
// //                     </p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "25%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2>Order Menu</h2>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <span>{item.name}</span>
// //                   <span>
// //                     $
// //                     {item.selling_price
// //                       ? parseFloat(item.selling_price).toFixed(2)
// //                       : ""}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 marginTop: "20px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <span>Total</span>
// //               <span>${calculateTotal()}</span>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#FF6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 marginTop: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Charge ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;
// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const calculateTotal = () => {
// //     const subtotal = order.reduce(
// //       (total, item) =>
// //         total + parseFloat(item.selling_price || 0) * item.quantity,
// //       0
// //     );
// //     const discount = subtotal * 0.2;
// //     return (subtotal - discount).toFixed(2);
// //   };

// //   const calculateSubtotal = () => {
// //     return order
// //       .reduce(
// //         (subtotal, item) =>
// //           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   const calculateDiscount = () => {
// //     const subtotal = parseFloat(calculateSubtotal());
// //     return (subtotal * 0.2).toFixed(2);
// //   };

// //   const handleQuantityChange = (index, increment) => {
// //     const newOrder = [...order];
// //     newOrder[index].quantity += increment;
// //     if (newOrder[index].quantity < 1) {
// //       newOrder[index].quantity = 1;
// //     }
// //     setOrder(newOrder);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "85%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //         </header>
// //         <main style={{ display: "flex", justifyContent: "space-between" }}>
// //           <div style={{ width: "70%" }}>
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products
// //                 .filter((product) => product.category.name === selectedCategory)
// //                 .map((product, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       width: "30%",
// //                       backgroundColor: "#FFFFFF",
// //                       padding: "10px",
// //                       borderRadius: "5px",
// //                       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                       textAlign: "center",
// //                       cursor: "pointer",
// //                     }}
// //                     onClick={() => addToOrder({ ...product, quantity: 1 })}
// //                   >
// //                     <img
// //                       src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                       alt={product.name}
// //                       style={{
// //                         width: "100%",
// //                         height: "150px",
// //                         objectFit: "cover",
// //                         borderRadius: "5px",
// //                         marginBottom: "10px",
// //                       }}
// //                     />
// //                     <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                     <p style={{ fontSize: "16px", fontWeight: "bold" }}>
// //                       $
// //                       {product.selling_price
// //                         ? parseFloat(product.selling_price).toFixed(2)
// //                         : ""}
// //                     </p>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <div
// //             style={{
// //               width: "50%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
// //                 padding: "15px",
// //                 color: "white",
// //                 borderRadius: "5px 5px 0 0",
// //                 margin: "-20px -20px 10px",
// //               }}
// //             >
// //               New Order
// //             </h2>
// //             <p style={{ margin: "0 0 20px", color: "#777" }}>
// //               Sunday, October 28 2018
// //             </p>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   <div style={{ display: "flex", flexDirection: "column" }}>
// //                     <span>{item.name}</span>
// //                     <span>@ {parseFloat(item.selling_price).toFixed(2)}</span>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, -1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, 1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div>
// //                     <span>
// //                       {(item.quantity * item.selling_price).toFixed(2)}
// //                     </span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: "20px" }}>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Subtotal</span>
// //                 <span>${calculateSubtotal()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <input type="checkbox" checked readOnly />
// //                 <span>Day Event - 20%</span>
// //                 <span>-${calculateDiscount()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 <span>Total</span>
// //                 <span>${calculateTotal()}</span>
// //               </div>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Pay Now ${calculateTotal()}
// //             </button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;
// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);
// //   const [discount, setDiscount] = useState(0); // Default to 0%

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const addToOrder = (product) => {
// //     setOrder([...order, product]);
// //   };

// //   const removeFromOrder = (index) => {
// //     const newOrder = [...order];
// //     newOrder.splice(index, 1);
// //     setOrder(newOrder);
// //   };

// //   const calculateTotal = () => {
// //     const subtotal = order.reduce(
// //       (total, item) =>
// //         total + parseFloat(item.selling_price || 0) * item.quantity,
// //       0
// //     );
// //     const discountAmount = subtotal * discount;
// //     return (subtotal - discountAmount).toFixed(2);
// //   };

// //   const calculateSubtotal = () => {
// //     return order
// //       .reduce(
// //         (subtotal, item) =>
// //           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   const calculateDiscount = () => {
// //     const subtotal = parseFloat(calculateSubtotal());
// //     return (subtotal * discount).toFixed(2);
// //   };

// //   const handleQuantityChange = (index, increment) => {
// //     const newOrder = [...order];
// //     newOrder[index].quantity += increment;
// //     if (newOrder[index].quantity < 1) {
// //       newOrder[index].quantity = 1;
// //     }
// //     setOrder(newOrder);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "100%", padding: "20px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //         </header>
// //         <main
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             flexDirection: "row",
// //           }}
// //         >
// //           <div
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //             }}
// //           >
// //             {/* Category */}
// //             <div style={{ display: "flex", marginBottom: "20px" }}>
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginBottom: "10px",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* End of Category */}
// //             {/* Product */}
// //             <div
// //               style={{
// //                 width: "100%",
// //                 overflowY: "scroll",
// //                 height: "80vh",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexWrap: "wrap",
// //                   gap: "20px",
// //                 }}
// //               >
// //                 {products
// //                   .filter(
// //                     (product) => product.category.name === selectedCategory
// //                   )
// //                   .map((product, index) => (
// //                     <div
// //                       key={index}
// //                       style={{
// //                         width: "25%",
// //                         backgroundColor: "#FFFFFF",
// //                         padding: "10px",
// //                         borderRadius: "5px",
// //                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                         textAlign: "center",
// //                         cursor: "pointer",
// //                       }}
// //                       onClick={() => addToOrder({ ...product, quantity: 1 })}
// //                     >
// //                       <img
// //                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                         alt={product.name}
// //                         style={{
// //                           width: "100%",
// //                           height: "100px",
// //                           objectFit: "cover",
// //                           borderRadius: "5px",
// //                           marginBottom: "10px",
// //                         }}
// //                       />
// //                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
// //                         $
// //                         {product.selling_price
// //                           ? parseFloat(product.selling_price).toFixed(2)
// //                           : ""}
// //                       </p>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //           {/* End of Product */}
// //           {/* New Order */}
// //           <div
// //             style={{
// //               width: "400px",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
// //                 padding: "15px",
// //                 color: "white",
// //                 borderRadius: "5px 5px 0 0",
// //                 margin: "-20px -20px 10px",
// //               }}
// //             >
// //               New Order
// //             </h2>
// //             <p style={{ margin: "0 0 20px", color: "#777" }}>
// //               Sunday, October 28 2018
// //             </p>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
// //                     alt={item.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginRight: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div style={{ display: "flex", flexDirection: "column" }}>
// //                     <span>{item.name}</span>
// //                     <span>@ {parseFloat(item.selling_price).toFixed(2)}</span>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, -1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, 1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div>
// //                     <span>
// //                       {(item.quantity * item.selling_price).toFixed(2)}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => removeFromOrder(index)}
// //                     style={{
// //                       backgroundColor: "#ff4d4f",
// //                       color: "white",
// //                       border: "none",
// //                       borderRadius: "5px",
// //                       width: "25px",
// //                       height: "25px",
// //                       marginLeft: "10px",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     &#128465;
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: "20px" }}>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Subtotal</span>
// //                 <span>${calculateSubtotal()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <label htmlFor="discount">Discount</label>
// //                 <select
// //                   id="discount"
// //                   value={discount}
// //                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
// //                   style={{
// //                     backgroundColor: "#FFFFFF",
// //                     border: "1px solid #DDD",
// //                     borderRadius: "5px",
// //                     padding: "5px",
// //                     cursor: "pointer",
// //                   }}
// //                 >
// //                   <option value={0}>0%</option>
// //                   <option value={0.1}>10%</option>
// //                   <option value={0.15}>15%</option>
// //                   <option value={0.2}>20%</option>
// //                   <option value={0.25}>25%</option>
// //                   <option value={0.3}>30%</option>
// //                 </select>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Discount</span>
// //                 <span>-${calculateDiscount()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 <span>Total</span>
// //                 <span>${calculateTotal()}</span>
// //               </div>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Pay Now ${calculateTotal()}
// //             </button>
// //           </div>
// //           {/* End of New Order */}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;

// // this code is good

// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);
// //   const [discount, setDiscount] = useState(0); // Default to 0%

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const addToOrder = (product) => {
// //     const existingProductIndex = order.findIndex(
// //       (item) => item.id === product.id
// //     );
// //     if (existingProductIndex >= 0) {
// //       const newOrder = [...order];
// //       newOrder[existingProductIndex].quantity += 1;
// //       setOrder(newOrder);
// //     } else {
// //       setOrder([...order, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   const removeFromOrder = (index) => {
// //     const newOrder = [...order];
// //     newOrder.splice(index, 1);
// //     setOrder(newOrder);
// //   };

// //   const calculateTotal = () => {
// //     const subtotal = order.reduce(
// //       (total, item) =>
// //         total + parseFloat(item.selling_price || 0) * item.quantity,
// //       0
// //     );
// //     const discountAmount = subtotal * discount;
// //     return (subtotal - discountAmount).toFixed(2);
// //   };

// //   const calculateSubtotal = () => {
// //     return order
// //       .reduce(
// //         (subtotal, item) =>
// //           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   const calculateDiscount = () => {
// //     const subtotal = parseFloat(calculateSubtotal());
// //     return (subtotal * discount).toFixed(2);
// //   };

// //   const handleQuantityChange = (index, increment) => {
// //     const newOrder = [...order];
// //     newOrder[index].quantity += increment;
// //     if (newOrder[index].quantity < 1) {
// //       newOrder[index].quantity = 1;
// //     }
// //     setOrder(newOrder);
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //         </header>
// //         <main
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             flexDirection: "row",
// //           }}
// //         >
// //           <div
// //             style={{ display: "flex", flexDirection: "column", width: "70%" }}
// //           >
// //             {/* Category */}
// //             <div
// //               style={{
// //                 display: "flex",
// //                 width: "81%",
// //                 marginBottom: "20px",
// //                 overflowX: "auto",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                     flexShrink: 0,
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "60px",
// //                       height: "60px",
// //                       marginBottom: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* End of Category */}
// //             {/* Product */}
// //             <div
// //               style={{
// //                 width: "100%",
// //                 overflowY: "scroll",
// //                 height: "80vh",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexWrap: "wrap",
// //                   gap: "30px",
// //                 }}
// //               >
// //                 {products
// //                   .filter(
// //                     (product) => product.category.name === selectedCategory
// //                   )
// //                   .map((product, index) => (
// //                     <div
// //                       key={index}
// //                       style={{
// //                         width: "25%",
// //                         backgroundColor: "#FFFFFF",
// //                         padding: "10px",
// //                         borderRadius: "5px",
// //                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                         textAlign: "center",
// //                         cursor: "pointer",
// //                       }}
// //                       onClick={() => addToOrder(product)}
// //                     >
// //                       <img
// //                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                         alt={product.name}
// //                         style={{
// //                           width: "100%",
// //                           height: "100px",
// //                           objectFit: "cover",
// //                           borderRadius: "5px",
// //                           marginBottom: "10px",
// //                         }}
// //                       />
// //                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
// //                         $
// //                         {product.selling_price
// //                           ? parseFloat(product.selling_price).toFixed(2)
// //                           : ""}
// //                       </p>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //           {/* End of Product */}
// //           {/* New Order */}
// //           <div
// //             style={{
// //               width: "40%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
// //                 padding: "15px",
// //                 color: "white",
// //                 borderRadius: "5px 5px 0 0",
// //                 margin: "-20px -20px 10px",
// //               }}
// //             >
// //               New Order
// //             </h2>
// //             <p style={{ margin: "0 0 20px", color: "#777" }}>
// //               Sunday, October 28 2018
// //             </p>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
// //                     alt={item.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginRight: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       fontSize: "12px",
// //                     }}
// //                   >
// //                     <span>{item.name}</span>
// //                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, -1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, 1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div>
// //                     <span>
// //                       {(item.quantity * item.selling_price).toFixed(2)}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => removeFromOrder(index)}
// //                     style={{
// //                       backgroundColor: "#ff4d4f",
// //                       color: "white",
// //                       border: "none",
// //                       borderRadius: "5px",
// //                       width: "25px",
// //                       height: "25px",
// //                       marginLeft: "10px",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     &#128465;
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: "20px" }}>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Subtotal</span>
// //                 <span>${calculateSubtotal()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <label htmlFor="discount">Discount</label>
// //                 <select
// //                   id="discount"
// //                   value={discount}
// //                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
// //                   style={{
// //                     backgroundColor: "#FFFFFF",
// //                     border: "1px solid #DDD",
// //                     borderRadius: "5px",
// //                     padding: "5px",
// //                     cursor: "pointer",
// //                   }}
// //                 >
// //                   <option value={0}>0%</option>
// //                   <option value={0.05}>5%</option>
// //                   <option value={0.1}>10%</option>
// //                   <option value={0.15}>15%</option>
// //                   <option value={0.2}>20%</option>
// //                   <option value={0.25}>25%</option>
// //                   <option value={0.3}>30%</option>
// //                 </select>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Discount</span>
// //                 <span>-${calculateDiscount()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 <span>Total</span>
// //                 <span>${calculateTotal()}</span>
// //               </div>
// //             </div>
// //             <button
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Place to order ${calculateTotal()}
// //             </button>
// //           </div>
// //           {/* End of New Order */}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;

// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";
// // import QRdollar from "../../assets/image/QRdollar.png";
// // import QRriel from "../../assets/image/QRriel.png";
// // import Commerce from "../../assets/image/Commerce.png";
// // import Cash from "../../assets/image/Cash.png";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);
// //   const [discount, setDiscount] = useState(0); // Default to 0%
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
// //   const [currency, setCurrency] = useState("USD");

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const addToOrder = (product) => {
// //     const existingProductIndex = order.findIndex(
// //       (item) => item.id === product.id
// //     );
// //     if (existingProductIndex >= 0) {
// //       const newOrder = [...order];
// //       newOrder[existingProductIndex].quantity += 1;
// //       setOrder(newOrder);
// //     } else {
// //       setOrder([...order, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   const removeFromOrder = (index) => {
// //     const newOrder = [...order];
// //     newOrder.splice(index, 1);
// //     setOrder(newOrder);
// //   };

// //   const calculateTotal = () => {
// //     const subtotal = order.reduce(
// //       (total, item) =>
// //         total + parseFloat(item.selling_price || 0) * item.quantity,
// //       0
// //     );
// //     const discountAmount = subtotal * discount;
// //     return (subtotal - discountAmount).toFixed(2);
// //   };

// //   const calculateSubtotal = () => {
// //     return order
// //       .reduce(
// //         (subtotal, item) =>
// //           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   const calculateDiscount = () => {
// //     const subtotal = parseFloat(calculateSubtotal());
// //     return (subtotal * discount).toFixed(2);
// //   };

// //   const handleQuantityChange = (index, increment) => {
// //     const newOrder = [...order];
// //     newOrder[index].quantity += increment;
// //     if (newOrder[index].quantity < 1) {
// //       newOrder[index].quantity = 1;
// //     }
// //     setOrder(newOrder);
// //   };

// //   const handlePlaceOrder = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handlePaymentMethodSelect = (method) => {
// //     setSelectedPaymentMethod(method);
// //     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //     setSelectedPaymentMethod("");
// //     setCurrency("USD");
// //   };

// //   const handleConfirmPayment = () => {
// //     // Handle payment confirmation logic here
// //     console.log(`Payment method selected: ${selectedPaymentMethod}`);
// //     console.log(`Currency selected: ${currency}`);
// //     handleModalClose();
// //   };

// //   const getTotalInCurrency = () => {
// //     const total = parseFloat(calculateTotal());
// //     if (currency === "KH") {
// //       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
// //     }
// //     return total;
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //         </header>
// //         <main
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             flexDirection: "row",
// //           }}
// //         >
// //           <div
// //             style={{ display: "flex", flexDirection: "column", width: "70%" }}
// //           >
// //             {/* Category */}
// //             <div
// //               style={{
// //                 display: "flex",
// //                 width: "81%",
// //                 marginBottom: "20px",
// //                 overflowX: "auto",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                     flexShrink: 0,
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "60px",
// //                       height: "60px",
// //                       marginBottom: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* End of Category */}
// //             {/* Product */}
// //             <div
// //               style={{
// //                 width: "100%",
// //                 overflowY: "scroll",
// //                 height: "80vh",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexWrap: "wrap",
// //                   gap: "30px",
// //                 }}
// //               >
// //                 {products
// //                   .filter(
// //                     (product) => product.category.name === selectedCategory
// //                   )
// //                   .map((product, index) => (
// //                     <div
// //                       key={index}
// //                       style={{
// //                         width: "25%",
// //                         backgroundColor: "#FFFFFF",
// //                         padding: "10px",
// //                         borderRadius: "5px",
// //                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                         textAlign: "center",
// //                         cursor: "pointer",
// //                       }}
// //                       onClick={() => addToOrder(product)}
// //                     >
// //                       <img
// //                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                         alt={product.name}
// //                         style={{
// //                           width: "100%",
// //                           height: "100px",
// //                           objectFit: "cover",
// //                           borderRadius: "5px",
// //                           marginBottom: "10px",
// //                         }}
// //                       />
// //                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
// //                         $
// //                         {product.selling_price
// //                           ? parseFloat(product.selling_price).toFixed(2)
// //                           : ""}
// //                       </p>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //           {/* End of Product */}
// //           {/* New Order */}
// //           <div
// //             style={{
// //               width: "40%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
// //                 padding: "15px",
// //                 color: "white",
// //                 borderRadius: "5px 5px 0 0",
// //                 margin: "-20px -20px 10px",
// //               }}
// //             >
// //               New Order
// //             </h2>
// //             <p style={{ margin: "0 0 20px", color: "#777" }}>
// //               Sunday, October 28 2018
// //             </p>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
// //                     alt={item.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginRight: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       fontSize: "12px",
// //                     }}
// //                   >
// //                     <span>{item.name}</span>
// //                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, -1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, 1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div>
// //                     <span>
// //                       {(item.quantity * item.selling_price).toFixed(2)}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => removeFromOrder(index)}
// //                     style={{
// //                       backgroundColor: "#ff4d4f",
// //                       color: "white",
// //                       border: "none",
// //                       borderRadius: "5px",
// //                       width: "25px",
// //                       height: "25px",
// //                       marginLeft: "10px",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     &#128465;
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: "20px" }}>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Subtotal</span>
// //                 <span>${calculateSubtotal()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <label htmlFor="discount">Discount</label>
// //                 <select
// //                   id="discount"
// //                   value={discount}
// //                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
// //                   style={{
// //                     backgroundColor: "#FFFFFF",
// //                     border: "1px solid #DDD",
// //                     borderRadius: "5px",
// //                     padding: "5px",
// //                     cursor: "pointer",
// //                   }}
// //                 >
// //                   <option value={0}>0%</option>
// //                   <option value={0.05}>5%</option>
// //                   <option value={0.1}>10%</option>
// //                   <option value={0.15}>15%</option>
// //                   <option value={0.2}>20%</option>
// //                   <option value={0.25}>25%</option>
// //                   <option value={0.3}>30%</option>
// //                 </select>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Discount</span>
// //                 <span>-${calculateDiscount()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 <span>Total</span>
// //                 <span>${calculateTotal()}</span>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handlePlaceOrder}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Place Order ${calculateTotal()}
// //             </button>
// //           </div>
// //           {/* End of New Order */}
// //         </main>
// //       </div>

// //       {isModalOpen && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: "0",
// //             left: "0",
// //             width: "100%",
// //             height: "100%",
// //             backgroundColor: "rgba(0,0,0,0.5)",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div
// //             style={{
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //               width: "400px",
// //             }}
// //           >
// //             <h2>Payment Method</h2>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-around",
// //                 marginBottom: "20px",
// //               }}
// //             >
// //               <div
// //                 onClick={() => handlePaymentMethodSelect("Cash")}
// //                 style={{
// //                   padding: "10px",
// //                   borderRadius: "5px",
// //                   cursor: "pointer",
// //                   border:
// //                     selectedPaymentMethod === "Cash"
// //                       ? "2px solid #000"
// //                       : "2px solid #ddd",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <img
// //                   src={Cash}
// //                   alt="Cash"
// //                   style={{ width: "50px", height: "50px" }}
// //                 />
// //                 <div>Cash</div>
// //               </div>
// //               <div
// //                 onClick={() => handlePaymentMethodSelect("Debit Card")}
// //                 style={{
// //                   padding: "10px",
// //                   borderRadius: "5px",
// //                   cursor: "pointer",
// //                   border:
// //                     selectedPaymentMethod === "Debit Card"
// //                       ? "2px solid #000"
// //                       : "2px solid #ddd",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <img
// //                   src={Commerce}
// //                   alt="Debit Card"
// //                   style={{ width: "50px", height: "50px" }}
// //                 />
// //                 <div>Debit Card</div>
// //               </div>
// //             </div>

// //             {(selectedPaymentMethod === "Cash" ||
// //               selectedPaymentMethod === "Debit Card") && (
// //               <div style={{ marginBottom: "20px" }}>
// //                 <div style={{ marginBottom: "10px" }}>
// //                   <label htmlFor="currency">Currency</label>
// //                   <select
// //                     id="currency"
// //                     value={currency}
// //                     onChange={(e) => setCurrency(e.target.value)}
// //                     style={{
// //                       backgroundColor: "#FFFFFF",
// //                       border: "1px solid #DDD",
// //                       borderRadius: "5px",
// //                       padding: "5px",
// //                       cursor: "pointer",
// //                       marginLeft: "10px",
// //                     }}
// //                   >
// //                     <option value="USD">USD</option>
// //                     <option value="KH">KH</option>
// //                   </select>
// //                 </div>
// //                 <div style={{ display: "flex", alignItems: "center" }}>
// //                   {selectedPaymentMethod === "Debit Card" && (
// //                     <img
// //                       src={currency === "USD" ? QRdollar : QRriel}
// //                       alt={currency}
// //                       style={{
// //                         width: "160px",
// //                         // height: "30px",
// //                         marginRight: "10px",
// //                       }}
// //                     />
// //                   )}
// //                   <span>Total: </span>
// //                   <span>
// //                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
// //                   </span>
// //                 </div>
// //               </div>
// //             )}

// //             <button
// //               onClick={handleConfirmPayment}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Confirm Payment
// //             </button>
// //             <button
// //               onClick={handleModalClose}
// //               style={{
// //                 width: "100%",
// //                 marginTop: "10px",
// //                 backgroundColor: "#ccc",
// //                 color: "#000",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Order;

// // import React, { useState, useEffect, useRef } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";
// // import QRdollar from "../../assets/image/QRdollar.png";
// // import QRriel from "../../assets/image/QRriel.png";
// // import Commerce from "../../assets/image/Commerce.png";
// // import Cash from "../../assets/image/Cash.png";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);
// //   const [discount, setDiscount] = useState(0); // Default to 0%
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
// //   const [currency, setCurrency] = useState("USD");

// //   const orderContainerRef = useRef(null);

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const addToOrder = (product) => {
// //     const existingProductIndex = order.findIndex(
// //       (item) => item.id === product.id
// //     );
// //     if (existingProductIndex >= 0) {
// //       const newOrder = [...order];
// //       newOrder[existingProductIndex].quantity += 1;
// //       setOrder(newOrder);
// //     } else {
// //       setOrder([...order, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   const removeFromOrder = (index) => {
// //     const newOrder = [...order];
// //     newOrder.splice(index, 1);
// //     setOrder(newOrder);
// //   };

// //   const calculateTotal = () => {
// //     const subtotal = order.reduce(
// //       (total, item) =>
// //         total + parseFloat(item.selling_price || 0) * item.quantity,
// //       0
// //     );
// //     const discountAmount = subtotal * discount;
// //     return (subtotal - discountAmount).toFixed(2);
// //   };

// //   const calculateSubtotal = () => {
// //     return order
// //       .reduce(
// //         (subtotal, item) =>
// //           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   const calculateDiscount = () => {
// //     const subtotal = parseFloat(calculateSubtotal());
// //     return (subtotal * discount).toFixed(2);
// //   };

// //   const handleQuantityChange = (index, increment) => {
// //     const newOrder = [...order];
// //     newOrder[index].quantity += increment;
// //     if (newOrder[index].quantity < 1) {
// //       newOrder[index].quantity = 1;
// //     }
// //     setOrder(newOrder);
// //   };

// //   const handlePlaceOrder = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handlePaymentMethodSelect = (method) => {
// //     setSelectedPaymentMethod(method);
// //     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //     setSelectedPaymentMethod("");
// //     setCurrency("USD");
// //   };

// //   const handleConfirmPayment = () => {
// //     // Handle payment confirmation logic here
// //     console.log(`Payment method selected: ${selectedPaymentMethod}`);
// //     console.log(`Currency selected: ${currency}`);
// //     handleModalClose();
// //     setOrder([]); // Clear the order after confirming payment
// //   };

// //   const getTotalInCurrency = () => {
// //     const total = parseFloat(calculateTotal());
// //     if (currency === "KH") {
// //       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
// //     }
// //     return total;
// //   };

// //   const currentDate = new Date().toLocaleDateString();

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <main
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             flexDirection: "row",
// //           }}
// //         >
// //           <div
// //             style={{ display: "flex", flexDirection: "column", width: "70%" }}
// //           >
// //             {/* Category */}
// //             <div
// //               style={{
// //                 display: "flex",
// //                 width: "81%",
// //                 marginBottom: "20px",
// //                 overflowX: "auto",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                     flexShrink: 0,
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "60px",
// //                       height: "60px",
// //                       marginBottom: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* End of Category */}
// //             {/* Product */}
// //             <div
// //               style={{
// //                 width: "100%",
// //                 overflowY: "scroll",
// //                 height: "45%",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexWrap: "wrap",
// //                   gap: "30px",
// //                 }}
// //               >
// //                 {products
// //                   .filter(
// //                     (product) => product.category.name === selectedCategory
// //                   )
// //                   .map((product, index) => (
// //                     <div
// //                       key={index}
// //                       style={{
// //                         width: "25%",
// //                         backgroundColor: "#FFFFFF",
// //                         padding: "10px",
// //                         borderRadius: "5px",
// //                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                         textAlign: "center",
// //                         cursor: "pointer",
// //                       }}
// //                       onClick={() => addToOrder(product)}
// //                     >
// //                       <img
// //                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                         alt={product.name}
// //                         style={{
// //                           width: "100%",
// //                           height: "100px",
// //                           objectFit: "cover",
// //                           borderRadius: "5px",
// //                           marginBottom: "10px",
// //                         }}
// //                       />
// //                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
// //                         $
// //                         {product.selling_price
// //                           ? parseFloat(product.selling_price).toFixed(2)
// //                           : ""}
// //                       </p>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //           {/* End of Product */}
// //           {/* New Order */}
// //           <div
// //             style={{
// //               width: "40%",
// //               height: "35%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
// //                 padding: "15px",
// //                 color: "white",
// //                 borderRadius: "5px 5px 0 0",
// //                 margin: "-20px -20px 10px",
// //               }}
// //             >
// //               New Order
// //             </h2>
// //             <p style={{ margin: "0 0 20px", color: "#777" }}>{currentDate}</p>
// //             <div
// //               style={{
// //                 position: "relative",
// //                 height: "200px",
// //                 overflowY: "auto",
// //               }}
// //               ref={orderContainerRef}
// //             >
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
// //                     alt={item.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginRight: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       fontSize: "12px",
// //                     }}
// //                   >
// //                     <span>{item.name}</span>
// //                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, -1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, 1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div>
// //                     <span>
// //                       {(item.quantity * item.selling_price).toFixed(2)}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => removeFromOrder(index)}
// //                     style={{
// //                       backgroundColor: "#ff4d4f",
// //                       color: "white",
// //                       border: "none",
// //                       borderRadius: "5px",
// //                       width: "25px",
// //                       height: "25px",
// //                       marginLeft: "10px",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     &#128465;
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: "20px" }}>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Subtotal</span>
// //                 <span>${calculateSubtotal()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <label htmlFor="discount">Discount</label>
// //                 <select
// //                   id="discount"
// //                   value={discount}
// //                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
// //                   style={{
// //                     backgroundColor: "#FFFFFF",
// //                     border: "1px solid #DDD",
// //                     borderRadius: "5px",
// //                     padding: "5px",
// //                     cursor: "pointer",
// //                   }}
// //                 >
// //                   <option value={0}>0%</option>
// //                   <option value={0.05}>5%</option>
// //                   <option value={0.1}>10%</option>
// //                   <option value={0.15}>15%</option>
// //                   <option value={0.2}>20%</option>
// //                   <option value={0.25}>25%</option>
// //                   <option value={0.3}>30%</option>
// //                 </select>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Discount</span>
// //                 <span>-${calculateDiscount()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 <span>Total</span>
// //                 <span>${calculateTotal()}</span>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handlePlaceOrder}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Place Order ${calculateTotal()}
// //             </button>
// //           </div>
// //           {/* End of New Order */}
// //         </main>
// //       </div>

// //       {isModalOpen && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: "0",
// //             left: "0",
// //             width: "100%",
// //             height: "100%",
// //             backgroundColor: "rgba(0,0,0,0.5)",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div
// //             style={{
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //               width: "400px",
// //             }}
// //           >
// //             <h2>Payment Method</h2>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-around",
// //                 marginBottom: "20px",
// //               }}
// //             >
// //               <div
// //                 onClick={() => handlePaymentMethodSelect("Cash")}
// //                 style={{
// //                   padding: "10px",
// //                   borderRadius: "5px",
// //                   cursor: "pointer",
// //                   border:
// //                     selectedPaymentMethod === "Cash"
// //                       ? "2px solid #000"
// //                       : "2px solid #ddd",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <img
// //                   src={Cash}
// //                   alt="Cash"
// //                   style={{ width: "50px", height: "50px" }}
// //                 />
// //                 <div>Cash</div>
// //               </div>
// //               <div
// //                 onClick={() => handlePaymentMethodSelect("Bank")}
// //                 style={{
// //                   padding: "10px",
// //                   borderRadius: "5px",
// //                   cursor: "pointer",
// //                   border:
// //                     selectedPaymentMethod === "Bank"
// //                       ? "2px solid #000"
// //                       : "2px solid #ddd",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <img
// //                   src={Commerce}
// //                   alt="Bank"
// //                   style={{ width: "50px", height: "50px" }}
// //                 />
// //                 <div>Bank</div>
// //               </div>
// //             </div>

// //             {(selectedPaymentMethod === "Cash" ||
// //               selectedPaymentMethod === "Bank") && (
// //               <div style={{ marginBottom: "20px" }}>
// //                 <div style={{ marginBottom: "10px" }}>
// //                   <label htmlFor="currency">Currency</label>
// //                   <select
// //                     id="currency"
// //                     value={currency}
// //                     onChange={(e) => setCurrency(e.target.value)}
// //                     style={{
// //                       backgroundColor: "#FFFFFF",
// //                       border: "1px solid #DDD",
// //                       borderRadius: "5px",
// //                       padding: "5px",
// //                       cursor: "pointer",
// //                       marginLeft: "10px",
// //                     }}
// //                   >
// //                     <option value="USD">USD</option>
// //                     <option value="KH">KH</option>
// //                   </select>
// //                 </div>
// //                 <div style={{ display: "flex", alignItems: "center" }}>
// //                   {selectedPaymentMethod === "Bank" && (
// //                     <img
// //                       src={currency === "USD" ? QRdollar : QRriel}
// //                       alt={currency}
// //                       style={{
// //                         width: "160px",
// //                         marginRight: "10px",
// //                       }}
// //                     />
// //                   )}
// //                   <span>Total: </span>
// //                   <span>
// //                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
// //                   </span>
// //                 </div>
// //               </div>
// //             )}

// //             <button
// //               onClick={handleConfirmPayment}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Confirm Payment
// //             </button>
// //             <button
// //               onClick={handleModalClose}
// //               style={{
// //                 width: "100%",
// //                 marginTop: "10px",
// //                 backgroundColor: "#ccc",
// //                 color: "#000",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Order;

// // if error other code this code is the main code
// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";
// // import { useStateContext } from "../../context/ContextProvider";
// // import axiosClient from "../../axios-client";
// // import QRdollar from "../../assets/image/QRdollar.png";
// // import QRriel from "../../assets/image/QRriel.png";
// // import Commerce from "../../assets/image/Commerce.png";
// // import Cash from "../../assets/image/Cash.png";

// // const Order = () => {
// //   const { user, token, setUser, setToken } = useStateContext();
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [order, setOrder] = useState([]);
// //   const [discount, setDiscount] = useState(0); // Default to 0%
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
// //   const [currency, setCurrency] = useState("USD");

// //   useEffect(() => {
// //     if (token) {
// //       axiosClient.get("/categories").then(({ data }) => {
// //         setCategories(data);
// //         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
// //       });
// //       axiosClient.get("/products").then(({ data }) => {
// //         setProducts(data);
// //       });
// //     }
// //   }, [token]);

// //   if (!token) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (user.role !== "staff") {
// //     return <Navigate to="/login" />;
// //   }

// //   const addToOrder = (product) => {
// //     const existingProductIndex = order.findIndex(
// //       (item) => item.id === product.id
// //     );
// //     if (existingProductIndex >= 0) {
// //       const newOrder = [...order];
// //       newOrder[existingProductIndex].quantity += 1;
// //       setOrder(newOrder);
// //     } else {
// //       setOrder([...order, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   const removeFromOrder = (index) => {
// //     const newOrder = [...order];
// //     newOrder.splice(index, 1);
// //     setOrder(newOrder);
// //   };

// //   const calculateTotal = () => {
// //     const subtotal = order.reduce(
// //       (total, item) =>
// //         total + parseFloat(item.selling_price || 0) * item.quantity,
// //       0
// //     );
// //     const discountAmount = subtotal * discount;
// //     return (subtotal - discountAmount).toFixed(2);
// //   };

// //   const calculateSubtotal = () => {
// //     return order
// //       .reduce(
// //         (subtotal, item) =>
// //           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
// //         0
// //       )
// //       .toFixed(2);
// //   };

// //   const calculateDiscount = () => {
// //     const subtotal = parseFloat(calculateSubtotal());
// //     return (subtotal * discount).toFixed(2);
// //   };

// //   const handleQuantityChange = (index, increment) => {
// //     const newOrder = [...order];
// //     newOrder[index].quantity += increment;
// //     if (newOrder[index].quantity < 1) {
// //       newOrder[index].quantity = 1;
// //     }
// //     setOrder(newOrder);
// //   };

// //   const handlePlaceOrder = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handlePaymentMethodSelect = (method) => {
// //     setSelectedPaymentMethod(method);
// //     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //     setSelectedPaymentMethod("");
// //     setCurrency("USD");
// //   };

// //   const handleConfirmPayment = () => {
// //     const orderData = {
// //       user_id: user.id,
// //       order_items: JSON.stringify(order),
// //       total: calculateTotal(),
// //       payment_method: selectedPaymentMethod,
// //       currency: currency,
// //     };

// //     axiosClient
// //       .post("/orders", orderData)
// //       .then((response) => {
// //         console.log(response.data);
// //         handleModalClose();
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   const getTotalInCurrency = () => {
// //     const total = parseFloat(calculateTotal());
// //     if (currency === "KH") {
// //       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
// //     }
// //     return total;
// //   };

// //   return (
// //     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
// //       <div
// //         className="content"
// //         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
// //       >
// //         <header
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div>Menu Category</div>
// //         </header>
// //         <main
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             flexDirection: "row",
// //           }}
// //         >
// //           <div
// //             style={{ display: "flex", flexDirection: "column", width: "70%" }}
// //           >
// //             {/* Category */}
// //             <div
// //               style={{
// //                 display: "flex",
// //                 width: "81%",
// //                 marginBottom: "20px",
// //                 overflowX: "auto",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               {categories.map((category) => (
// //                 <div
// //                   key={category.id}
// //                   style={{
// //                     marginRight: "10px",
// //                     cursor: "pointer",
// //                     backgroundColor:
// //                       selectedCategory === category.name
// //                         ? "#FFD700"
// //                         : "#FFFFFF",
// //                     padding: "10px",
// //                     borderRadius: "5px",
// //                     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                     textAlign: "center",
// //                     flexShrink: 0,
// //                   }}
// //                   onClick={() => setSelectedCategory(category.name)}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
// //                     alt={category.name}
// //                     style={{
// //                       width: "60px",
// //                       height: "60px",
// //                       marginBottom: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div>{category.name}</div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* End of Category */}
// //             {/* Product */}
// //             <div
// //               style={{
// //                 width: "100%",
// //                 overflowY: "scroll",
// //                 height: "80vh",
// //                 scrollbarWidth: "none",
// //                 msOverflowStyle: "none",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexWrap: "wrap",
// //                   gap: "30px",
// //                 }}
// //               >
// //                 {products
// //                   .filter(
// //                     (product) => product.category.name === selectedCategory
// //                   )
// //                   .map((product, index) => (
// //                     <div
// //                       key={index}
// //                       style={{
// //                         width: "25%",
// //                         backgroundColor: "#FFFFFF",
// //                         padding: "10px",
// //                         borderRadius: "5px",
// //                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //                         textAlign: "center",
// //                         cursor: "pointer",
// //                       }}
// //                       onClick={() => addToOrder(product)}
// //                     >
// //                       <img
// //                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
// //                         alt={product.name}
// //                         style={{
// //                           width: "100%",
// //                           height: "100px",
// //                           objectFit: "cover",
// //                           borderRadius: "5px",
// //                           marginBottom: "10px",
// //                         }}
// //                       />
// //                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
// //                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
// //                         $
// //                         {product.selling_price
// //                           ? parseFloat(product.selling_price).toFixed(2)
// //                           : ""}
// //                       </p>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           </div>
// //           {/* End of Product */}
// //           {/* New Order */}
// //           <div
// //             style={{
// //               width: "40%",
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
// //                 padding: "15px",
// //                 color: "white",
// //                 borderRadius: "5px 5px 0 0",
// //                 margin: "-20px -20px 10px",
// //               }}
// //             >
// //               New Order
// //             </h2>
// //             <p style={{ margin: "0 0 20px", color: "#777" }}>
// //               Sunday, October 28 2018
// //             </p>
// //             <div>
// //               {order.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     marginBottom: "10px",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
// //                     alt={item.name}
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       marginRight: "10px",
// //                       borderRadius: "5px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       fontSize: "12px",
// //                     }}
// //                   >
// //                     <span>{item.name}</span>
// //                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
// //                   </div>
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, -1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(index, 1)}
// //                       style={{
// //                         backgroundColor: "#ff7e5f",
// //                         color: "white",
// //                         border: "none",
// //                         borderRadius: "5px",
// //                         width: "25px",
// //                         height: "25px",
// //                         margin: "0 5px",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div>
// //                     <span>
// //                       {(item.quantity * item.selling_price).toFixed(2)}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => removeFromOrder(index)}
// //                     style={{
// //                       backgroundColor: "#ff4d4f",
// //                       color: "white",
// //                       border: "none",
// //                       borderRadius: "5px",
// //                       width: "25px",
// //                       height: "25px",
// //                       marginLeft: "10px",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     &#128465;
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{ marginTop: "20px" }}>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Subtotal</span>
// //                 <span>${calculateSubtotal()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <label htmlFor="discount">Discount</label>
// //                 <select
// //                   id="discount"
// //                   value={discount}
// //                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
// //                   style={{
// //                     backgroundColor: "#FFFFFF",
// //                     border: "1px solid #DDD",
// //                     borderRadius: "5px",
// //                     padding: "5px",
// //                     cursor: "pointer",
// //                   }}
// //                 >
// //                   <option value={0}>0%</option>
// //                   <option value={0.05}>5%</option>
// //                   <option value={0.1}>10%</option>
// //                   <option value={0.15}>15%</option>
// //                   <option value={0.2}>20%</option>
// //                   <option value={0.25}>25%</option>
// //                   <option value={0.3}>30%</option>
// //                 </select>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                 }}
// //               >
// //                 <span>Discount</span>
// //                 <span>-${calculateDiscount()}</span>
// //               </div>
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   marginBottom: "10px",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 <span>Total</span>
// //                 <span>${calculateTotal()}</span>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handlePlaceOrder}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Place Order ${calculateTotal()}
// //             </button>
// //           </div>
// //           {/* End of New Order */}
// //         </main>
// //       </div>

// //       {isModalOpen && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: "0",
// //             left: "0",
// //             width: "100%",
// //             height: "100%",
// //             backgroundColor: "rgba(0,0,0,0.5)",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div
// //             style={{
// //               backgroundColor: "#FFFFFF",
// //               padding: "20px",
// //               borderRadius: "5px",
// //               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //               width: "400px",
// //             }}
// //           >
// //             <h2>Payment Method</h2>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-around",
// //                 marginBottom: "20px",
// //               }}
// //             >
// //               <div
// //                 onClick={() => handlePaymentMethodSelect("Cash")}
// //                 style={{
// //                   padding: "10px",
// //                   borderRadius: "5px",
// //                   cursor: "pointer",
// //                   border:
// //                     selectedPaymentMethod === "Cash"
// //                       ? "2px solid #000"
// //                       : "2px solid #ddd",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <img
// //                   src={Cash}
// //                   alt="Cash"
// //                   style={{ width: "50px", height: "50px" }}
// //                 />
// //                 <div>Cash</div>
// //               </div>
// //               <div
// //                 onClick={() => handlePaymentMethodSelect("Debit Card")}
// //                 style={{
// //                   padding: "10px",
// //                   borderRadius: "5px",
// //                   cursor: "pointer",
// //                   border:
// //                     selectedPaymentMethod === "Debit Card"
// //                       ? "2px solid #000"
// //                       : "2px solid #ddd",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <img
// //                   src={Commerce}
// //                   alt="Debit Card"
// //                   style={{ width: "50px", height: "50px" }}
// //                 />
// //                 <div>Debit Card</div>
// //               </div>
// //             </div>

// //             {(selectedPaymentMethod === "Cash" ||
// //               selectedPaymentMethod === "Debit Card") && (
// //               <div style={{ marginBottom: "20px" }}>
// //                 <div style={{ marginBottom: "10px" }}>
// //                   <label htmlFor="currency">Currency</label>
// //                   <select
// //                     id="currency"
// //                     value={currency}
// //                     onChange={(e) => setCurrency(e.target.value)}
// //                     style={{
// //                       backgroundColor: "#FFFFFF",
// //                       border: "1px solid #DDD",
// //                       borderRadius: "5px",
// //                       padding: "5px",
// //                       cursor: "pointer",
// //                       marginLeft: "10px",
// //                     }}
// //                   >
// //                     <option value="USD">USD</option>
// //                     <option value="KH">KH</option>
// //                   </select>
// //                 </div>
// //                 <div style={{ display: "flex", alignItems: "center" }}>
// //                   {selectedPaymentMethod === "Debit Card" && (
// //                     <img
// //                       src={currency === "USD" ? QRdollar : QRriel}
// //                       alt={currency}
// //                       style={{
// //                         width: "160px",
// //                         marginRight: "10px",
// //                       }}
// //                     />
// //                   )}
// //                   <span>Total: </span>
// //                   <span>
// //                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
// //                   </span>
// //                 </div>
// //               </div>
// //             )}

// //             <button
// //               onClick={handleConfirmPayment}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#ff6347",
// //                 color: "#FFFFFF",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Confirm Payment
// //             </button>
// //             <button
// //               onClick={handleModalClose}
// //               style={{
// //                 width: "100%",
// //                 marginTop: "10px",
// //                 backgroundColor: "#ccc",
// //                 color: "#000",
// //                 padding: "10px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 textAlign: "center",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 border: "none",
// //               }}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Order;
// // // this code is surpport

// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useStateContext } from "../../context/ContextProvider";
// import axiosClient from "../../axios-client";
// import QRdollar from "../../assets/image/QRdollar.png";
// import QRriel from "../../assets/image/QRriel.png";
// import Commerce from "../../assets/image/Commerce.png";
// import Cash from "../../assets/image/Cash.png";

// const Order = () => {
//   const { user, token, setUser, setToken } = useStateContext();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [order, setOrder] = useState([]);
//   const [discount, setDiscount] = useState(0); // Default to 0%
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [currency, setCurrency] = useState("USD");

//   useEffect(() => {
//     if (token) {
//       axiosClient.get("/categories").then(({ data }) => {
//         setCategories(data);
//         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
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

//   const addToOrder = (product) => {
//     const existingProductIndex = order.findIndex(
//       (item) => item.id === product.id
//     );
//     if (existingProductIndex >= 0) {
//       const newOrder = [...order];
//       newOrder[existingProductIndex].quantity += 1;
//       setOrder(newOrder);
//     } else {
//       setOrder([...order, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromOrder = (index) => {
//     const newOrder = [...order];
//     newOrder.splice(index, 1);
//     setOrder(newOrder);
//   };

//   const calculateTotal = () => {
//     const subtotal = order.reduce(
//       (total, item) =>
//         total + parseFloat(item.selling_price || 0) * item.quantity,
//       0
//     );
//     const discountAmount = subtotal * discount;
//     return (subtotal - discountAmount).toFixed(2);
//   };

//   const calculateSubtotal = () => {
//     return order
//       .reduce(
//         (subtotal, item) =>
//           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
//         0
//       )
//       .toFixed(2);
//   };

//   const calculateDiscount = () => {
//     const subtotal = parseFloat(calculateSubtotal());
//     return (subtotal * discount).toFixed(2);
//   };

//   const handleQuantityChange = (index, increment) => {
//     const newOrder = [...order];
//     newOrder[index].quantity += increment;
//     if (newOrder[index].quantity < 1) {
//       newOrder[index].quantity = 1;
//     }
//     setOrder(newOrder);
//   };

//   const handlePlaceOrder = () => {
//     setIsModalOpen(true);
//   };

//   const handlePaymentMethodSelect = (method) => {
//     setSelectedPaymentMethod(method);
//     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedPaymentMethod("");
//     setCurrency("USD");
//   };

//   const handleConfirmPayment = () => {
//     const orderData = {
//       user_id: user.id,
//       order_items: JSON.stringify(order),
//       total: calculateTotal(),
//       payment_method: selectedPaymentMethod,
//       currency: currency,
//     };

//     axiosClient
//       .post("/orders", orderData)
//       .then((response) => {
//         console.log(response.data);
//         setOrder([]); // Clear the order after confirming payment
//         handleModalClose();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const getTotalInCurrency = () => {
//     const total = parseFloat(calculateTotal());
//     if (currency === "KH") {
//       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
//     }
//     return total;
//   };

//   return (
//     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
//       <div
//         className="content"
//         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
//       >
//         <header
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>Menu Category</div>
//         </header>
//         <main
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexDirection: "row",
//           }}
//         >
//           <div
//             style={{ display: "flex", flexDirection: "column", width: "70%" }}
//           >
//             {/* Category */}
//             <div
//               style={{
//                 display: "flex",
//                 width: "81%",
//                 marginBottom: "20px",
//                 overflowX: "auto",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
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
//                     textAlign: "center",
//                     flexShrink: 0,
//                   }}
//                   onClick={() => setSelectedCategory(category.name)}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
//                     alt={category.name}
//                     style={{
//                       width: "60px",
//                       height: "60px",
//                       marginBottom: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div>{category.name}</div>
//                 </div>
//               ))}
//             </div>
//             {/* End of Category */}
//             {/* Product */}
//             <div
//               style={{
//                 width: "100%",
//                 overflowY: "scroll",
//                 height: "80vh",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "30px",
//                 }}
//               >
//                 {products
//                   .filter(
//                     (product) => product.category.name === selectedCategory
//                   )
//                   .map((product, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         width: "25%",
//                         backgroundColor: "#FFFFFF",
//                         padding: "10px",
//                         borderRadius: "5px",
//                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                         textAlign: "center",
//                         cursor: "pointer",
//                       }}
//                       onClick={() => addToOrder(product)}
//                     >
//                       <img
//                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
//                         alt={product.name}
//                         style={{
//                           width: "100%",
//                           height: "100px",
//                           objectFit: "cover",
//                           borderRadius: "5px",
//                           marginBottom: "10px",
//                         }}
//                       />
//                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
//                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
//                         $
//                         {product.selling_price
//                           ? parseFloat(product.selling_price).toFixed(2)
//                           : ""}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//           {/* End of Product */}
//           {/* New Order */}
//           <div
//             style={{
//               width: "40%",
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2
//               style={{
//                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
//                 padding: "15px",
//                 color: "white",
//                 borderRadius: "5px 5px 0 0",
//                 margin: "-20px -20px 10px",
//               }}
//             >
//               New Order
//             </h2>
//             <p style={{ margin: "0 0 20px", color: "#777" }}>
//               Sunday, October 28 2018
//             </p>
//             <div>
//               {order.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
//                     alt={item.name}
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       marginRight: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       fontSize: "12px",
//                     }}
//                   >
//                     <span>{item.name}</span>
//                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <button
//                       onClick={() => handleQuantityChange(index, -1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange(index, 1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     <span>
//                       {(item.quantity * item.selling_price).toFixed(2)}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => removeFromOrder(index)}
//                     style={{
//                       backgroundColor: "#ff4d4f",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       width: "25px",
//                       height: "25px",
//                       marginLeft: "10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     &#128465;
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div style={{ marginTop: "20px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Subtotal</span>
//                 <span>${calculateSubtotal()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <label htmlFor="discount">Discount</label>
//                 <select
//                   id="discount"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
//                   style={{
//                     backgroundColor: "#FFFFFF",
//                     border: "1px solid #DDD",
//                     borderRadius: "5px",
//                     padding: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <option value={0}>0%</option>
//                   <option value={0.05}>5%</option>
//                   <option value={0.1}>10%</option>
//                   <option value={0.15}>15%</option>
//                   <option value={0.2}>20%</option>
//                   <option value={0.25}>25%</option>
//                   <option value={0.3}>30%</option>
//                 </select>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Discount</span>
//                 <span>-${calculateDiscount()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <span>Total</span>
//                 <span>${calculateTotal()}</span>
//               </div>
//             </div>
//             <button
//               onClick={handlePlaceOrder}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#ff6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Place Order ${calculateTotal()}
//             </button>
//           </div>
//           {/* End of New Order */}
//         </main>
//       </div>

//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//               width: "400px",
//             }}
//           >
//             <h2>Payment Method</h2>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 marginBottom: "20px",
//               }}
//             >
//               <div
//                 onClick={() => handlePaymentMethodSelect("Cash")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Cash"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Cash}
//                   alt="Cash"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Cash</div>
//               </div>
//               <div
//                 onClick={() => handlePaymentMethodSelect("Bank")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Bank"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Commerce}
//                   alt="Bank"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Bank</div>
//               </div>
//             </div>

//             {(selectedPaymentMethod === "Cash" ||
//               selectedPaymentMethod === "Bank") && (
//               <div style={{ marginBottom: "20px" }}>
//                 <div style={{ marginBottom: "10px" }}>
//                   <label htmlFor="currency">Currency</label>
//                   <select
//                     id="currency"
//                     value={currency}
//                     onChange={(e) => setCurrency(e.target.value)}
//                     style={{
//                       backgroundColor: "#FFFFFF",
//                       border: "1px solid #DDD",
//                       borderRadius: "5px",
//                       padding: "5px",
//                       cursor: "pointer",
//                       marginLeft: "10px",
//                     }}
//                   >
//                     <option value="USD">USD</option>
//                     <option value="KH">KH</option>
//                   </select>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   {selectedPaymentMethod === "Bank" && (
//                     <img
//                       src={currency === "USD" ? QRdollar : QRriel}
//                       alt={currency}
//                       style={{
//                         width: "160px",
//                         marginRight: "10px",
//                       }}
//                     />
//                   )}
//                   <span>Total: </span>
//                   <span>
//                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={handleConfirmPayment}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#ff6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Confirm Payment
//             </button>
//             <button
//               onClick={handleModalClose}
//               style={{
//                 width: "100%",
//                 marginTop: "10px",
//                 backgroundColor: "#ccc",
//                 color: "#000",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;

// work in require the selecte product
// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useStateContext } from "../../context/ContextProvider";
// import axiosClient from "../../axios-client";
// import QRdollar from "../../assets/image/QRdollar.png";
// import QRriel from "../../assets/image/QRriel.png";
// import Commerce from "../../assets/image/Commerce.png";
// import Cash from "../../assets/image/Cash.png";

// const Order = () => {
//   const { user, token } = useStateContext();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [order, setOrder] = useState([]);
//   const [discount, setDiscount] = useState(0); // Default to 0%
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [currency, setCurrency] = useState("USD");

//   useEffect(() => {
//     if (token) {
//       axiosClient.get("/categories").then(({ data }) => {
//         setCategories(data);
//         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
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

//   const addToOrder = (product) => {
//     const existingProductIndex = order.findIndex(
//       (item) => item.id === product.id
//     );
//     if (existingProductIndex >= 0) {
//       const newOrder = [...order];
//       newOrder[existingProductIndex].quantity += 1;
//       setOrder(newOrder);
//     } else {
//       setOrder([...order, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromOrder = (index) => {
//     const newOrder = [...order];
//     newOrder.splice(index, 1);
//     setOrder(newOrder);
//   };

//   const calculateTotal = () => {
//     const subtotal = order.reduce(
//       (total, item) =>
//         total + parseFloat(item.selling_price || 0) * item.quantity,
//       0
//     );
//     const discountAmount = subtotal * discount;
//     return (subtotal - discountAmount).toFixed(2);
//   };

//   const calculateSubtotal = () => {
//     return order
//       .reduce(
//         (subtotal, item) =>
//           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
//         0
//       )
//       .toFixed(2);
//   };

//   const calculateDiscount = () => {
//     const subtotal = parseFloat(calculateSubtotal());
//     return (subtotal * discount).toFixed(2);
//   };

//   const handleQuantityChange = (index, increment) => {
//     const newOrder = [...order];
//     newOrder[index].quantity += increment;
//     if (newOrder[index].quantity < 1) {
//       newOrder[index].quantity = 1;
//     }
//     setOrder(newOrder);
//   };

//   const handlePlaceOrder = () => {
//     setIsModalOpen(true);
//   };

//   const handlePaymentMethodSelect = (method) => {
//     setSelectedPaymentMethod(method);
//     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedPaymentMethod("");
//     setCurrency("USD");
//   };

//   const handleConfirmPayment = () => {
//     if (!selectedPaymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     const orderData = {
//       user_id: user.id,
//       order_items: JSON.stringify(order),
//       total: calculateTotal(),
//       payment_method: selectedPaymentMethod,
//       currency: currency,
//     };

//     axiosClient
//       .post("/orders", orderData)
//       .then((response) => {
//         console.log(response.data);
//         setOrder([]); // Clear the order after confirming payment
//         handleModalClose();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const getTotalInCurrency = () => {
//     const total = parseFloat(calculateTotal());
//     if (currency === "KH") {
//       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
//     }
//     return total;
//   };

//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
//       <div
//         className="content"
//         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
//       >
//         <header
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>Menu Category</div>
//         </header>
//         <main
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexDirection: "row",
//           }}
//         >
//           <div
//             style={{ display: "flex", flexDirection: "column", width: "70%" }}
//           >
//             {/* Category */}
//             <div
//               style={{
//                 display: "flex",
//                 width: "81%",
//                 marginBottom: "20px",
//                 overflowX: "auto",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
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
//                     textAlign: "center",
//                     flexShrink: 0,
//                   }}
//                   onClick={() => setSelectedCategory(category.name)}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
//                     alt={category.name}
//                     style={{
//                       width: "60px",
//                       height: "60px",
//                       marginBottom: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div>{category.name}</div>
//                 </div>
//               ))}
//             </div>
//             {/* End of Category */}
//             {/* Product */}
//             <div
//               style={{
//                 width: "100%",
//                 overflowY: "scroll",
//                 height: "80vh",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "30px",
//                 }}
//               >
//                 {products
//                   .filter(
//                     (product) => product.category.name === selectedCategory
//                   )
//                   .map((product, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         width: "25%",
//                         backgroundColor: "#FFFFFF",
//                         padding: "10px",
//                         borderRadius: "5px",
//                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                         textAlign: "center",
//                         cursor: "pointer",
//                       }}
//                       onClick={() => addToOrder(product)}
//                     >
//                       <img
//                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
//                         alt={product.name}
//                         style={{
//                           width: "100%",
//                           height: "100px",
//                           objectFit: "cover",
//                           borderRadius: "5px",
//                           marginBottom: "10px",
//                         }}
//                       />
//                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
//                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
//                         $
//                         {product.selling_price
//                           ? parseFloat(product.selling_price).toFixed(2)
//                           : ""}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//           {/* End of Product */}
//           {/* New Order */}
//           <div
//             style={{
//               width: "40%",
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2
//               style={{
//                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
//                 padding: "15px",
//                 color: "white",
//                 borderRadius: "5px 5px 0 0",
//                 margin: "-20px -20px 10px",
//               }}
//             >
//               New Order
//             </h2>
//             <p style={{ margin: "0 0 20px", color: "#777" }}>{currentDate}</p>
//             <div>
//               {order.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
//                     alt={item.name}
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       marginRight: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       fontSize: "12px",
//                     }}
//                   >
//                     <span>{item.name}</span>
//                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <button
//                       onClick={() => handleQuantityChange(index, -1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange(index, 1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     <span>
//                       {(item.quantity * item.selling_price).toFixed(2)}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => removeFromOrder(index)}
//                     style={{
//                       backgroundColor: "#ff4d4f",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       width: "25px",
//                       height: "25px",
//                       marginLeft: "10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     &#128465;
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div style={{ marginTop: "20px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Subtotal</span>
//                 <span>${calculateSubtotal()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <label htmlFor="discount">Discount</label>
//                 <select
//                   id="discount"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
//                   style={{
//                     backgroundColor: "#FFFFFF",
//                     border: "1px solid #DDD",
//                     borderRadius: "5px",
//                     padding: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <option value={0}>0%</option>
//                   <option value={0.05}>5%</option>
//                   <option value={0.1}>10%</option>
//                   <option value={0.15}>15%</option>
//                   <option value={0.2}>20%</option>
//                   <option value={0.25}>25%</option>
//                   <option value={0.3}>30%</option>
//                 </select>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Discount</span>
//                 <span>-${calculateDiscount()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <span>Total</span>
//                 <span>${calculateTotal()}</span>
//               </div>
//             </div>
//             <button
//               onClick={order.length > 0 ? handlePlaceOrder : null}
//               disabled={order.length === 0}
//               style={{
//                 width: "100%",
//                 backgroundColor: order.length > 0 ? "#ff6347" : "#ccc",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: order.length > 0 ? "pointer" : "not-allowed",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Place Order ${calculateTotal()}
//             </button>
//           </div>
//           {/* End of New Order */}
//         </main>
//       </div>

//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//               width: "400px",
//             }}
//           >
//             <h2>Payment Method</h2>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 marginBottom: "20px",
//               }}
//             >
//               <div
//                 onClick={() => handlePaymentMethodSelect("Cash")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Cash"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Cash}
//                   alt="Cash"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Cash</div>
//               </div>
//               <div
//                 onClick={() => handlePaymentMethodSelect("Bank")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Bank"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Commerce}
//                   alt="Bank"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Bank</div>
//               </div>
//             </div>

//             {(selectedPaymentMethod === "Cash" ||
//               selectedPaymentMethod === "Bank") && (
//               <div style={{ marginBottom: "20px" }}>
//                 <div style={{ marginBottom: "10px" }}>
//                   <label htmlFor="currency">Currency</label>
//                   <select
//                     id="currency"
//                     value={currency}
//                     onChange={(e) => setCurrency(e.target.value)}
//                     style={{
//                       backgroundColor: "#FFFFFF",
//                       border: "1px solid #DDD",
//                       borderRadius: "5px",
//                       padding: "5px",
//                       cursor: "pointer",
//                       marginLeft: "10px",
//                     }}
//                   >
//                     <option value="USD">USD</option>
//                     <option value="KH">KH</option>
//                   </select>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   {selectedPaymentMethod === "Bank" && (
//                     <img
//                       src={currency === "USD" ? QRdollar : QRriel}
//                       alt={currency}
//                       style={{
//                         width: "160px",
//                         marginRight: "10px",
//                       }}
//                     />
//                   )}
//                   <span>Total: </span>
//                   <span>
//                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={handleConfirmPayment}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#ff6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Confirm Payment
//             </button>
//             <button
//               onClick={handleModalClose}
//               style={{
//                 width: "100%",
//                 marginTop: "10px",
//                 backgroundColor: "#ccc",
//                 color: "#000",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;
// end of it
// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useStateContext } from "../../context/ContextProvider";
// import axiosClient from "../../axios-client";
// import QRdollar from "../../assets/image/QRdollar.png";
// import QRriel from "../../assets/image/QRriel.png";
// import Commerce from "../../assets/image/Commerce.png";
// import Cash from "../../assets/image/Cash.png";

// const Order = () => {
//   const { user, token } = useStateContext();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [order, setOrder] = useState([]);
//   const [discount, setDiscount] = useState(0); // Default to 0%
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [currency, setCurrency] = useState("USD");

//   useEffect(() => {
//     if (token) {
//       axiosClient.get("/categories").then(({ data }) => {
//         setCategories(data);
//         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
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

//   const addToOrder = (product) => {
//     const existingProductIndex = order.findIndex(
//       (item) => item.id === product.id
//     );
//     if (existingProductIndex >= 0) {
//       const newOrder = [...order];
//       newOrder[existingProductIndex].quantity += 1;
//       setOrder(newOrder);
//     } else {
//       setOrder([...order, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromOrder = (index) => {
//     const newOrder = [...order];
//     newOrder.splice(index, 1);
//     setOrder(newOrder);
//   };

//   const calculateTotal = () => {
//     const subtotal = order.reduce(
//       (total, item) =>
//         total + parseFloat(item.selling_price || 0) * item.quantity,
//       0
//     );
//     const discountAmount = subtotal * discount;
//     return (subtotal - discountAmount).toFixed(2);
//   };

//   const calculateSubtotal = () => {
//     return order
//       .reduce(
//         (subtotal, item) =>
//           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
//         0
//       )
//       .toFixed(2);
//   };

//   const calculateDiscount = () => {
//     const subtotal = parseFloat(calculateSubtotal());
//     return (subtotal * discount).toFixed(2);
//   };

//   const handleQuantityChange = (index, increment) => {
//     const newOrder = [...order];
//     newOrder[index].quantity += increment;
//     if (newOrder[index].quantity < 1) {
//       newOrder[index].quantity = 1;
//     }
//     setOrder(newOrder);
//   };

//   const handlePlaceOrder = () => {
//     setIsModalOpen(true);
//   };

//   const handlePaymentMethodSelect = (method) => {
//     setSelectedPaymentMethod(method);
//     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedPaymentMethod("");
//     setCurrency("USD");
//   };

//   const handleConfirmPayment = () => {
//     if (!selectedPaymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     const orderData = {
//       user_id: user.id,
//       order_items: JSON.stringify(order),
//       total: calculateTotal(),
//       payment_method: selectedPaymentMethod,
//       currency: currency,
//     };

//     axiosClient
//       .post("/orders", orderData)
//       .then((response) => {
//         console.log(response.data);
//         setOrder([]); // Clear the order after confirming payment
//         handleModalClose();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const getTotalInCurrency = () => {
//     const total = parseFloat(calculateTotal());
//     if (currency === "KH") {
//       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
//     }
//     return total;
//   };

//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
//       <div
//         className="content"
//         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
//       >
//         <header
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>Menu Category</div>
//         </header>
//         <main
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexDirection: "row",
//           }}
//         >
//           <div
//             style={{ display: "flex", flexDirection: "column", width: "70%" }}
//           >
//             {/* Category */}
//             <div
//               style={{
//                 display: "flex",
//                 width: "81%",
//                 marginBottom: "20px",
//                 overflowX: "auto",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
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
//                     textAlign: "center",
//                     flexShrink: 0,
//                   }}
//                   onClick={() => setSelectedCategory(category.name)}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
//                     alt={category.name}
//                     style={{
//                       width: "60px",
//                       height: "60px",
//                       marginBottom: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div>{category.name}</div>
//                 </div>
//               ))}
//             </div>
//             {/* End of Category */}
//             {/* Product */}
//             <div
//               style={{
//                 width: "100%",
//                 overflowY: "scroll",
//                 height: "80vh",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
//                 {products
//                   .filter(
//                     (product) => product.category.name === selectedCategory
//                   )
//                   .map((product, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         width: "25%",
//                         backgroundColor: "#FFFFFF",
//                         padding: "10px",
//                         borderRadius: "5px",
//                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                         textAlign: "center",
//                         cursor: "pointer",
//                       }}
//                       onClick={() => addToOrder(product)}
//                     >
//                       <img
//                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
//                         alt={product.name}
//                         style={{
//                           width: "100%",
//                           height: "100px",
//                           objectFit: "cover",
//                           borderRadius: "5px",
//                           marginBottom: "10px",
//                         }}
//                       />
//                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
//                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
//                         $
//                         {product.selling_price
//                           ? parseFloat(product.selling_price).toFixed(2)
//                           : ""}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//           {/* End of Product */}
//           {/* New Order */}
//           <div
//             style={{
//               width: "40%",
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2
//               style={{
//                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
//                 padding: "15px",
//                 color: "white",
//                 borderRadius: "5px 5px 0 0",
//                 margin: "-20px -20px 10px",
//               }}
//             >
//               New Order
//             </h2>
//             <p style={{ margin: "0 0 20px", color: "#777" }}>{currentDate}</p>
//             <div>
//               {order.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
//                     alt={item.name}
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       marginRight: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       fontSize: "12px",
//                     }}
//                   >
//                     <span>{item.name}</span>
//                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <button
//                       onClick={() => handleQuantityChange(index, -1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange(index, 1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     <span>
//                       {(item.quantity * item.selling_price).toFixed(2)}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => removeFromOrder(index)}
//                     style={{
//                       backgroundColor: "#ff4d4f",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       width: "25px",
//                       height: "25px",
//                       marginLeft: "10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     &#128465;
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div style={{ marginTop: "20px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Subtotal</span>
//                 <span>${calculateSubtotal()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <label htmlFor="discount">Discount</label>
//                 <select
//                   id="discount"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
//                   style={{
//                     backgroundColor: "#FFFFFF",
//                     border: "1px solid #DDD",
//                     borderRadius: "5px",
//                     padding: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <option value={0}>0%</option>
//                   <option value={0.05}>5%</option>
//                   <option value={0.1}>10%</option>
//                   <option value={0.15}>15%</option>
//                   <option value={0.2}>20%</option>
//                   <option value={0.25}>25%</option>
//                   <option value={0.3}>30%</option>
//                 </select>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Discount</span>
//                 <span>-${calculateDiscount()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <span>Total</span>
//                 <span>${calculateTotal()}</span>
//               </div>
//             </div>
//             <button
//               onClick={order.length > 0 ? handlePlaceOrder : null}
//               disabled={order.length === 0}
//               style={{
//                 width: "100%",
//                 backgroundColor: order.length > 0 ? "#ff6347" : "#ccc",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: order.length > 0 ? "pointer" : "not-allowed",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Place Order ${calculateTotal()}
//             </button>
//           </div>
//           {/* End of New Order */}
//         </main>
//       </div>

//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//               width: "400px",
//             }}
//           >
//             <h2>Payment Method</h2>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 marginBottom: "20px",
//               }}
//             >
//               <div
//                 onClick={() => handlePaymentMethodSelect("Cash")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Cash"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Cash}
//                   alt="Cash"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Cash</div>
//               </div>
//               <div
//                 onClick={() => handlePaymentMethodSelect("Bank")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Bank"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Commerce}
//                   alt="Bank"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Bank</div>
//               </div>
//             </div>

//             {(selectedPaymentMethod === "Cash" ||
//               selectedPaymentMethod === "Bank") && (
//               <div style={{ marginBottom: "20px" }}>
//                 <div style={{ marginBottom: "10px" }}>
//                   <label htmlFor="currency">Currency</label>
//                   <select
//                     id="currency"
//                     value={currency}
//                     onChange={(e) => setCurrency(e.target.value)}
//                     style={{
//                       backgroundColor: "#FFFFFF",
//                       border: "1px solid #DDD",
//                       borderRadius: "5px",
//                       padding: "5px",
//                       cursor: "pointer",
//                       marginLeft: "10px",
//                     }}
//                   >
//                     <option value="USD">USD</option>
//                     <option value="KH">KH</option>
//                   </select>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   {selectedPaymentMethod === "Bank" && (
//                     <img
//                       src={currency === "USD" ? QRdollar : QRriel}
//                       alt={currency}
//                       style={{ width: "160px", marginRight: "10px" }}
//                     />
//                   )}
//                   <span>Total: </span>
//                   <span>
//                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={handleConfirmPayment}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#ff6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Confirm Payment
//             </button>
//             <button
//               onClick={handleModalClose}
//               style={{
//                 width: "100%",
//                 marginTop: "10px",
//                 backgroundColor: "#ccc",
//                 color: "#000",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;

// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useStateContext } from "../../context/ContextProvider";
// import axiosClient from "../../axios-client";
// import QRdollar from "../../assets/image/QRdollar.png";
// import QRriel from "../../assets/image/QRriel.png";
// import Commerce from "../../assets/image/Commerce.png";
// import Cash from "../../assets/image/Cash.png";

// const Order = () => {
//   const { user, token } = useStateContext();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [order, setOrder] = useState([]);
//   const [discount, setDiscount] = useState(0); // Default to 0%
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   const [currency, setCurrency] = useState("USD");

//   useEffect(() => {
//     if (token) {
//       axiosClient.get("/categories").then(({ data }) => {
//         setCategories(data);
//         setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
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

//   const addToOrder = (product) => {
//     const existingProductIndex = order.findIndex(
//       (item) => item.id === product.id
//     );
//     if (existingProductIndex >= 0) {
//       const newOrder = [...order];
//       newOrder[existingProductIndex].quantity += 1;
//       setOrder(newOrder);
//     } else {
//       setOrder([...order, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromOrder = (index) => {
//     const newOrder = [...order];
//     newOrder.splice(index, 1);
//     setOrder(newOrder);
//   };

//   const calculateTotal = () => {
//     const subtotal = order.reduce(
//       (total, item) =>
//         total + parseFloat(item.selling_price || 0) * item.quantity,
//       0
//     );
//     const discountAmount = subtotal * discount;
//     return (subtotal - discountAmount).toFixed(2);
//   };

//   const calculateSubtotal = () => {
//     return order
//       .reduce(
//         (subtotal, item) =>
//           subtotal + parseFloat(item.selling_price || 0) * item.quantity,
//         0
//       )
//       .toFixed(2);
//   };

//   const calculateDiscount = () => {
//     const subtotal = parseFloat(calculateSubtotal());
//     return (subtotal * discount).toFixed(2);
//   };

//   const handleQuantityChange = (index, increment) => {
//     const newOrder = [...order];
//     newOrder[index].quantity += increment;
//     if (newOrder[index].quantity < 1) {
//       newOrder[index].quantity = 1;
//     }
//     setOrder(newOrder);
//   };

//   const handlePlaceOrder = () => {
//     setIsModalOpen(true);
//   };

//   const handlePaymentMethodSelect = (method) => {
//     setSelectedPaymentMethod(method);
//     setCurrency("USD"); // Reset currency to USD when selecting a new payment method
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedPaymentMethod("");
//     setCurrency("USD");
//   };

//   const handleConfirmPayment = () => {
//     if (!selectedPaymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     const orderData = {
//       user_id: user.id,
//       order_items: JSON.stringify(order),
//       total: calculateTotal(),
//       payment_method: selectedPaymentMethod,
//       currency: currency,
//     };

//     axiosClient
//       .post("/orders", orderData)
//       .then((response) => {
//         console.log(response.data);
//         setOrder([]); // Clear the order after confirming payment
//         handleModalClose();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const getTotalInCurrency = () => {
//     const total = parseFloat(calculateTotal());
//     if (currency === "KH") {
//       return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
//     }
//     return total;
//   };

//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
//       <div
//         className="content"
//         style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
//       >
//         <header
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>Menu Category</div>
//         </header>
//         <main
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexDirection: "row",
//           }}
//         >
//           <div
//             style={{ display: "flex", flexDirection: "column", width: "70%" }}
//           >
//             {/* Category */}
//             <div
//               style={{
//                 display: "flex",
//                 width: "81%",
//                 marginBottom: "20px",
//                 overflowX: "auto",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
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
//                     textAlign: "center",
//                     flexShrink: 0,
//                   }}
//                   onClick={() => setSelectedCategory(category.name)}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
//                     alt={category.name}
//                     style={{
//                       width: "60px",
//                       height: "60px",
//                       marginBottom: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div>{category.name}</div>
//                 </div>
//               ))}
//             </div>
//             {/* End of Category */}
//             {/* Product */}
//             <div
//               style={{
//                 width: "100%",
//                 overflowY: "scroll",
//                 height: "80vh",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
//                 {products
//                   .filter(
//                     (product) => product.category.name === selectedCategory
//                   )
//                   .map((product, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         width: "25%",
//                         backgroundColor: "#FFFFFF",
//                         padding: "10px",
//                         borderRadius: "5px",
//                         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                         textAlign: "center",
//                         cursor: product.stock > 0 ? "pointer" : "not-allowed",
//                         filter: product.stock > 0 ? "none" : "grayscale(100%)",
//                       }}
//                       onClick={
//                         product.stock > 0 ? () => addToOrder(product) : null
//                       }
//                     >
//                       <img
//                         src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
//                         alt={product.name}
//                         style={{
//                           width: "100%",
//                           height: "100px",
//                           objectFit: "cover",
//                           borderRadius: "5px",
//                           marginBottom: "10px",
//                         }}
//                       />
//                       <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
//                       <p style={{ fontSize: "15px", fontWeight: "bold" }}>
//                         $
//                         {product.selling_price
//                           ? parseFloat(product.selling_price).toFixed(2)
//                           : ""}
//                       </p>
//                       <p style={{ color: product.stock > 0 ? "black" : "red" }}>
//                         {product.stock > 0
//                           ? `${product.stock} in stock`
//                           : "Out of stock"}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//           {/* End of Product */}
//           {/* New Order */}
//           <div
//             style={{
//               width: "40%",
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2
//               style={{
//                 background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
//                 padding: "15px",
//                 color: "white",
//                 borderRadius: "5px 5px 0 0",
//                 margin: "-20px -20px 10px",
//               }}
//             >
//               New Order
//             </h2>
//             <p style={{ margin: "0 0 20px", color: "#777" }}>{currentDate}</p>
//             <div>
//               {order.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
//                     alt={item.name}
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       marginRight: "10px",
//                       borderRadius: "5px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       fontSize: "12px",
//                     }}
//                   >
//                     <span>{item.name}</span>
//                     <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <button
//                       onClick={() => handleQuantityChange(index, -1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange(index, 1)}
//                       style={{
//                         backgroundColor: "#ff7e5f",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         width: "25px",
//                         height: "25px",
//                         margin: "0 5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     <span>
//                       {(item.quantity * item.selling_price).toFixed(2)}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => removeFromOrder(index)}
//                     style={{
//                       backgroundColor: "#ff4d4f",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       width: "25px",
//                       height: "25px",
//                       marginLeft: "10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     &#128465;
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div style={{ marginTop: "20px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Subtotal</span>
//                 <span>${calculateSubtotal()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <label htmlFor="discount">Discount</label>
//                 <select
//                   id="discount"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
//                   style={{
//                     backgroundColor: "#FFFFFF",
//                     border: "1px solid #DDD",
//                     borderRadius: "5px",
//                     padding: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <option value={0}>0%</option>
//                   <option value={0.05}>5%</option>
//                   <option value={0.1}>10%</option>
//                   <option value={0.15}>15%</option>
//                   <option value={0.2}>20%</option>
//                   <option value={0.25}>25%</option>
//                   <option value={0.3}>30%</option>
//                 </select>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <span>Discount</span>
//                 <span>-${calculateDiscount()}</span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <span>Total</span>
//                 <span>${calculateTotal()}</span>
//               </div>
//             </div>
//             <button
//               onClick={order.length > 0 ? handlePlaceOrder : null}
//               disabled={order.length === 0}
//               style={{
//                 width: "100%",
//                 backgroundColor: order.length > 0 ? "#ff6347" : "#ccc",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: order.length > 0 ? "pointer" : "not-allowed",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Place Order ${calculateTotal()}
//             </button>
//           </div>
//           {/* End of New Order */}
//         </main>
//       </div>

//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#FFFFFF",
//               padding: "20px",
//               borderRadius: "5px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//               width: "400px",
//             }}
//           >
//             <h2>Payment Method</h2>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 marginBottom: "20px",
//               }}
//             >
//               <div
//                 onClick={() => handlePaymentMethodSelect("Cash")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Cash"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Cash}
//                   alt="Cash"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Cash</div>
//               </div>
//               <div
//                 onClick={() => handlePaymentMethodSelect("Bank")}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   border:
//                     selectedPaymentMethod === "Bank"
//                       ? "2px solid #000"
//                       : "2px solid #ddd",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={Commerce}
//                   alt="Bank"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <div>Bank</div>
//               </div>
//             </div>

//             {(selectedPaymentMethod === "Cash" ||
//               selectedPaymentMethod === "Bank") && (
//               <div style={{ marginBottom: "20px" }}>
//                 <div style={{ marginBottom: "10px" }}>
//                   <label htmlFor="currency">Currency</label>
//                   <select
//                     id="currency"
//                     value={currency}
//                     onChange={(e) => setCurrency(e.target.value)}
//                     style={{
//                       backgroundColor: "#FFFFFF",
//                       border: "1px solid #DDD",
//                       borderRadius: "5px",
//                       padding: "5px",
//                       cursor: "pointer",
//                       marginLeft: "10px",
//                     }}
//                   >
//                     <option value="USD">USD</option>
//                     <option value="KH">KH</option>
//                   </select>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   {selectedPaymentMethod === "Bank" && (
//                     <img
//                       src={currency === "USD" ? QRdollar : QRriel}
//                       alt={currency}
//                       style={{ width: "160px", marginRight: "10px" }}
//                     />
//                   )}
//                   <span>Total: </span>
//                   <span>
//                     {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={handleConfirmPayment}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#ff6347",
//                 color: "#FFFFFF",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Confirm Payment
//             </button>
//             <button
//               onClick={handleModalClose}
//               style={{
//                 width: "100%",
//                 marginTop: "10px",
//                 backgroundColor: "#ccc",
//                 color: "#000",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 border: "none",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";
import QRdollar from "../../assets/image/QRdollar.png";
import QRriel from "../../assets/image/QRriel.png";
import Commerce from "../../assets/image/Commerce.png";
import Cash from "../../assets/image/Cash.png";

const Order = () => {
  const { user, token } = useStateContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [discount, setDiscount] = useState(0); // Default to 0%
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    if (token) {
      fetchCategories();
      fetchProducts();
    }
  }, [token]);

  const fetchCategories = () => {
    axiosClient.get("/categories").then(({ data }) => {
      setCategories(data);
      setSelectedCategory(data[0]?.name || ""); // Automatically select the first category
    });
  };

  const fetchProducts = () => {
    axiosClient.get("/products").then(({ data }) => {
      setProducts(data);
    });
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "staff") {
    return <Navigate to="/login" />;
  }

  const addToOrder = (product) => {
    const existingProductIndex = order.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex >= 0) {
      if (order[existingProductIndex].quantity < product.stock) {
        const newOrder = [...order];
        newOrder[existingProductIndex].quantity += 1;
        setOrder(newOrder);
      } else {
        alert(`Only ${product.stock} of ${product.name} available in stock.`);
      }
    } else {
      if (product.stock > 0) {
        setOrder([...order, { ...product, quantity: 1 }]);
      } else {
        alert(`${product.name} is out of stock.`);
      }
    }
  };

  const removeFromOrder = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const calculateTotal = () => {
    const subtotal = order.reduce(
      (total, item) =>
        total + parseFloat(item.selling_price || 0) * item.quantity,
      0
    );
    const discountAmount = subtotal * discount;
    return (subtotal - discountAmount).toFixed(2);
  };

  const calculateSubtotal = () => {
    return order
      .reduce(
        (subtotal, item) =>
          subtotal + parseFloat(item.selling_price || 0) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateDiscount = () => {
    const subtotal = parseFloat(calculateSubtotal());
    return (subtotal * discount).toFixed(2);
  };

  const handleQuantityChange = (index, increment) => {
    const newOrder = [...order];
    const product = products.find((p) => p.id === newOrder[index].id);
    if (newOrder[index].quantity + increment > product.stock) {
      alert(`Only ${product.stock} of ${product.name} available in stock.`);
      return;
    }
    newOrder[index].quantity += increment;
    if (newOrder[index].quantity < 1) {
      newOrder[index].quantity = 1;
    }
    setOrder(newOrder);
  };

  const handlePlaceOrder = () => {
    setIsModalOpen(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setCurrency("USD"); // Reset currency to USD when selecting a new payment method
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPaymentMethod("");
    setCurrency("USD");
  };

  const handleConfirmPayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const orderData = {
      user_id: user.id,
      order_items: JSON.stringify(order),
      total: calculateTotal(),
      payment_method: selectedPaymentMethod,
      currency: currency,
    };

    axiosClient
      .post("/orders", orderData)
      .then((response) => {
        console.log(response.data);
        setOrder([]); // Clear the order after confirming payment
        handleModalClose();
        fetchProducts(); // Refresh products list
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getTotalInCurrency = () => {
    const total = parseFloat(calculateTotal());
    if (currency === "KH") {
      return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
    }
    return total;
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div id="roleStaffLayout" style={{ display: "flex", height: "100vh" }}>
      <div
        className="content"
        style={{ width: "100%", padding: "10px", backgroundColor: "#F5F5F5" }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div>Menu Category</div>
        </header>
        <main
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "70%" }}
          >
            {/* Category */}
            <div
              style={{
                display: "flex",
                width: "81%",
                marginBottom: "20px",
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  style={{
                    marginRight: "10px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedCategory === category.name
                        ? "#FFD700"
                        : "#FFFFFF",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <img
                    src={`http://localhost:8000/storage/${category.image}`} // Ensure the URL matches your backend's served path
                    alt={category.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "10px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                  <div>{category.name}</div>
                </div>
              ))}
            </div>
            {/* End of Category */}
            {/* Product */}
            <div
              style={{
                width: "100%",
                overflowY: "scroll",
                height: "80vh",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                {products
                  .filter(
                    (product) => product.category.name === selectedCategory
                  )
                  .map((product, index) => (
                    <div
                      key={index}
                      style={{
                        width: "25%",
                        backgroundColor:
                          product.stock === 0 ? "#ddd" : "#FFFFFF",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        textAlign: "center",
                        cursor: product.stock === 0 ? "not-allowed" : "pointer",
                      }}
                      onClick={() =>
                        product.stock > 0 ? addToOrder(product) : null
                      }
                    >
                      <img
                        src={`http://localhost:8000/storage/${product.image}`} // Ensure the URL matches your backend's served path
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "5px",
                          marginBottom: "10px",
                          filter:
                            product.stock === 0 ? "grayscale(100%)" : "none",
                        }}
                      />
                      <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        $
                        {product.selling_price
                          ? parseFloat(product.selling_price).toFixed(2)
                          : ""}
                      </p>
                      <p style={{ fontSize: "12px", color: "#777" }}>
                        Stock: {product.stock}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* End of Product */}
          {/* New Order */}
          <div
            style={{
              width: "40%",
              backgroundColor: "#FFFFFF",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                padding: "15px",
                color: "white",
                borderRadius: "5px 5px 0 0",
                margin: "-20px -20px 10px",
              }}
            >
              New Order
            </h2>
            <p style={{ margin: "0 0 20px", color: "#777" }}>{currentDate}</p>
            <div>
              {order.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`http://localhost:8000/storage/${item.image}`} // Ensure the URL matches your backend's served path
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "12px",
                    }}
                  >
                    <span>{item.name}</span>
                    <span>$ {parseFloat(item.selling_price).toFixed(2)}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      style={{
                        backgroundColor: "#ff7e5f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        width: "25px",
                        height: "25px",
                        margin: "0 5px",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      style={{
                        backgroundColor: "#ff7e5f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        width: "25px",
                        height: "25px",
                        margin: "0 5px",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <span>
                      {(item.quantity * item.selling_price).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromOrder(index)}
                    style={{
                      backgroundColor: "#ff4d4f",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      width: "25px",
                      height: "25px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    &#128465;
                  </button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>Subtotal</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <label htmlFor="discount">Discount</label>
                <select
                  id="discount"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value))}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #DDD",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <option value={0}>0%</option>
                  <option value={0.05}>5%</option>
                  <option value={0.1}>10%</option>
                  <option value={0.15}>15%</option>
                  <option value={0.2}>20%</option>
                  <option value={0.25}>25%</option>
                  <option value={0.3}>30%</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>Discount</span>
                <span>-${calculateDiscount()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
            <button
              onClick={order.length > 0 ? handlePlaceOrder : null}
              disabled={order.length === 0}
              style={{
                width: "100%",
                backgroundColor: order.length > 0 ? "#ff6347" : "#ccc",
                color: "#FFFFFF",
                padding: "10px",
                borderRadius: "5px",
                cursor: order.length > 0 ? "pointer" : "not-allowed",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Place Order ${calculateTotal()}
            </button>
          </div>
          {/* End of New Order */}
        </main>
      </div>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width: "400px",
            }}
          >
            <h2>Payment Method</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}
            >
              <div
                onClick={() => handlePaymentMethodSelect("Cash")}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    selectedPaymentMethod === "Cash"
                      ? "2px solid #000"
                      : "2px solid #ddd",
                  textAlign: "center",
                }}
              >
                <img
                  src={Cash}
                  alt="Cash"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>Cash</div>
              </div>
              <div
                onClick={() => handlePaymentMethodSelect("Bank")}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    selectedPaymentMethod === "Bank"
                      ? "2px solid #000"
                      : "2px solid #ddd",
                  textAlign: "center",
                }}
              >
                <img
                  src={Commerce}
                  alt="Bank"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>Bank</div>
              </div>
            </div>

            {(selectedPaymentMethod === "Cash" ||
              selectedPaymentMethod === "Bank") && (
              <div style={{ marginBottom: "20px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="currency">Currency</label>
                  <select
                    id="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #DDD",
                      borderRadius: "5px",
                      padding: "5px",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    <option value="USD">USD</option>
                    <option value="KH">KH</option>
                  </select>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {selectedPaymentMethod === "Bank" && (
                    <img
                      src={currency === "USD" ? QRdollar : QRriel}
                      alt={currency}
                      style={{ width: "160px", marginRight: "10px" }}
                    />
                  )}
                  <span>Total: </span>
                  <span>
                    {currency === "USD" ? "$" : "៛"} {getTotalInCurrency()}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={handleConfirmPayment}
              style={{
                width: "100%",
                backgroundColor: "#ff6347",
                color: "#FFFFFF",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Confirm Payment
            </button>
            <button
              onClick={handleModalClose}
              style={{
                width: "100%",
                marginTop: "10px",
                backgroundColor: "#ccc",
                color: "#000",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
