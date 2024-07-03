// code working on Category
// import { createBrowserRouter, Navigate } from "react-router-dom";
// import Dashboard from "./pages/admin/Dashboard.jsx";
// import DefaultLayout from "./components/DefaultLayout.jsx";
// import GuestLayout from "./components/GuestLayout.jsx";
// import Login from "./views/Login.jsx";
// import NotFound from "./views/NotFound.jsx";
// import Users from "./views/Users.jsx";
// import UserForm from "./views/UserForm.jsx";
// import RoleStaff from "./components/RoleStaff.jsx";
// import Category from "./pages/admin/Category.jsx";

// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <GuestLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Navigate to="/login" />, // Redirect to login
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <DefaultLayout />, // Admin routes
//     children: [
//       {
//         path: "/admin",
//         element: <Navigate to="/admin/dashboard" />, // Redirect to admin dashboard
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "category",
//         element: <Category />,
//       },
//       {
//         path: "users",
//         element: <Users />,
//       },
//       {
//         path: "users/new",
//         element: <UserForm key="userCreate" />,
//       },
//       {
//         path: "users/:id",
//         element: <UserForm key="userUpdate" />,
//       },
//     ],
//   },
//   {
//     path: "/staff",
//     element: <RoleStaff />, // Staff routes
//     children: [
//       {
//         path: "/staff",
//         element: <Navigate to="/staff/dashboard" />, // Redirect to staff dashboard
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default App;

// The end of code that working with Category

// Code test product
import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound.jsx";
import Users from "./views/Users.jsx";
import UserForm from "./views/UserForm.jsx";
import RoleStaff from "./components/RoleStaff.jsx";
import Category from "./pages/admin/Category.jsx";
import Product from "./pages/admin/Product.jsx";
import DashboardStaff from "./pages/staff/Dashboardstaff.jsx";
import Order from "./pages/staff/Order";
import ListOrder from "./pages/staff/ListOrder";

const App = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />, // Redirect to login
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DefaultLayout />, // Admin routes
    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/dashboard" />, // Redirect to admin dashboard
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "users",
        element: <Users />,
      },

      {
        path: "users/new",
        element: <UserForm key="userCreate" />,
      },
      {
        path: "users/:id",
        element: <UserForm key="userUpdate" />,
      },
    ],
  },
  {
    path: "/staff",
    element: <RoleStaff />, // Staff routes
    children: [
      {
        path: "/staff",
        element: <Navigate to="/staff/dashboard" />, // Redirect to staff dashboard
      },
      {
        path: "dashboard",
        element: <DashboardStaff />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "listorder",
        element: <ListOrder />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default App;
