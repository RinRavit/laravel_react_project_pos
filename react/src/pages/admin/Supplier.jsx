import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import { CirclePlus, CircleArrowLeft, X, PencilLine, Save } from "lucide-react";
import Trash from "../../assets/image/Trash.png";
import Pencil from "../../assets/image/Pencil.png";

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    id: "",
    code: "",
    name: "",
    gender: "",
    telephone: "",
    address: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editSupplierId, setEditSupplierId] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);

  useEffect(() => {
    axiosClient.get("/suppliers").then(({ data }) => {
      setSuppliers(data);
    });
  }, []);

  const handleAddSupplierClick = () => {
    setShowForm(true);
    setEditMode(false);
    setFormValues({
      id: "",
      code: "",
      name: "",
      gender: "",
      telephone: "",
      address: "",
    });
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setFormValues({
      id: "",
      code: "",
      name: "",
      gender: "",
      telephone: "",
      address: "",
    });
  };

  const handleAddClick = () => {
    if (formValues.name.trim() !== "") {
      axiosClient
        .post("/suppliers", formValues)
        .then(({ data }) => {
          axiosClient.get("/suppliers").then(({ data }) => {
            setSuppliers(data);
          });
          setShowForm(false);
          setFormValues({
            id: "",
            code: "",
            name: "",
            gender: "",
            telephone: "",
            address: "",
          });
        })
        .catch((err) => {
          console.error("Error adding supplier:", err.response.data);
          alert("Error adding supplier: " + JSON.stringify(err.response.data));
        });
    }
  };

  const handleUpdateClick = () => {
    if (formValues.name.trim() !== "") {
      axiosClient
        .put(`/suppliers/${editSupplierId}`, formValues)
        .then(({ data }) => {
          axiosClient.get("/suppliers").then(({ data }) => {
            setSuppliers(data);
          });
          setShowForm(false);
          setFormValues({
            id: "",
            code: "",
            name: "",
            gender: "",
            telephone: "",
            address: "",
          });
          setEditSupplierId(null);
          setEditMode(false);
        })
        .catch((err) => {
          console.error("Error updating supplier:", err.response.data);
          alert(
            "Error updating supplier: " + JSON.stringify(err.response.data)
          );
        });
    }
  };

  const handleEditClick = (supplier) => {
    setEditMode(true);
    setEditSupplierId(supplier.id);
    setFormValues({ ...supplier });
    setShowForm(true);
  };

  const handleRemoveClick = (id) => {
    if (window.confirm("Do you want to delete it?")) {
      axiosClient
        .delete(`/suppliers/${id}`)
        .then(() => {
          const updatedSuppliers = suppliers.filter(
            (supplier) => supplier.id !== id
          );
          setSuppliers(updatedSuppliers);
        })
        .catch((err) => {
          console.error("Error deleting supplier:", err.response.data);
          alert(
            "Error deleting supplier: " + JSON.stringify(err.response.data)
          );
        });
    }
  };

  const handleDeleteSelected = () => {
    if (window.confirm("Do you want to delete the selected suppliers?")) {
      selectedSuppliers.forEach((id) => handleRemoveClick(id));
      setSelectedSuppliers([]);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(suppliers.length / itemsPerPage);
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedSuppliers = filteredSuppliers.slice(
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

  const handleCheckboxChange = (id) => {
    setSelectedSuppliers((prevSelectedSuppliers) =>
      prevSelectedSuppliers.includes(id)
        ? prevSelectedSuppliers.filter((supplierId) => supplierId !== id)
        : [...prevSelectedSuppliers, id]
    );
  };

  const handleSelectAllChange = () => {
    if (selectedSuppliers.length === paginatedSuppliers.length) {
      setSelectedSuppliers([]);
    } else {
      setSelectedSuppliers(paginatedSuppliers.map((supplier) => supplier.id));
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
        <h1>Supplier</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleAddSupplierClick}
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
            Add New Supplier
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
                  <h1>{editMode ? "Edit Supplier" : "Add Supplier"}</h1>
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
                    Gender:
                    <select
                      value={formValues.gender}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          gender: e.target.value,
                        })
                      }
                      style={{
                        width: "82%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "11px",
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>
                  <label style={{ display: "block" }}>
                    Telephone:
                    <input
                      type="text"
                      value={formValues.telephone}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          telephone: e.target.value,
                        })
                      }
                      style={{
                        width: "80%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "3px",
                      }}
                    />
                  </label>
                  <label style={{ display: "block" }}>
                    Address:
                    <textarea
                      value={formValues.address}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          address: e.target.value,
                        })
                      }
                      style={{
                        width: "80%",
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "12px",
                        height: "80px",
                      }}
                    />
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
                  checked={
                    selectedSuppliers.length === paginatedSuppliers.length
                  }
                />
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Code</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Gender
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Telephone
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Address
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedSuppliers.map((supplier, index) => (
              <tr key={supplier.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="checkbox"
                    checked={selectedSuppliers.includes(supplier.id)}
                    onChange={() => handleCheckboxChange(supplier.id)}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {supplier.code}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {supplier.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {supplier.gender}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {supplier.telephone}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {supplier.address}
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
                    onClick={() => handleEditClick(supplier)}
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
                    onClick={() => handleRemoveClick(supplier.id)}
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
            {filteredSuppliers.length} entries)
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

export default Supplier;
