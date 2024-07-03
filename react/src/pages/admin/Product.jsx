// import React, { useState, useEffect } from "react";
// import JsBarcode from "jsbarcode";
// import {
//   CirclePlus,
//   Save,
//   CircleArrowLeft,
//   X,
//   PencilLine,
//   Printer,
// } from "lucide-react";
// import Trash from "../../assets/image/Trash.png";
// import Pencil from "../../assets/image/Pencil.png";
// import axiosClient from "../../axios-client.js";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formValues, setFormValues] = useState({
//     id: "",
//     code: "",
//     name: "",
//     category_id: "",
//     brand: "",
//     purchase_price: "",
//     selling_price: "",
//     discount: "",
//     stock: "",
//     image: null,
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/categories").then(({ data }) => {
//       setCategories(data);
//     });
//     axiosClient.get("/products").then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);

//   const handleAddProductClick = () => {
//     setShowForm(true);
//     setEditMode(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//   };

//   const generateBarcode = (productCode) => {
//     const canvas = document.createElement("canvas");
//     JsBarcode(canvas, productCode, { format: "CODE128" });
//     return canvas.toDataURL("image/png");
//   };

//   const handleAddClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post("/products", formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err.response.data);
//           alert("Error adding product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleUpdateClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post(`/products/${editProductId}?_method=PUT`, formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setEditProductId(null);
//           setEditMode(false);
//         })
//         .catch((err) => {
//           console.error("Error updating product:", err.response.data);
//           alert("Error updating product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setFormValues({ ...product, image: null });
//     setShowForm(true);
//   };

//   const handleRemoveClick = (id) => {
//     if (window.confirm("Do you want to delete it?")) {
//       axiosClient
//         .delete(`/products/${id}`)
//         .then(() => {
//           const updatedProducts = products.filter(
//             (product) => product.id !== id
//           );
//           setProducts(updatedProducts);
//         })
//         .catch((err) => {
//           console.error("Error deleting product:", err.response.data);
//           alert("Error deleting product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleDeleteSelected = () => {
//     if (window.confirm("Do you want to delete the selected products?")) {
//       selectedProducts.forEach((id) => handleRemoveClick(id));
//       setSelectedProducts([]);
//     }
//   };

//   const handlePrintSelectedBarcodes = () => {
//     selectedProducts.forEach((id) => {
//       const product = products.find((product) => product.id === id);
//       if (product) {
//         handlePrintBarcode(product);
//       }
//     });
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   const getPageButtons = () => {
//     const buttons = [];
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + 2);

