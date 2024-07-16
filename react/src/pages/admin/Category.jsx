

import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import { CirclePlus, Save, CircleArrowLeft, X, PencilLine } from "lucide-react";
import Setting from "../../assets/image/Setting.png";
import Trash from "../../assets/image/Trash.png";
import Pencil from "../../assets/image/Pencil.png";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [currentCategoryImage, setCurrentCategoryImage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategoryClick = () => {
    setShowForm(true);
    setEditMode(false);
    setNewCategoryName("");
    setNewCategoryImage(null);
    setCurrentCategoryImage(null);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setNewCategoryName("");
    setNewCategoryImage(null);
    setCurrentCategoryImage(null);
  };

  const handleAddClick = async () => {
    if (newCategoryName.trim() === "") {
      alert("Please enter a category name.");
      return;
    }
  
    if (!newCategoryImage) {
      alert("Please upload an image.");
      return;
    }
  
    const isDuplicate = categories.some(
      (category) =>
        category.name.toLowerCase() === newCategoryName.toLowerCase()
    );
  
    if (isDuplicate) {
      alert("This Category already exists. Please add a new Category.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", newCategoryName);
    formData.append("image", newCategoryImage);
  
    try {
      const response = await axiosClient.post("/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setCategories([...categories, response.data]);
      setShowForm(false);
      setNewCategoryName("");
      setNewCategoryImage(null);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  
  const handleUpdateClick = async () => {
    if (newCategoryName.trim() === "") {
      alert("Please enter a category name.");
      return;
    }
  
    if (!newCategoryImage) {
      alert("Please upload an image.");
      return;
    }
  
    const isDuplicate = categories.some(
      (category) =>
        category.id !== editCategoryId &&
        category.name.toLowerCase() === newCategoryName.toLowerCase()
    );
  
    if (isDuplicate) {
      alert("This Category already exists. Please use a different name.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", newCategoryName);
    formData.append("image", newCategoryImage);
  
    try {
      const response = await axiosClient.post(
        `/categories/${editCategoryId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            _method: "PUT",
          },
        }
      );
      const updatedCategories = categories.map((category) =>
        category.id === editCategoryId ? response.data : category
      );
      setCategories(updatedCategories);
      setShowForm(false);
      setNewCategoryName("");
      setNewCategoryImage(null);
      setCurrentCategoryImage(null);
      setEditCategoryId(null);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  



  const handleEditClick = (id, name, image) => {
    setEditMode(true);
    setEditCategoryId(id);
    setNewCategoryName(name);
    setCurrentCategoryImage(image);
    setShowForm(true);
  };

  const handleRemoveClick = async (id) => {
    if (window.confirm("Do you want to delete it?")) {
      try {
        await axiosClient.delete(`/categories/${id}`);
        const updatedCategories = categories.filter(
          (category) => category.id !== id
        );
        setCategories(updatedCategories);
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedCategories = filteredCategories.slice(
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
            border: " solid 1px #BCBCBC",
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

  return (
    <div>
      <div>
        <h1 style={{ fontSize: "24px", marginTop: "23px", marginLeft: "24px" }}>
          Category
        </h1>
      </div>
      <section
        style={{
          width: "1000px",
          height: "auto",
          backgroundColor: "white",
          marginLeft: "23px",
          marginTop: "26px",
        }}
      >
        <div style={{ height: "1px" }}></div>
        <div style={{ marginLeft: "10px", marginTop: "12px" }}>
          <button
            onClick={handleAddCategoryClick}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "Center",
              gap: "7px",
              backgroundColor: "#38B000",
              width: "170px",
              height: "42px",
              borderRadius: "5px",
              fontSize: "15px",
            }}
          >
            <CirclePlus size={20} color="white" />
            Add Category
          </button>
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
                    width: "1031px",
                    height: "217px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "22px",
                      marginTop: "14px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1>{editMode ? "Edit Category" : "Add Category"}</h1>
                    <X
                      color="#538392"
                      style={{ marginRight: "23px", cursor: "pointer" }}
                      onClick={handleCancelClick}
                    />
                  </div>
                  <label
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "43px",
                    }}
                  >
                    Category:
                    <input
                      placeholder="Enter Category"
                      type="text"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      style={{
                        width: "476px",
                        height: "39px",
                        marginLeft: "5px",
                        padding: "5px",
                      }}
                    />
                  </label>
                  <label
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setNewCategoryImage(e.target.files[0])}
                      style={{
                        width: "476px",
                        height: "39px",
                        marginLeft: "5px",
                        padding: "5px",
                      }}
                    />
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                      marginTop: "36px",
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
                          marginRight: "25px",
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
                          marginRight: "25px",
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
                        marginRight: "25px",
                      }}
                    >
                      <CircleArrowLeft size={15} color="white" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <section
          style={{ marginLeft: "10px", marginTop: "21px", marginRight: "10px" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <div
              style={{
                fontSize: "15px",
              }}
            >
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
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Image
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedCategories.map((category, index) => (
                <tr key={category.id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {category.name}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <img
                      src={`http://localhost:8000/storage/${category.image}`}
                      alt={category.name}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      display: "flex",
                      gap: "5px",
                      height: "84px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        handleEditClick(
                          category.id,
                          category.name,
                          category.image
                        )
                      }
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
                      onClick={() => handleRemoveClick(category.id)}
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
        </section>

        <div
          style={{
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "10px",
            marginTop: "20px",
          }}
        >
          <div style={{ fontSize: "14px" }}>
            Showing page {currentPage} of {totalPages} (
            {filteredCategories.length} entries)
          </div>
          <div>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "10px",
                borderStartEndRadius: "0px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "0px",
                borderRight: "0px",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleFirstPage}
              disabled={currentPage === 1}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
                borderStartEndRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              {"<<"}
            </button>
            {getPageButtons()}

            <button
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
              style={{
                border: "solid 1px #BCBCBC",
                borderLeft: "0px",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
                borderStartEndRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              {">>"}
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                border: "solid 1px #BCBCBC",
                backgroundColor: "white",
                color: "black",
                height: "30px",
                fontSize: "14px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "0px",
                borderStartEndRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "10px",
                borderLeft: "0px",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
