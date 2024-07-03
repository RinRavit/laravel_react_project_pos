import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/admin/Dashboard.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ContextProvider } from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={App} />
    </ContextProvider>
  </React.StrictMode>
);