//     if (currentPage === 1) {
//       endPage = Math.min(totalPages, 3);
//     } else if (currentPage === totalPages) {
//       startPage = Math.max(1, totalPages - 2);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           style={{
//             backgroundColor: i === currentPage ? "#758BFF" : "white",
//             color: "black",
//             height: "30px",
//             fontSize: "14px",
//             border: "solid 1px #BCBCBC",
//             borderLeft: "0px solid #BCBCBC",
//             borderTopRightRadius: "0px",
//             borderTopLeftRadius: "0px",
//             borderStartEndRadius: "0px",
//             borderBottomLeftRadius: "0px",
//             borderBottomRightRadius: "0px",
//           }}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const handlePrintBarcode = (product) => {
//     const printWindow = window.open("", "PRINT", "height=400,width=600");
//     printWindow.document.write("<html><head><title>Product Barcode</title>");
//     printWindow.document.write("</head><body>");
//     printWindow.document.write(`<h1>Barcode for ${product.name}</h1>`);
//     printWindow.document.write(
//       `<img src="${product.barcode}" alt="Barcode for ${product.name}" />`
//     );
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedProducts((prevSelectedProducts) =>
//       prevSelectedProducts.includes(id)
//         ? prevSelectedProducts.filter((productId) => productId !== id)
//         : [...prevSelectedProducts, id]
//     );
//   };

//   const handleSelectAllChange = () => {
//     if (selectedProducts.length === paginatedProducts.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(paginatedProducts.map((product) => product.id));
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <h1>Product</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button
//             onClick={handleAddProductClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#38B000",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <CirclePlus size={20} color="white" />
//             Add New Product
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF4F4F",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <img
//               src={Trash}
//               alt="Trash"
//               style={{ width: "16px", height: "16px" }}
//             />
//             Delete
//           </button>
//           <button
//             onClick={handlePrintSelectedBarcodes}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF9100",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <Printer size={20} color="white" />
//             Print Barcode
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               backdropFilter: "blur(1px)",
//               zIndex: 999,
//             }}
//           >
//             <div
//               style={{
//                 position: "fixed",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 1000,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div
//                 className="form-container"
//                 style={{
//                   width: "600px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
//                   <X
//                     color="#538392"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleCancelClick}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Code:
//                     <input
//                       type="text"
//                       value={formValues.code}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, code: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Name:
//                     <input
//                       type="text"
//                       value={formValues.name}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, name: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Category:
//                     <select
//                       value={formValues.category_id}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           category_id: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Purchase Price:
//                     <input
//                       type="number"
//                       value={formValues.purchase_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           purchase_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Discount:
//                     <input
//                       type="number"
//                       value={formValues.discount}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           discount: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           image: e.target.files[0],
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "10px",
//                     }}
//                   >
//                     {editMode ? (
//                       <button
//                         onClick={handleUpdateClick}
//                         style={{
//                           width: "88px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <PencilLine size={15} /> Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={handleAddClick}
//                         style={{
//                           width: "78px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <Save size={15} color="white" />
//                         Save
//                       </button>
//                     )}
//                     <button
//                       onClick={handleCancelClick}
//                       style={{
//                         width: "90px",
//                         height: "33px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "4px",
//                         fontSize: "12px",
//                         backgroundColor: "#FF4F4F",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <CircleArrowLeft size={15} color="white" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div style={{ margin: "20px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label style={{ fontSize: "15px" }}>
//             Show
//             <select
//               value={itemsPerPage}
//               onChange={handleItemsPerPageChange}
//               style={{
//                 marginLeft: "5px",
//                 marginRight: "5px",
//                 width: "67px",
//                 height: "27px",
//                 paddingLeft: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               <option value={3}>3</option>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//             entries
//           </label>
//           <div style={{ fontSize: "15px" }}>
//             Search:
//             <input
//               style={{
//                 width: "147px",
//                 height: "29px",
//                 padding: "5px",
//                 marginLeft: "5px",
//               }}
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAllChange}
//                   checked={selectedProducts.length === paginatedProducts.length}
//                 />
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Category
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Brand
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Purchase Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Selling Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Discount
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Stock
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedProducts.map((product, index) => (
//               <tr key={product.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <input
//                     type="checkbox"
//                     checked={selectedProducts.includes(product.id)}
//                     onChange={() => handleCheckboxChange(product.id)}
//                   />
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {(currentPage - 1) * itemsPerPage + index + 1}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.code}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.category ? product.category.name : ""}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.brand}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.purchase_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.selling_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.discount}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.stock}
//                 </td>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     display: "flex",
//                     gap: "5px",
//                   }}
//                 >
//                   <button
//                     onClick={() => handleEditClick(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4557F7",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Pencil}
//                       alt="Pencil"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handleRemoveClick(product.id)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#FF0505",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Trash}
//                       alt="Trash"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handlePrintBarcode(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4CAF50",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <Printer size={16} color="white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ fontSize: "14px" }}>
//             Showing page {currentPage} of {totalPages} (
//             {filteredProducts.length} entries)
//           </div>
//           <div>
//             <button
//               onClick={handleFirstPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "5px 0 0 5px",
//                 borderRight: "0px",
//               }}
//             >
//               {"<<"}
//             </button>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRight: "0px",
//               }}
//             >
//               Previous
//             </button>
//             {getPageButtons()}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderLeft: "0px",
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={handleLastPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "0 5px 5px 0",
//                 borderLeft: "0px",
//               }}
//             >
//               {">>"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// code is good

// import React, { useState, useEffect } from "react";
// import JsBarcode from "jsbarcode";
// import {
//   CirclePlus,
//   Save,
//   CircleArrowLeft,
//   X,
//   PencilLine,
//   Printer,
// } from "lucide-react";
// import Trash from "../../assets/image/Trash.png";
// import Pencil from "../../assets/image/Pencil.png";
// import axiosClient from "../../axios-client.js";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formValues, setFormValues] = useState({
//     id: "",
//     code: "",
//     name: "",
//     category_id: "",
//     brand: "",
//     purchase_price: "",
//     selling_price: "",
//     discount: "",
//     stock: "",
//     image: null,
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/categories").then(({ data }) => {
//       setCategories(data);
//     });
//     axiosClient.get("/products").then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);

//   const handleAddProductClick = () => {
//     setShowForm(true);
//     setEditMode(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//   };

//   const generateBarcode = (productCode) => {
//     const canvas = document.createElement("canvas");
//     JsBarcode(canvas, productCode, { format: "CODE128" });
//     return canvas.toDataURL("image/png");
//   };

//   const handleAddClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post("/products", formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err.response.data);
//           alert("Error adding product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleUpdateClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post(`/products/${editProductId}?_method=PUT`, formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setEditProductId(null);
//           setEditMode(false);
//         })
//         .catch((err) => {
//           console.error("Error updating product:", err.response.data);
//           alert("Error updating product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setFormValues({ ...product, image: null });
//     setShowForm(true);
//   };

//   const handleRemoveClick = (id) => {
//     if (window.confirm("Do you want to delete it?")) {
//       axiosClient
//         .delete(`/products/${id}`)
//         .then(() => {
//           const updatedProducts = products.filter(
//             (product) => product.id !== id
//           );
//           setProducts(updatedProducts);
//         })
//         .catch((err) => {
//           console.error("Error deleting product:", err.response.data);
//           alert("Error deleting product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleDeleteSelected = () => {
//     if (window.confirm("Do you want to delete the selected products?")) {
//       selectedProducts.forEach((id) => handleRemoveClick(id));
//       setSelectedProducts([]);
//     }
//   };

//   const handlePrintSelectedBarcodes = () => {
//     selectedProducts.forEach((id) => {
//       const product = products.find((product) => product.id === id);
//       if (product) {
//         handlePrintBarcode(product);
//       }
//     });
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   const getPageButtons = () => {
//     const buttons = [];
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + 2);

//     if (currentPage === 1) {
//       endPage = Math.min(totalPages, 3);
//     } else if (currentPage === totalPages) {
//       startPage = Math.max(1, totalPages - 2);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           style={{
//             backgroundColor: i === currentPage ? "#758BFF" : "white",
//             color: "black",
//             height: "30px",
//             fontSize: "14px",
//             border: "solid 1px #BCBCBC",
//             borderLeft: "0px solid #BCBCBC",
//             borderTopRightRadius: "0px",
//             borderTopLeftRadius: "0px",
//             borderStartEndRadius: "0px",
//             borderBottomLeftRadius: "0px",
//             borderBottomRightRadius: "0px",
//           }}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const handlePrintBarcode = (product) => {
//     const barcode = generateBarcode(product.code);
//     const printWindow = window.open("", "PRINT", "height=400,width=600");
//     printWindow.document.write("<html><head><title>Product Barcode</title>");
//     printWindow.document.write("</head><body style='text-align: center;'>");
//     printWindow.document.write(
//       `<div style="margin-top: 20px;">
//         <div style="font-size: 18px; margin-bottom: 10px;">
//           ${product.name} - $${product.selling_price}
//         </div>
//         <div>
//           <img src="${barcode}" alt="Barcode for ${product.name}" />
//         </div>

//       </div>`
//     );
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedProducts((prevSelectedProducts) =>
//       prevSelectedProducts.includes(id)
//         ? prevSelectedProducts.filter((productId) => productId !== id)
//         : [...prevSelectedProducts, id]
//     );
//   };

//   const handleSelectAllChange = () => {
//     if (selectedProducts.length === paginatedProducts.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(paginatedProducts.map((product) => product.id));
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <h1>Product</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button
//             onClick={handleAddProductClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#38B000",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <CirclePlus size={20} color="white" />
//             Add New Product
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF4F4F",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <img
//               src={Trash}
//               alt="Trash"
//               style={{ width: "16px", height: "16px" }}
//             />
//             Delete
//           </button>
//           <button
//             onClick={handlePrintSelectedBarcodes}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF9100",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <Printer size={20} color="white" />
//             Print Barcode
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               backdropFilter: "blur(1px)",
//               zIndex: 999,
//             }}
//           >
//             <div
//               style={{
//                 position: "fixed",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 1000,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div
//                 className="form-container"
//                 style={{
//                   width: "600px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
//                   <X
//                     color="#538392"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleCancelClick}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Code:
//                     <input
//                       type="text"
//                       value={formValues.code}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, code: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Name:
//                     <input
//                       type="text"
//                       value={formValues.name}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, name: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Category:
//                     <select
//                       value={formValues.category_id}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           category_id: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Purchase Price:
//                     <input
//                       type="number"
//                       value={formValues.purchase_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           purchase_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Discount:
//                     <input
//                       type="number"
//                       value={formValues.discount}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           discount: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           image: e.target.files[0],
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "10px",
//                     }}
//                   >
//                     {editMode ? (
//                       <button
//                         onClick={handleUpdateClick}
//                         style={{
//                           width: "88px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <PencilLine size={15} /> Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={handleAddClick}
//                         style={{
//                           width: "78px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <Save size={15} color="white" />
//                         Save
//                       </button>
//                     )}
//                     <button
//                       onClick={handleCancelClick}
//                       style={{
//                         width: "90px",
//                         height: "33px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "4px",
//                         fontSize: "12px",
//                         backgroundColor: "#FF4F4F",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <CircleArrowLeft size={15} color="white" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div style={{ margin: "20px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label style={{ fontSize: "15px" }}>
//             Show
//             <select
//               value={itemsPerPage}
//               onChange={handleItemsPerPageChange}
//               style={{
//                 marginLeft: "5px",
//                 marginRight: "5px",
//                 width: "67px",
//                 height: "27px",
//                 paddingLeft: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               <option value={3}>3</option>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//             entries
//           </label>
//           <div style={{ fontSize: "15px" }}>
//             Search:
//             <input
//               style={{
//                 width: "147px",
//                 height: "29px",
//                 padding: "5px",
//                 marginLeft: "5px",
//               }}
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAllChange}
//                   checked={selectedProducts.length === paginatedProducts.length}
//                 />
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Category
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Brand
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Purchase Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Selling Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Discount
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Stock
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedProducts.map((product, index) => (
//               <tr key={product.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <input
//                     type="checkbox"
//                     checked={selectedProducts.includes(product.id)}
//                     onChange={() => handleCheckboxChange(product.id)}
//                   />
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {(currentPage - 1) * itemsPerPage + index + 1}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.code}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.category ? product.category.name : ""}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.brand}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.purchase_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.selling_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.discount}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.stock}
//                 </td>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     display: "flex",
//                     gap: "5px",
//                   }}
//                 >
//                   <button
//                     onClick={() => handleEditClick(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4557F7",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Pencil}
//                       alt="Pencil"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handleRemoveClick(product.id)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#FF0505",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Trash}
//                       alt="Trash"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handlePrintBarcode(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4CAF50",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <Printer size={16} color="white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ fontSize: "14px" }}>
//             Showing page {currentPage} of {totalPages} (
//             {filteredProducts.length} entries)
//           </div>
//           <div>
//             <button
//               onClick={handleFirstPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "5px 0 0 5px",
//                 borderRight: "0px",
//               }}
//             >
//               {"<<"}
//             </button>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRight: "0px",
//               }}
//             >
//               Previous
//             </button>
//             {getPageButtons()}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderLeft: "0px",
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={handleLastPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "0 5px 5px 0",
//                 borderLeft: "0px",
//               }}
//             >
//               {">>"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// upload have image show
// import React, { useState, useEffect } from "react";
// import JsBarcode from "jsbarcode";
// import {
//   CirclePlus,
//   Save,
//   CircleArrowLeft,
//   X,
//   PencilLine,
//   Printer,
// } from "lucide-react";
// import Trash from "../../assets/image/Trash.png";
// import Pencil from "../../assets/image/Pencil.png";
// import axiosClient from "../../axios-client.js";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formValues, setFormValues] = useState({
//     id: "",
//     code: "",
//     name: "",
//     category_id: "",
//     brand: "",
//     purchase_price: "",
//     selling_price: "",
//     discount: "",
//     stock: "",
//     image: null,
//   });
//   const [imagePreview, setImagePreview] = useState(null); // State for image preview
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/categories").then(({ data }) => {
//       setCategories(data);
//     });
//     axiosClient.get("/products").then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);

//   const handleAddProductClick = () => {
//     setShowForm(true);
//     setEditMode(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null); // Reset image preview when adding a new product
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null); // Reset image preview when canceling
//   };

