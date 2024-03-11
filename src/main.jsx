import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/company-profile",
    element: <ProfilePage />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
