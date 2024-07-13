
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