//   const generateBarcode = (productCode) => {
//     const canvas = document.createElement("canvas");
//     JsBarcode(canvas, productCode, { format: "CODE128" });
//     return canvas.toDataURL("image/png");
//   };

//   const handleAddClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post("/products", formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null); // Reset image preview after saving
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err.response.data);
//           alert("Error adding product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleUpdateClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post(`/products/${editProductId}?_method=PUT`, formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setEditProductId(null);
//           setEditMode(false);
//           setImagePreview(null); // Reset image preview after saving
//         })
//         .catch((err) => {
//           console.error("Error updating product:", err.response.data);
//           alert("Error updating product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setFormValues({ ...product, image: null });
//     setShowForm(true);
//     setImagePreview(product.image ? `/uploads/${product.image}` : null); // Set image preview when editing
//   };

//   const handleRemoveClick = (id) => {
//     if (window.confirm("Do you want to delete it?")) {
//       axiosClient
//         .delete(`/products/${id}`)
//         .then(() => {
//           const updatedProducts = products.filter(
//             (product) => product.id !== id
//           );
//           setProducts(updatedProducts);
//         })
//         .catch((err) => {
//           console.error("Error deleting product:", err.response.data);
//           alert("Error deleting product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleDeleteSelected = () => {
//     if (window.confirm("Do you want to delete the selected products?")) {
//       selectedProducts.forEach((id) => handleRemoveClick(id));
//       setSelectedProducts([]);
//     }
//   };

//   const handlePrintSelectedBarcodes = () => {
//     selectedProducts.forEach((id) => {
//       const product = products.find((product) => product.id === id);
//       if (product) {
//         handlePrintBarcode(product);
//       }
//     });
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   const getPageButtons = () => {
//     const buttons = [];
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + 2);

//     if (currentPage === 1) {
//       endPage = Math.min(totalPages, 3);
//     } else if (currentPage === totalPages) {
//       startPage = Math.max(1, totalPages - 2);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           style={{
//             backgroundColor: i === currentPage ? "#758BFF" : "white",
//             color: "black",
//             height: "30px",
//             fontSize: "14px",
//             border: "solid 1px #BCBCBC",
//             borderLeft: "0px solid #BCBCBC",
//             borderTopRightRadius: "0px",
//             borderTopLeftRadius: "0px",
//             borderStartEndRadius: "0px",
//             borderBottomLeftRadius: "0px",
//             borderBottomRightRadius: "0px",
//           }}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const handlePrintBarcode = (product) => {
//     const barcode = generateBarcode(product.code);
//     const printWindow = window.open("", "PRINT", "height=400,width=600");
//     printWindow.document.write("<html><head><title>Product Barcode</title>");
//     printWindow.document.write("</head><body style='text-align: center;'>");
//     printWindow.document.write(
//       `<div style="margin-top: 20px;">
//         <div style="font-size: 18px; margin-bottom: 10px;">
//           ${product.name} - $${product.selling_price}
//         </div>
//         <div>
//           <img src="${barcode}" alt="Barcode for ${product.name}" />
//         </div>

//       </div>`
//     );
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedProducts((prevSelectedProducts) =>
//       prevSelectedProducts.includes(id)
//         ? prevSelectedProducts.filter((productId) => productId !== id)
//         : [...prevSelectedProducts, id]
//     );
//   };

//   const handleSelectAllChange = () => {
//     if (selectedProducts.length === paginatedProducts.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(paginatedProducts.map((product) => product.id));
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormValues({ ...formValues, image: file });

//     // Generate image preview
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <h1>Product</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button
//             onClick={handleAddProductClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#38B000",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <CirclePlus size={20} color="white" />
//             Add New Product
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF4F4F",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <img
//               src={Trash}
//               alt="Trash"
//               style={{ width: "16px", height: "16px" }}
//             />
//             Delete
//           </button>
//           <button
//             onClick={handlePrintSelectedBarcodes}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF9100",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <Printer size={20} color="white" />
//             Print Barcode
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               backdropFilter: "blur(1px)",
//               zIndex: 999,
//             }}
//           >
//             <div
//               style={{
//                 position: "fixed",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 1000,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div
//                 className="form-container"
//                 style={{
//                   width: "600px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
//                   <X
//                     color="#538392"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleCancelClick}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Code:
//                     <input
//                       type="text"
//                       value={formValues.code}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, code: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Name:
//                     <input
//                       type="text"
//                       value={formValues.name}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, name: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Category:
//                     <select
//                       value={formValues.category_id}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           category_id: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Purchase Price:
//                     <input
//                       type="number"
//                       value={formValues.purchase_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           purchase_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Discount:
//                     <input
//                       type="number"
//                       value={formValues.discount}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           discount: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={handleImageChange}
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                     {imagePreview && (
//                       <img
//                         src={imagePreview}
//                         alt="Image Preview"
//                         style={{
//                           width: "100px",
//                           height: "100px",
//                           objectFit: "cover",
//                           marginTop: "10px",
//                         }}
//                       />
//                     )}
//                   </label>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "10px",
//                     }}
//                   >
//                     {editMode ? (
//                       <button
//                         onClick={handleUpdateClick}
//                         style={{
//                           width: "88px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <PencilLine size={15} /> Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={handleAddClick}
//                         style={{
//                           width: "78px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <Save size={15} color="white" />
//                         Save
//                       </button>
//                     )}
//                     <button
//                       onClick={handleCancelClick}
//                       style={{
//                         width: "90px",
//                         height: "33px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "4px",
//                         fontSize: "12px",
//                         backgroundColor: "#FF4F4F",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <CircleArrowLeft size={15} color="white" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div style={{ margin: "20px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label style={{ fontSize: "15px" }}>
//             Show
//             <select
//               value={itemsPerPage}
//               onChange={handleItemsPerPageChange}
//               style={{
//                 marginLeft: "5px",
//                 marginRight: "5px",
//                 width: "67px",
//                 height: "27px",
//                 paddingLeft: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               <option value={3}>3</option>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//             entries
//           </label>
//           <div style={{ fontSize: "15px" }}>
//             Search:
//             <input
//               style={{
//                 width: "147px",
//                 height: "29px",
//                 padding: "5px",
//                 marginLeft: "5px",
//               }}
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAllChange}
//                   checked={selectedProducts.length === paginatedProducts.length}
//                 />
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Category
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Brand
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Purchase Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Selling Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Discount
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Stock
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedProducts.map((product, index) => (
//               <tr key={product.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <input
//                     type="checkbox"
//                     checked={selectedProducts.includes(product.id)}
//                     onChange={() => handleCheckboxChange(product.id)}
//                   />
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {(currentPage - 1) * itemsPerPage + index + 1}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.code}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.category ? product.category.name : ""}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.brand}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.purchase_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.selling_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.discount}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.stock}
//                 </td>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     display: "flex",
//                     gap: "5px",
//                   }}
//                 >
//                   <button
//                     onClick={() => handleEditClick(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4557F7",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Pencil}
//                       alt="Pencil"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handleRemoveClick(product.id)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#FF0505",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Trash}
//                       alt="Trash"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handlePrintBarcode(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4CAF50",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <Printer size={16} color="white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ fontSize: "14px" }}>
//             Showing page {currentPage} of {totalPages} (
//             {filteredProducts.length} entries)
//           </div>
//           <div>
//             <button
//               onClick={handleFirstPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "5px 0 0 5px",
//                 borderRight: "0px",
//               }}
//             >
//               {"<<"}
//             </button>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRight: "0px",
//               }}
//             >
//               Previous
//             </button>
//             {getPageButtons()}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderLeft: "0px",
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={handleLastPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "0 5px 5px 0",
//                 borderLeft: "0px",
//               }}
//             >
//               {">>"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
// import React, { useState, useEffect } from "react";
// import axiosClient from "../../axios-client";
// import JsBarcode from "jsbarcode";
// import {
//   CirclePlus,
//   Save,
//   CircleArrowLeft,
//   X,
//   PencilLine,
//   Printer,
// } from "lucide-react";
// import Trash from "../../assets/image/Trash.png";
// import Pencil from "../../assets/image/Pencil.png";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formValues, setFormValues] = useState({
//     id: "",
//     code: "",
//     name: "",
//     category_id: "",
//     brand: "",
//     purchase_price: "",
//     selling_price: "",
//     discount: "",
//     stock: "",
//     image: null,
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/categories").then(({ data }) => {
//       setCategories(data);
//     });
//     axiosClient.get("/products").then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);

//   const handleAddProductClick = () => {
//     setShowForm(true);
//     setEditMode(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormValues({ ...formValues, image: file });

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAddClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post("/products", formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null);
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err.response.data);
//           alert("Error adding product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleUpdateClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post(`/products/${editProductId}?_method=PUT`, formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null);
//           setEditProductId(null);
//           setEditMode(false);
//         })
//         .catch((err) => {
//           console.error("Error updating product:", err.response.data);
//           alert("Error updating product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setFormValues({ ...product, image: null });
//     setShowForm(true);
//     setImagePreview(`http://localhost:3000/uploads/${product.image}`);
//   };

