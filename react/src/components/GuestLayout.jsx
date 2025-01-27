

// The Last Code update
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import LOGO_SHOP from "../assets/image/LOGO_SHOP.jpg";

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
