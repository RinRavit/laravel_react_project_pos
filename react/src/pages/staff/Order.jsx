
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";
import jsPDF from "jspdf";
import "jspdf-autotable";
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
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

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
        generateReceipt();
        setOrder([]); // Clear the order after confirming payment
        handleModalClose();
        fetchProducts(); // Refresh products list
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const generateReceipt = () => {
  //   const doc = new jsPDF();
  //   doc.text("OneShop", 20, 10);
  //   doc.text("Receipt", 20, 20);
  //   doc.text(`Cashier: ${user.name}`, 20, 30);
  //   doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);
  //   doc.autoTable({
  //     startY: 50,
  //     head: [["Item", "Quantity", "Price"]],
  //     body: order.map((item) => [
  //       item.name,
  //       item.quantity,
  //       `$${item.selling_price}`,
  //     ]),
  //   });
  //   doc.text(`Total: $${calculateTotal()}`, 20, doc.lastAutoTable.finalY + 10);
  //   doc.save("receipt.pdf");
  // };

  // Receipt
  const generateReceipt = (orderId) => {
    const doc = new jsPDF();

    // Add header
    doc.setFontSize(16);
    doc.text("POINTOFSALE", 105, 10, null, null, "center");
    doc.setFontSize(12);
    doc.text("66 DEMO ADDRESS", 105, 20, null, null, "center");
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);
    doc.text(`Name: ${user.name}`, 14, 40);
    doc.text(`No: ${user.id}`, 14, 50); // Use the order ID from the database

    // Add a line break
    doc.text(
      "------------------------------------------------------------",
      14,
      60
    );

    // Add product table
    doc.autoTable({
      startY: 70,
      head: [["Product", "Quantity", "Price"]],
      body: order.map((item) => [
        item.name,
        item.quantity,
        `$${parseFloat(item.selling_price).toFixed(2)}`,
      ]),
      theme: "plain",
      styles: { halign: "center" },
      headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
      bodyStyles: { textColor: [0, 0, 0] },
    });

    // Add total and other details
    const finalY = doc.previousAutoTable.finalY;
    doc.text(`Total Price: $${calculateTotal()}`, 14, finalY + 10);
    doc.text(`Total Item: ${order.length}`, 14, finalY + 20);
    doc.text(`Discount: $${calculateDiscount()}`, 14, finalY + 30);
    doc.text(`Total Pay: $${calculateTotal()}`, 14, finalY + 40);
    doc.text(`Received: $${calculateTotal()}`, 14, finalY + 50);
    doc.text(`Return: $0.00`, 14, finalY + 60);

    // Add a line break
    doc.text(
      "------------------------------------------------------------",
      14,
      finalY + 70
    );

    // Add footer
    doc.text("-- THANK YOU --", 105, finalY + 80, null, null, "center");

    // Save the PDF
    doc.save("receipt.pdf");
  };
  // end of Receipt
  const getTotalInCurrency = () => {
    const total = parseFloat(calculateTotal());
    if (currency === "KH") {
      return (total * 4100).toFixed(0); // Assuming 1 USD = 4100 Riel
    }
    return total;
  };

  const currentDate = new Date().toLocaleDateString();

  const filteredProducts = products.filter(
    (product) =>
      product.category.name === selectedCategory &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          }}
          
        >
          <div>Choose Category</div>
          <div>
            {" "}
            {/* Search */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #DDD",
                }}
              />
            </div>
          </div>
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
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    style={{
                      width: "25%",
                      backgroundColor: product.stock === 0 ? "#ddd" : "#FFFFFF",
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
                backgroundColor: "#7655FA",
                padding: "15px",
                color: "white",
                borderRadius: "5px 5px 0 0",
                margin: "-20px -20px 10px",
              }}
            >
              New Order
            </h2>
            <p style={{ margin: "0 0 20px", color: "#777" }}>{currentDate}</p>
            <div
              style={{
                maxHeight: "180px", // Limit height to 4 rows
                overflowY: "scroll",
                scrollbarWidth: "none", // Hide scrollbar in Firefox
                msOverflowStyle: "none", // Hide scrollbar in IE 10+
              }}
              className="scroll-container"
            >
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
                // backgroundColor: order.length > 0 ? "#ff6347" : "#ccc",
                backgroundColor: "#7655FA",
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
                backgroundColor: "#7655FA",
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