//   const handleRemoveClick = (id) => {
//     if (window.confirm("Do you want to delete it?")) {
//       axiosClient
//         .delete(`/products/${id}`)
//         .then(() => {
//           const updatedProducts = products.filter(
//             (product) => product.id !== id
//           );
//           setProducts(updatedProducts);
//         })
//         .catch((err) => {
//           console.error("Error deleting product:", err.response.data);
//           alert("Error deleting product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleDeleteSelected = () => {
//     if (window.confirm("Do you want to delete the selected products?")) {
//       selectedProducts.forEach((id) => handleRemoveClick(id));
//       setSelectedProducts([]);
//     }
//   };

//   const handlePrintSelectedBarcodes = () => {
//     selectedProducts.forEach((id) => {
//       const product = products.find((product) => product.id === id);
//       if (product) {
//         handlePrintBarcode(product);
//       }
//     });
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   const getPageButtons = () => {
//     const buttons = [];
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + 2);

//     if (currentPage === 1) {
//       endPage = Math.min(totalPages, 3);
//     } else if (currentPage === totalPages) {
//       startPage = Math.max(1, totalPages - 2);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           style={{
//             backgroundColor: i === currentPage ? "#758BFF" : "white",
//             color: "black",
//             height: "30px",
//             fontSize: "14px",
//             border: "solid 1px #BCBCBC",
//             borderLeft: "0px solid #BCBCBC",
//             borderTopRightRadius: "0px",
//             borderTopLeftRadius: "0px",
//             borderStartEndRadius: "0px",
//             borderBottomLeftRadius: "0px",
//             borderBottomRightRadius: "0px",
//           }}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const handlePrintBarcode = (product) => {
//     const barcode = generateBarcode(product.code);
//     const printWindow = window.open("", "PRINT", "height=400,width=600");
//     printWindow.document.write("<html><head><title>Product Barcode</title>");
//     printWindow.document.write("</head><body style='text-align: center;'>");
//     printWindow.document.write(
//       `<div style="margin-top: 20px;">
//         <div style="font-size: 18px; margin-bottom: 10px;">
//           ${product.name} - $${product.selling_price}
//         </div>
//         <div>
//           <img src="${barcode}" alt="Barcode for ${product.name}" />
//         </div>

//       </div>`
//     );
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedProducts((prevSelectedProducts) =>
//       prevSelectedProducts.includes(id)
//         ? prevSelectedProducts.filter((productId) => productId !== id)
//         : [...prevSelectedProducts, id]
//     );
//   };

//   const handleSelectAllChange = () => {
//     if (selectedProducts.length === paginatedProducts.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(paginatedProducts.map((product) => product.id));
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <h1>Product</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button
//             onClick={handleAddProductClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#38B000",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <CirclePlus size={20} color="white" />
//             Add New Product
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF4F4F",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <img
//               src={Trash}
//               alt="Trash"
//               style={{ width: "16px", height: "16px" }}
//             />
//             Delete
//           </button>
//           <button
//             onClick={handlePrintSelectedBarcodes}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF9100",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <Printer size={20} color="white" />
//             Print Barcode
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               backdropFilter: "blur(1px)",
//               zIndex: 999,
//             }}
//           >
//             <div
//               style={{
//                 position: "fixed",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 1000,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div
//                 className="form-container"
//                 style={{
//                   width: "550px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
//                   <X
//                     color="#538392"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleCancelClick}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: "block" }}>
//                     Code:
//                     <input
//                       type="text"
//                       value={formValues.code}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, code: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "25px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block" }}>
//                     Name:
//                     <input
//                       type="text"
//                       value={formValues.name}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, name: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "20px",
//                       }}
//                     />
//                   </label>

//                   <label style={{ display: "block" }}>
//                     Category:
//                     <select
//                       value={formValues.category_id}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           category_id: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "35%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "2px",
//                         marginRight: "20px",
//                       }}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "38%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   {/* <label style={{ display: "block", marginTop: "5px" }}>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "20px",
//                       }}
//                     />
//                   </label> */}
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Purchase Price:
//                     <input
//                       type="number"
//                       value={formValues.purchase_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           purchase_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "30%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "30%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   {/* <label style={{ display: "block", marginBottom: "10px" }}>
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label> */}
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Discount:
//                     <input
//                       type="number"
//                       value={formValues.discount}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           discount: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "39%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "38%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   {/* <label style={{ display: "block", marginBottom: "20px" }}>
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label> */}
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={handleImageChange}
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                     {imagePreview && (
//                       <img
//                         src={imagePreview}
//                         alt="Image Preview"
//                         style={{ width: "100px", marginTop: "10px" }}
//                       />
//                     )}
//                   </label>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "10px",
//                     }}
//                   >
//                     {editMode ? (
//                       <button
//                         onClick={handleUpdateClick}
//                         style={{
//                           width: "88px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <PencilLine size={15} /> Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={handleAddClick}
//                         style={{
//                           width: "78px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <Save size={15} color="white" />
//                         Save
//                       </button>
//                     )}
//                     <button
//                       onClick={handleCancelClick}
//                       style={{
//                         width: "90px",
//                         height: "33px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "4px",
//                         fontSize: "12px",
//                         backgroundColor: "#FF4F4F",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <CircleArrowLeft size={15} color="white" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div style={{ margin: "20px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label style={{ fontSize: "15px" }}>
//             Show
//             <select
//               value={itemsPerPage}
//               onChange={handleItemsPerPageChange}
//               style={{
//                 marginLeft: "5px",
//                 marginRight: "5px",
//                 width: "67px",
//                 height: "27px",
//                 paddingLeft: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               <option value={3}>3</option>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//             entries
//           </label>
//           <div style={{ fontSize: "15px" }}>
//             Search:
//             <input
//               style={{
//                 width: "147px",
//                 height: "29px",
//                 padding: "5px",
//                 marginLeft: "5px",
//               }}
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAllChange}
//                   checked={selectedProducts.length === paginatedProducts.length}
//                 />
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Category
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Brand
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Purchase Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Selling Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Discount
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Stock
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedProducts.map((product, index) => (
//               <tr key={product.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <input
//                     type="checkbox"
//                     checked={selectedProducts.includes(product.id)}
//                     onChange={() => handleCheckboxChange(product.id)}
//                   />
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {(currentPage - 1) * itemsPerPage + index + 1}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.code}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.category ? product.category.name : ""}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.brand}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.purchase_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.selling_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.discount}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.stock}
//                 </td>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     display: "flex",
//                     gap: "5px",
//                   }}
//                 >
//                   <button
//                     onClick={() => handleEditClick(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4557F7",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Pencil}
//                       alt="Pencil"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handleRemoveClick(product.id)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#FF0505",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Trash}
//                       alt="Trash"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handlePrintBarcode(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4CAF50",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <Printer size={16} color="white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ fontSize: "14px" }}>
//             Showing page {currentPage} of {totalPages} (
//             {filteredProducts.length} entries)
//           </div>
//           <div>
//             <button
//               onClick={handleFirstPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "5px 0 0 5px",
//                 borderRight: "0px",
//               }}
//             >
//               {"<<"}
//             </button>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRight: "0px",
//               }}
//             >
//               Previous
//             </button>
//             {getPageButtons()}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderLeft: "0px",
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={handleLastPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "0 5px 5px 0",
//                 borderLeft: "0px",
//               }}
//             >
//               {">>"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// import React, { useState, useEffect } from "react";
// import axiosClient from "../../axios-client";
// import JsBarcode from "jsbarcode";
// import {
//   CirclePlus,
//   Save,
//   CircleArrowLeft,
//   X,
//   PencilLine,
//   Printer,
// } from "lucide-react";
// import Trash from "../../assets/image/Trash.png";
// import Pencil from "../../assets/image/Pencil.png";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formValues, setFormValues] = useState({
//     id: "",
//     code: "",
//     name: "",
//     category_id: "",
//     brand: "",
//     purchase_price: "",
//     selling_price: "",
//     discount: "",
//     stock: "",
//     image: null,
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/categories").then(({ data }) => {
//       setCategories(data);
//     });
//     axiosClient.get("/products").then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);

//   const handleAddProductClick = () => {
//     setShowForm(true);
//     setEditMode(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormValues({ ...formValues, image: file });

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAddClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post("/products", formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null);
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err.response.data);
//           alert("Error adding product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleUpdateClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post(`/products/${editProductId}?_method=PUT`, formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null);
//           setEditProductId(null);
//           setEditMode(false);
//         })
//         .catch((err) => {
//           console.error("Error updating product:", err.response.data);
//           alert("Error updating product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setFormValues({ ...product, image: null });
//     setShowForm(true);
//     setImagePreview(`http://localhost:3000/uploads/${product.image}`);
//   };

