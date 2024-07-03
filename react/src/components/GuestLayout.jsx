// import { Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";

// export default function GuestLayout() {
//   const { user, token } = useStateContext();

//   if (token) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div id="guestLayout">
//       <Outlet />
//     </div>
//   );
// }

// // update 01
// import { Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";

// export default function GuestLayout() {
//   const { token, user } = useStateContext();

//   if (token) {
//     return user.role === "admin" ? (
//       <Navigate to="/admin" />
//     ) : (
//       <Navigate to="/staff" />
//     );
//   }

//   return (
//     <div id="guestLayout">
//       <Outlet />
//     </div>
//   );
// }

// The Last Code update
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
  const { user, token } = useStateContext();

  if (token) {
    return user.role === "admin" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/staff" />
    );
  }

  return (
    <div id="guestLayout">
      <Outlet />
    </div>
  );
}
