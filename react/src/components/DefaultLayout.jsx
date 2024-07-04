// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
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
//       <aside>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/users">Users</Link>
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
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// update 01
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
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
//       <aside>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/users">Users</Link>
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
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// update02
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
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
//       <aside>
//         <Link to="/admin/dashboard">Dashboard</Link>
//         <Link to="/admin/users">Users</Link>
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
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// // update 03
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
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
//       <aside>
//         <Link to="/admin/dashboard">Dashboard</Link>
//         <Link to="/admin/users">Users</Link>
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
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// working on Category

// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
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
//       <aside>
//         <Link to="/admin/dashboard">Dashboard</Link>
//         <Link to="/admin/category">Category</Link>
//         <Link to="/admin/users">Users</Link>
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
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// End of code that work with Category

// Product

import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";
import LOGO_SHOP from "../assets/image/LOGO_SHOP.jpg";
import Box from "../assets/image/Box.png";
import Supplier from "../assets/image/Supplies.png";
import Addcart from "../assets/image/Addcart.png";
import Dashboard from "../assets/image/Dashboard.png";
import Dollar from "../assets/image/Dollar.png";
import Dollarsymbol from "../assets/image/Dollarsymbol.png";
import Download from "../assets/image/Download.png";
import Idcard from "../assets/image/Idcard.png";
import Mechanicalgears from "../assets/image/Mechanicalgears.png";
import Multipleusers from "../assets/image/Multipleusers.png";
import Pdf from "../assets/image/Pdf.png";
import Shoppingcart from "../assets/image/Shoppingcart.png";
import Truck from "../assets/image/Truck.png";
import UserLogo from "../assets/image/UserLogo.png";

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <aside>
        {/* <div
          style={{
            marginTop: "13px",
            marginBottom: "13px",
            marginLeft: "11px",
            display: "flex",
          }}
        >
          <div>
            <img
              src={Dashboard}
              alt="Dashboard"
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>
            <Link to="/admin/dashboard">
              {" "}
              <img
                src={Dashboard}
                alt="Dashboard"
                style={{
                  width: "20px",
                }}
              />
              Dashboard
            </Link>
          </div>
        </div> */}
        <Link to="/admin/dashboard">
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
        <Link to="/admin/category">
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
                src={Box}
                alt="Dashboard"
                style={{
                  width: "25px",
                }}
              />
            </div>
            <div>
              <p>Category</p>
            </div>
          </div>
        </Link>
        <Link to="/admin/Product">
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
                src={Supplier}
                alt="Dashboard"
                style={{
                  width: "25px",
                }}
              />
            </div>
            <div>
              <p>Product</p>
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
                alt="Dashboard"
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
        <Link to="/admin/users">
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
                src={Multipleusers}
                alt="Dashboard"
                style={{
                  width: "25px",
                }}
              />
            </div>
            <div>
              <p>Users</p>
            </div>
          </div>
        </Link>
        <Link to="/admin/supplier">Supplier</Link>
      </aside>
      <div className="content">
        <header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: " 10px",
            }}
          >
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
            <div>OneShop</div>
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
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
}

// End of Product