//   const handleRemoveClick = (id) => {
//     if (window.confirm("Do you want to delete it?")) {
//       axiosClient
//         .delete(`/products/${id}`)
//         .then(() => {
//           const updatedProducts = products.filter(
//             (product) => product.id !== id
//           );
//           setProducts(updatedProducts);
//         })
//         .catch((err) => {
//           console.error("Error deleting product:", err.response.data);
//           alert("Error deleting product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleDeleteSelected = () => {
//     if (window.confirm("Do you want to delete the selected products?")) {
//       selectedProducts.forEach((id) => handleRemoveClick(id));
//       setSelectedProducts([]);
//     }
//   };

//   const handlePrintSelectedBarcodes = () => {
//     selectedProducts.forEach((id) => {
//       const product = products.find((product) => product.id === id);
//       if (product) {
//         handlePrintBarcode(product);
//       }
//     });
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   const getPageButtons = () => {
//     const buttons = [];
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + 2);

//     if (currentPage === 1) {
//       endPage = Math.min(totalPages, 3);
//     } else if (currentPage === totalPages) {
//       startPage = Math.max(1, totalPages - 2);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           style={{
//             backgroundColor: i === currentPage ? "#758BFF" : "white",
//             color: "black",
//             height: "30px",
//             fontSize: "14px",
//             border: "solid 1px #BCBCBC",
//             borderLeft: "0px solid #BCBCBC",
//             borderTopRightRadius: "0px",
//             borderTopLeftRadius: "0px",
//             borderStartEndRadius: "0px",
//             borderBottomLeftRadius: "0px",
//             borderBottomRightRadius: "0px",
//           }}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const generateBarcode = (productCode) => {
//     const canvas = document.createElement("canvas");
//     JsBarcode(canvas, productCode, { format: "CODE128" });
//     return canvas.toDataURL("image/png");
//   };

//   const handlePrintBarcode = (product) => {
//     const barcode = generateBarcode(product.code);
//     const printWindow = window.open("", "PRINT", "height=400,width=600");
//     printWindow.document.write("<html><head><title>Product Barcode</title>");
//     printWindow.document.write("</head><body style='text-align: center;'>");
//     printWindow.document.write(
//       `<div style="margin-top: 20px;">
//         <div style="font-size: 18px; margin-bottom: 10px;">
//           ${product.name} - $${product.selling_price}
//         </div>
//         <div>
//           <img src="${barcode}" alt="Barcode for ${product.name}" />
//         </div>

//       </div>`
//     );
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedProducts((prevSelectedProducts) =>
//       prevSelectedProducts.includes(id)
//         ? prevSelectedProducts.filter((productId) => productId !== id)
//         : [...prevSelectedProducts, id]
//     );
//   };

//   const handleSelectAllChange = () => {
//     if (selectedProducts.length === paginatedProducts.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(paginatedProducts.map((product) => product.id));
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <h1>Product</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button
//             onClick={handleAddProductClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#38B000",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <CirclePlus size={20} color="white" />
//             Add New Product
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF4F4F",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <img
//               src={Trash}
//               alt="Trash"
//               style={{ width: "16px", height: "16px" }}
//             />
//             Delete
//           </button>
//           <button
//             onClick={handlePrintSelectedBarcodes}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF9100",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <Printer size={20} color="white" />
//             Print Barcode
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               backdropFilter: "blur(1px)",
//               zIndex: 999,
//             }}
//           >
//             <div
//               style={{
//                 position: "fixed",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 1000,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div
//                 className="form-container"
//                 style={{
//                   width: "550px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
//                   <X
//                     color="#538392"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleCancelClick}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: "block" }}>
//                     Code:
//                     <input
//                       type="text"
//                       value={formValues.code}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, code: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "25px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block" }}>
//                     Name:
//                     <input
//                       type="text"
//                       value={formValues.name}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, name: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "20px",
//                       }}
//                     />
//                   </label>

//                   <label style={{ display: "block" }}>
//                     Category:
//                     <select
//                       value={formValues.category_id}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           category_id: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "35%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "2px",
//                         marginRight: "20px",
//                       }}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "38%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   {/* <label style={{ display: "block", marginTop: "5px" }}>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "20px",
//                       }}
//                     />
//                   </label> */}
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Purchase Price:
//                     <input
//                       type="number"
//                       value={formValues.purchase_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           purchase_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "30%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "30%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   {/* <label style={{ display: "block", marginBottom: "10px" }}>
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label> */}
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Discount:
//                     <input
//                       type="number"
//                       value={formValues.discount}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           discount: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "39%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "38%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   {/* <label style={{ display: "block", marginBottom: "20px" }}>
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "100%",
//                         padding: "5px",
//                         marginTop: "5px",
//                       }}
//                     />
//                   </label> */}
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={handleImageChange}
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                     {imagePreview && (
//                       <img
//                         src={imagePreview}
//                         alt="Image Preview"
//                         style={{ width: "100px", marginTop: "10px" }}
//                       />
//                     )}
//                   </label>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "10px",
//                     }}
//                   >
//                     {editMode ? (
//                       <button
//                         onClick={handleUpdateClick}
//                         style={{
//                           width: "88px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <PencilLine size={15} /> Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={handleAddClick}
//                         style={{
//                           width: "78px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <Save size={15} color="white" />
//                         Save
//                       </button>
//                     )}
//                     <button
//                       onClick={handleCancelClick}
//                       style={{
//                         width: "90px",
//                         height: "33px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "4px",
//                         fontSize: "12px",
//                         backgroundColor: "#FF4F4F",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <CircleArrowLeft size={15} color="white" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div style={{ margin: "20px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label style={{ fontSize: "15px" }}>
//             Show
//             <select
//               value={itemsPerPage}
//               onChange={handleItemsPerPageChange}
//               style={{
//                 marginLeft: "5px",
//                 marginRight: "5px",
//                 width: "67px",
//                 height: "27px",
//                 paddingLeft: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               <option value={3}>3</option>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//             entries
//           </label>
//           <div style={{ fontSize: "15px" }}>
//             Search:
//             <input
//               style={{
//                 width: "147px",
//                 height: "29px",
//                 padding: "5px",
//                 marginLeft: "5px",
//               }}
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAllChange}
//                   checked={selectedProducts.length === paginatedProducts.length}
//                 />
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Category
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Brand
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Purchase Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Selling Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Discount
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Stock
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedProducts.map((product, index) => (
//               <tr key={product.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <input
//                     type="checkbox"
//                     checked={selectedProducts.includes(product.id)}
//                     onChange={() => handleCheckboxChange(product.id)}
//                   />
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {(currentPage - 1) * itemsPerPage + index + 1}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.code}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.category ? product.category.name : ""}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.brand}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.purchase_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.selling_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.discount}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.stock}
//                 </td>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     display: "flex",
//                     gap: "5px",
//                   }}
//                 >
//                   <button
//                     onClick={() => handleEditClick(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4557F7",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Pencil}
//                       alt="Pencil"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handleRemoveClick(product.id)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#FF0505",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Trash}
//                       alt="Trash"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handlePrintBarcode(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4CAF50",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <Printer size={16} color="white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ fontSize: "14px" }}>
//             Showing page {currentPage} of {totalPages} (
//             {filteredProducts.length} entries)
//           </div>
//           <div>
//             <button
//               onClick={handleFirstPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "5px 0 0 5px",
//                 borderRight: "0px",
//               }}
//             >
//               {"<<"}
//             </button>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRight: "0px",
//               }}
//             >
//               Previous
//             </button>
//             {getPageButtons()}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderLeft: "0px",
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={handleLastPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "0 5px 5px 0",
//                 borderLeft: "0px",
//               }}
//             >
//               {">>"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// import React, { useState, useEffect } from "react";
// import axiosClient from "../../axios-client";
// import JsBarcode from "jsbarcode";
// import {
//   CirclePlus,
//   Save,
//   CircleArrowLeft,
//   X,
//   PencilLine,
//   Printer,
// } from "lucide-react";
// import Trash from "../../assets/image/Trash.png";
// import Pencil from "../../assets/image/Pencil.png";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formValues, setFormValues] = useState({
//     id: "",
//     code: "",
//     name: "",
//     category_id: "",
//     brand: "",
//     purchase_price: "",
//     selling_price: "",
//     discount: "",
//     stock: "",
//     image: null,
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/categories").then(({ data }) => {
//       setCategories(data);
//     });
//     axiosClient.get("/products").then(({ data }) => {
//       setProducts(data);
//     });
//   }, []);

//   const handleAddProductClick = () => {
//     setShowForm(true);
//     setEditMode(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     setFormValues({
//       id: "",
//       code: "",
//       name: "",
//       category_id: "",
//       brand: "",
//       purchase_price: "",
//       selling_price: "",
//       discount: "",
//       stock: "",
//       image: null,
//     });
//     setImagePreview(null);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormValues({ ...formValues, image: file });

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAddClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post("/products", formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null);
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err.response.data);
//           alert("Error adding product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleUpdateClick = () => {
//     if (formValues.name.trim() !== "") {
//       const formData = new FormData();
//       for (const key in formValues) {
//         if (formValues[key] !== null && formValues[key] !== "") {
//           formData.append(key, formValues[key]);
//         }
//       }

//       axiosClient
//         .post(`/products/${editProductId}?_method=PUT`, formData)
//         .then(({ data }) => {
//           axiosClient.get("/products").then(({ data }) => {
//             setProducts(data);
//           });
//           setShowForm(false);
//           setFormValues({
//             id: "",
//             code: "",
//             name: "",
//             category_id: "",
//             brand: "",
//             purchase_price: "",
//             selling_price: "",
//             discount: "",
//             stock: "",
//             image: null,
//           });
//           setImagePreview(null);
//           setEditProductId(null);
//           setEditMode(false);
//         })
//         .catch((err) => {
//           console.error("Error updating product:", err.response.data);
//           alert("Error updating product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setFormValues({ ...product, image: null });
//     setShowForm(true);
//     setImagePreview(`http://localhost:8000/storage/${product.image}`);
//   };

//   const handleRemoveClick = (id) => {
//     if (window.confirm("Do you want to delete it?")) {
//       axiosClient
//         .delete(`/products/${id}`)
//         .then(() => {
//           const updatedProducts = products.filter(
//             (product) => product.id !== id
//           );
//           setProducts(updatedProducts);
//         })
//         .catch((err) => {
//           console.error("Error deleting product:", err.response.data);
//           alert("Error deleting product: " + JSON.stringify(err.response.data));
//         });
//     }
//   };

//   const handleDeleteSelected = () => {
//     if (window.confirm("Do you want to delete the selected products?")) {
//       selectedProducts.forEach((id) => handleRemoveClick(id));
//       setSelectedProducts([]);
//     }
//   };

//   const handlePrintSelectedBarcodes = () => {
//     selectedProducts.forEach((id) => {
//       const product = products.find((product) => product.id === id);
//       if (product) {
//         handlePrintBarcode(product);
//       }
//     });
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const handleLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   const getPageButtons = () => {
//     const buttons = [];
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + 2);

//     if (currentPage === 1) {
//       endPage = Math.min(totalPages, 3);
//     } else if (currentPage === totalPages) {
//       startPage = Math.max(1, totalPages - 2);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           style={{
//             backgroundColor: i === currentPage ? "#758BFF" : "white",
//             color: "black",
//             height: "30px",
//             fontSize: "14px",
//             border: "solid 1px #BCBCBC",
//             borderLeft: "0px solid #BCBCBC",
//             borderTopRightRadius: "0px",
//             borderTopLeftRadius: "0px",
//             borderStartEndRadius: "0px",
//             borderBottomLeftRadius: "0px",
//             borderBottomRightRadius: "0px",
//           }}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const handlePrintBarcode = (product) => {
//     const barcode = generateBarcode(product.code);
//     const printWindow = window.open("", "PRINT", "height=400,width=600");
//     printWindow.document.write("<html><head><title>Product Barcode</title>");
//     printWindow.document.write("</head><body style='text-align: center;'>");
//     printWindow.document.write(
//       `<div style="margin-top: 20px;">
//         <div style="font-size: 18px; margin-bottom: 10px;">
//           ${product.name} - $${product.selling_price}
//         </div>
//         <div>
//           <img src="${barcode}" alt="Barcode for ${product.name}" />
//         </div>

//       </div>`
//     );
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedProducts((prevSelectedProducts) =>
//       prevSelectedProducts.includes(id)
//         ? prevSelectedProducts.filter((productId) => productId !== id)
//         : [...prevSelectedProducts, id]
//     );
//   };

//   const handleSelectAllChange = () => {
//     if (selectedProducts.length === paginatedProducts.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(paginatedProducts.map((product) => product.id));
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <h1>Product</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button
//             onClick={handleAddProductClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#38B000",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <CirclePlus size={20} color="white" />
//             Add New Product
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF4F4F",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <img
//               src={Trash}
//               alt="Trash"
//               style={{ width: "16px", height: "16px" }}
//             />
//             Delete
//           </button>
//           <button
//             onClick={handlePrintSelectedBarcodes}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "7px",
//               backgroundColor: "#FF9100",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "15px",
//               color: "white",
//             }}
//           >
//             <Printer size={20} color="white" />
//             Print Barcode
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               backdropFilter: "blur(1px)",
//               zIndex: 999,
//             }}
//           >
//             <div
//               style={{
//                 position: "fixed",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 1000,
//                 backgroundColor: "white",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div
//                 className="form-container"
//                 style={{
//                   width: "550px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
//                   <X
//                     color="#538392"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleCancelClick}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: "block" }}>
//                     Code:
//                     <input
//                       type="text"
//                       value={formValues.code}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, code: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "25px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block" }}>
//                     Name:
//                     <input
//                       type="text"
//                       value={formValues.name}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, name: e.target.value })
//                       }
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "20px",
//                       }}
//                     />
//                   </label>

//                   <label style={{ display: "block" }}>
//                     Category:
//                     <select
//                       value={formValues.category_id}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           category_id: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "35%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "2px",
//                         marginRight: "20px",
//                       }}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                     Brand:
//                     <input
//                       type="text"
//                       value={formValues.brand}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, brand: e.target.value })
//                       }
//                       style={{
//                         width: "38%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Purchase Price:
//                     <input
//                       type="number"
//                       value={formValues.purchase_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           purchase_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "30%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Selling Price:
//                     <input
//                       type="number"
//                       value={formValues.selling_price}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           selling_price: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "30%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "10px" }}>
//                     Discount:
//                     <input
//                       type="number"
//                       value={formValues.discount}
//                       onChange={(e) =>
//                         setFormValues({
//                           ...formValues,
//                           discount: e.target.value,
//                         })
//                       }
//                       style={{
//                         width: "39%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Stock:
//                     <input
//                       type="number"
//                       value={formValues.stock}
//                       onChange={(e) =>
//                         setFormValues({ ...formValues, stock: e.target.value })
//                       }
//                       style={{
//                         width: "38%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                   </label>
//                   <label style={{ display: "block", marginBottom: "20px" }}>
//                     Image:
//                     <input
//                       type="file"
//                       onChange={handleImageChange}
//                       style={{
//                         width: "80%",
//                         padding: "5px",
//                         marginTop: "5px",
//                         marginLeft: "5px",
//                       }}
//                     />
//                     {imagePreview && (
//                       <img
//                         src={imagePreview}
//                         alt="Image Preview"
//                         style={{ width: "100px", marginTop: "10px" }}
//                       />
//                     )}
//                   </label>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "10px",
//                     }}
//                   >
//                     {editMode ? (
//                       <button
//                         onClick={handleUpdateClick}
//                         style={{
//                           width: "88px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <PencilLine size={15} /> Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={handleAddClick}
//                         style={{
//                           width: "78px",
//                           height: "33px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           gap: "4px",
//                           fontSize: "12px",
//                           backgroundColor: "#4FC64C",
//                           borderRadius: "5px",
//                         }}
//                       >
//                         <Save size={15} color="white" />
//                         Save
//                       </button>
//                     )}
//                     <button
//                       onClick={handleCancelClick}
//                       style={{
//                         width: "90px",
//                         height: "33px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "4px",
//                         fontSize: "12px",
//                         backgroundColor: "#FF4F4F",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <CircleArrowLeft size={15} color="white" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <div style={{ margin: "20px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label style={{ fontSize: "15px" }}>
//             Show
//             <select
//               value={itemsPerPage}
//               onChange={handleItemsPerPageChange}
//               style={{
//                 marginLeft: "5px",
//                 marginRight: "5px",
//                 width: "67px",
//                 height: "27px",
//                 paddingLeft: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               <option value={3}>3</option>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//             </select>
//             entries
//           </label>
//           <div style={{ fontSize: "15px" }}>
//             Search:
//             <input
//               style={{
//                 width: "147px",
//                 height: "29px",
//                 padding: "5px",
//                 marginLeft: "5px",
//               }}
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAllChange}
//                   checked={selectedProducts.length === paginatedProducts.length}
//                 />
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Category
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Brand
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Purchase Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Selling Price
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Discount
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Stock
//               </th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedProducts.map((product, index) => (
//               <tr key={product.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <input
//                     type="checkbox"
//                     checked={selectedProducts.includes(product.id)}
//                     onChange={() => handleCheckboxChange(product.id)}
//                   />
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {(currentPage - 1) * itemsPerPage + index + 1}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.code}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.category ? product.category.name : ""}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.brand}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.purchase_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.selling_price}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.discount}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {product.stock}
//                 </td>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     display: "flex",
//                     gap: "5px",
//                   }}
//                 >
//                   <button
//                     onClick={() => handleEditClick(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4557F7",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Pencil}
//                       alt="Pencil"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handleRemoveClick(product.id)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#FF0505",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <img
//                       src={Trash}
//                       alt="Trash"
//                       style={{ width: "16px", height: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => handlePrintBarcode(product)}
//                     style={{
//                       width: "36px",
//                       height: "30px",
//                       backgroundColor: "#4CAF50",
//                       borderRadius: "0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "0",
//                     }}
//                   >
//                     <Printer size={16} color="white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ fontSize: "14px" }}>
//             Showing page {currentPage} of {totalPages} (
//             {filteredProducts.length} entries)
//           </div>
//           <div>
//             <button
//               onClick={handleFirstPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "5px 0 0 5px",
//                 borderRight: "0px",
//               }}
//             >
//               {"<<"}
//             </button>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRight: "0px",
//               }}
//             >
//               Previous
//             </button>
//             {getPageButtons()}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderLeft: "0px",
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={handleLastPage}
//               disabled={currentPage === totalPages}
//               style={{
//                 border: "solid 1px #BCBCBC",
//                 backgroundColor: "white",
//                 color: "black",
//                 height: "30px",
//                 fontSize: "14px",
//                 borderRadius: "0 5px 5px 0",
//                 borderLeft: "0px",
//               }}
//             >
//               {">>"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import JsBarcode from "jsbarcode";
import {
  CirclePlus,
  Save,
  CircleArrowLeft,
  X,
  PencilLine,
  Printer,
} from "lucide-react";
import Trash from "../../assets/image/Trash.png";
import Pencil from "../../assets/image/Pencil.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    id: "",
    code: "",
    name: "",
    category_id: "",
    brand: "",
    purchase_price: "",
    selling_price: "",
    discount: "",
    stock: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    axiosClient.get("/categories").then(({ data }) => {
      setCategories(data);
    });
    axiosClient.get("/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  const handleAddProductClick = () => {
    setShowForm(true);
    setEditMode(false);
    setFormValues({
      id: "",
      code: "",
      name: "",
      category_id: "",
      brand: "",
      purchase_price: "",
      selling_price: "",
      discount: "",
      stock: "",
      image: null,
    });
    setImagePreview(null);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setFormValues({
      id: "",
      code: "",
      name: "",
      category_id: "",
      brand: "",
      purchase_price: "",
      selling_price: "",
      discount: "",
      stock: "",
      image: null,
    });
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormValues({ ...formValues, image: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddClick = () => {
    if (formValues.name.trim() !== "") {
      const formData = new FormData();
      for (const key in formValues) {
        if (formValues[key] !== null && formValues[key] !== "") {
          formData.append(key, formValues[key]);
        }
      }

      axiosClient
        .post("/products", formData)
        .then(({ data }) => {
          axiosClient.get("/products").then(({ data }) => {
            setProducts(data);
          });
          setShowForm(false);
          setFormValues({
            id: "",
            code: "",
            name: "",
            category_id: "",
            brand: "",
            purchase_price: "",
            selling_price: "",
            discount: "",
            stock: "",
            image: null,
          });
          setImagePreview(null);
        })
        .catch((err) => {
          console.error("Error adding product:", err.response.data);
          alert("Error adding product: " + JSON.stringify(err.response.data));
        });
    }
  };

  const handleUpdateClick = () => {
    if (formValues.name.trim() !== "") {
      const formData = new FormData();
      for (const key in formValues) {
        if (formValues[key] !== null && formValues[key] !== "") {
          formData.append(key, formValues[key]);
        }
      }

      axiosClient
        .post(`/products/${editProductId}?_method=PUT`, formData)
        .then(({ data }) => {
          axiosClient.get("/products").then(({ data }) => {
            setProducts(data);
          });
          setShowForm(false);
          setFormValues({
            id: "",
            code: "",
            name: "",
            category_id: "",
            brand: "",
            purchase_price: "",
            selling_price: "",
            discount: "",
            stock: "",
            image: null,
          });
          setImagePreview(null);
          setEditProductId(null);
          setEditMode(false);
        })
        .catch((err) => {
          console.error("Error updating product:", err.response.data);
          alert("Error updating product: " + JSON.stringify(err.response.data));
        });
    }
  };

  const handleEditClick = (product) => {
    setEditMode(true);
    setEditProductId(product.id);
    setFormValues({ ...product, image: null });
    setShowForm(true);
    setImagePreview(`http://localhost:8000/storage/${product.image}`);
  };

  const handleRemoveClick = (id) => {
    if (window.confirm("Do you want to delete it?")) {
      axiosClient
        .delete(`/products/${id}`)
        .then(() => {
          const updatedProducts = products.filter(
            (product) => product.id !== id
          );
          setProducts(updatedProducts);
        })
        .catch((err) => {
          console.error("Error deleting product:", err.response.data);
          alert("Error deleting product: " + JSON.stringify(err.response.data));
        });
    }
  };

  const handleDeleteSelected = () => {
    if (window.confirm("Do you want to delete the selected products?")) {
      selectedProducts.forEach((id) => handleRemoveClick(id));
      setSelectedProducts([]);
    }
  };

  const handlePrintSelectedBarcodes = () => {
    selectedProducts.forEach((id) => {
      const product = products.find((product) => product.id === id);
      if (product) {
        handlePrintBarcode(product);
      }
    });
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const getPageButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (currentPage === 1) {
      endPage = Math.min(totalPages, 3);
    } else if (currentPage === totalPages) {
      startPage = Math.max(1, totalPages - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          style={{
            backgroundColor: i === currentPage ? "#758BFF" : "white",
            color: "black",
            height: "30px",
            fontSize: "14px",
            border: "solid 1px #BCBCBC",
            borderLeft: "0px solid #BCBCBC",
            borderTopRightRadius: "0px",
            borderTopLeftRadius: "0px",
            borderStartEndRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const generateBarcode = (text) => {
    const canvas = document.createElement("canvas");
    JsBarcode(canvas, text, { format: "CODE128" });
    return canvas.toDataURL("image/png");
  };

  const handlePrintBarcode = (product) => {
    const barcode = generateBarcode(product.code);
    const printWindow = window.open("", "PRINT", "height=400,width=600");
    printWindow.document.write("<html><head><title>Product Barcode</title>");
    printWindow.document.write("</head><body style='text-align: center;'>");
    printWindow.document.write(
      `<div style="margin-top: 20px;">
        <div style="font-size: 18px; margin-bottom: 10px;">
          ${product.name} - $${product.selling_price}
        </div>
        <div>
          <img src="${barcode}" alt="Barcode for ${product.name}" />
        </div>
        
      </div>`
    );
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  const handleCheckboxChange = (id) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.includes(id)
        ? prevSelectedProducts.filter((productId) => productId !== id)
        : [...prevSelectedProducts, id]
    );
  };

  const handleSelectAllChange = () => {
    if (selectedProducts.length === paginatedProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(paginatedProducts.map((product) => product.id));
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <h1>Product</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleAddProductClick}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              backgroundColor: "#38B000",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "15px",
              color: "white",
            }}
          >
            <CirclePlus size={20} color="white" />
            Add New Product
          </button>
          <button
            onClick={handleDeleteSelected}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              backgroundColor: "#FF4F4F",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "15px",
              color: "white",
            }}
          >
            <img
              src={Trash}
              alt="Trash"
              style={{ width: "16px", height: "16px" }}
            />
            Delete
          </button>
          <button
            onClick={handlePrintSelectedBarcodes}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              backgroundColor: "#FF9100",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "15px",
              color: "white",
            }}
          >
            <Printer size={20} color="white" />
            Print Barcode
          </button>
        </div>
      </div>
      {showForm && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(1px)",
              zIndex: 999,
            }}
          >
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="form-container"
                style={{
                  width: "550px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h1>{editMode ? "Edit Product" : "Add Product"}</h1>
                  <X
                    color="#538392"
                    style={{ cursor: "pointer" }}
                    onClick={handleCancelClick}
                  />
                </div>
                <div>
                  <label style={{ display: "block" }}>
                    Code:
                    <input
                      type="text"
                      value={formValues.code}
                      onChange={(e) =>
                        setFormValues({ ...formValues, code: e.target.value })
                      }
                      style={{
                        width: "80%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "25px",
                      }}
                    />
                  </label>
                  <label style={{ display: "block" }}>
                    Name:
                    <input
                      type="text"
                      value={formValues.name}
                      onChange={(e) =>
                        setFormValues({ ...formValues, name: e.target.value })
                      }
                      style={{
                        width: "80%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "20px",
                      }}
                    />
                  </label>

                  <label style={{ display: "block" }}>
                    Category:
                    <select
                      value={formValues.category_id}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          category_id: e.target.value,
                        })
                      }
                      style={{
                        width: "35%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "2px",
                        marginRight: "20px",
                      }}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    Brand:
                    <input
                      type="text"
                      value={formValues.brand}
                      onChange={(e) =>
                        setFormValues({ ...formValues, brand: e.target.value })
                      }
                      style={{
                        width: "38%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "5px",
                      }}
                    />
                  </label>
                  {/* <label style={{ display: "block", marginTop: "5px" }}>
                    Brand:
                    <input
                      type="text"
                      value={formValues.brand}
                      onChange={(e) =>
                        setFormValues({ ...formValues, brand: e.target.value })
                      }
                      style={{
                        width: "80%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "20px",
                      }}
                    />
                  </label> */}
                  <label style={{ display: "block", marginBottom: "10px" }}>
                    Purchase Price:
                    <input
                      type="number"
                      value={formValues.purchase_price}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          purchase_price: e.target.value,
                        })
                      }
                      style={{
                        width: "30%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "5px",
                        marginRight: "10px",
                      }}
                    />
                    Selling Price:
                    <input
                      type="number"
                      value={formValues.selling_price}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          selling_price: e.target.value,
                        })
                      }
                      style={{
                        width: "30%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "5px",
                      }}
                    />
                  </label>
                  {/* <label style={{ display: "block", marginBottom: "10px" }}>
                    Selling Price:
                    <input
                      type="number"
                      value={formValues.selling_price}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          selling_price: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </label> */}
                  <label style={{ display: "block", marginBottom: "10px" }}>
                    Discount:
                    <input
                      type="number"
                      value={formValues.discount}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          discount: e.target.value,
                        })
                      }
                      style={{
                        width: "39%",
                        padding: "5px",
                        marginTop: "5px",
                        marginRight: "10px",
                      }}
                    />
                    Stock:
                    <input
                      type="number"
                      value={formValues.stock}
                      onChange={(e) =>
                        setFormValues({ ...formValues, stock: e.target.value })
                      }
                      style={{
                        width: "38%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "5px",
                      }}
                    />
                  </label>
                  {/* <label style={{ display: "block", marginBottom: "20px" }}>
                    Stock:
                    <input
                      type="number"
                      value={formValues.stock}
                      onChange={(e) =>
                        setFormValues({ ...formValues, stock: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </label> */}
                  <label style={{ display: "block", marginBottom: "20px" }}>
                    Image:
                    <input
                      type="file"
                      onChange={handleImageChange}
                      style={{
                        width: "80%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "5px",
                      }}
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        style={{ width: "100px", marginTop: "10px" }}
                      />
                    )}
                  </label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "10px",
                    }}
                  >
                    {editMode ? (
                      <button
                        onClick={handleUpdateClick}
                        style={{
                          width: "88px",
                          height: "33px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "12px",
                          backgroundColor: "#4FC64C",
                          borderRadius: "5px",
                        }}
                      >
                        <PencilLine size={15} /> Update
                      </button>
                    ) : (
                      <button
                        onClick={handleAddClick}
                        style={{
                          width: "78px",
                          height: "33px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "12px",
                          backgroundColor: "#4FC64C",
                          borderRadius: "5px",
                        }}
                      >
                        <Save size={15} color="white" />
                        Save
                      </button>
                    )}
                    <button
                      onClick={handleCancelClick}
                      style={{
                        width: "90px",
                        height: "33px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                        backgroundColor: "#FF4F4F",
                        borderRadius: "5px",
                      }}
                    >
                      <CircleArrowLeft size={15} color="white" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div style={{ margin: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <label style={{ fontSize: "15px" }}>
            Show
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                width: "67px",
                height: "27px",
                paddingLeft: "20px",
                fontSize: "15px",
              }}
            >
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
            entries
          </label>
          <div style={{ fontSize: "15px" }}>
            Search:
            <input
              style={{
                width: "147px",
                height: "29px",
                padding: "5px",
                marginLeft: "5px",
              }}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectedProducts.length === paginatedProducts.length}
                />
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Category
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Brand
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Purchase Price
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Selling Price
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Discount
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Stock
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => (
              <tr key={product.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleCheckboxChange(product.id)}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.code}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.category ? product.category.name : ""}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.brand}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.purchase_price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.selling_price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.discount}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {product.stock}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <button
                    onClick={() => handleEditClick(product)}
                    style={{
                      width: "36px",
                      height: "30px",
                      backgroundColor: "#4557F7",
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                    }}
                  >
                    <img
                      src={Pencil}
                      alt="Pencil"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </button>
                  <button
                    onClick={() => handleRemoveClick(product.id)}
                    style={{
                      width: "36px",
                      height: "30px",
                      backgroundColor: "#FF0505",
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                    }}
                  >
                    <img
                      src={Trash}
                      alt="Trash"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </button>
                  <button
                    onClick={() => handlePrintBarcode(product)}
                    style={{
                      width: "36px",
                      height: "30px",
                      backgroundColor: "#4CAF50",
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                    }}
                  >
                    <Printer size={16} color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "14px" }}>
            Showing page {currentPage} of {totalPages} (
            {filteredProducts.length} entries)
          </div>
          <div>
            <button
              onClick={handleFirstPage}
              disabled={currentPage === 1}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderRadius: "5px 0 0 5px",
                borderRight: "0px",
              }}
            >
              {"<<"}
            </button>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderRight: "0px",
              }}
            >
              Previous
            </button>
            {getPageButtons()}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderLeft: "0px",
              }}
            >
              Next
            </button>
            <button
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderRadius: "0 5px 5px 0",
                borderLeft: "0px",
              }}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
