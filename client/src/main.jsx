import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./Components/Home/Services";
import Apply from "./Components/Home/Apply";
import Track from "./Components/Home/Track";
import LoginUser from "./Pages/LoginPage";
import RegisterUser from "./Pages/RegistrationPage";
import Scheme from "./Pages/Scheme";
import AdminHome from "./Pages/AdminHome";
import AdminConfirm from "./Pages/AdminConfirmation";
import UserHome from "./Components/User/UserHome";
import ManageApplications from "./Components/Admin/ManageApplications";
import ManageSchemes from "./Components/Admin/ManageSchemes";
import ManageUsers from "./Components/Admin/ManageUsers";
import Applyu from "./Components/User/Apply";
<<<<<<< HEAD
import Tracku from "./Components/User/Track";

=======
>>>>>>> 1c0dfb8aa1516380ed810abf49f5c7ba3fb3d9c0
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/track",
    element: <Track />,
  },
  {
    path: "/login",
    element: <LoginUser />,
  },
  {
    path: "/register",
    element: <RegisterUser />,
  },
  {
    path: "/schemes/:title",
    element: <Scheme />,
  },
  {
    path: "/user",
    element: <UserHome />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
  {
    path: "/admin",
    element: <AdminConfirm />,
  },
  {
    path: "/adminHome/",
    element: <AdminHome />,
  },
  {
    path: "/manageApplications",
    element: <ManageApplications />,
  },
  {
    path: "/manageUsers",
    element: <ManageUsers />,
  },
  {
    path: "/manageSchemes",
    element: <ManageSchemes />,
  },
  {
    path: "/user/apply",
    element: <Applyu />,
  },
<<<<<<< HEAD
  {
    path: "/user/track",
    element: <Tracku />,
  },
=======
>>>>>>> 1c0dfb8aa1516380ed810abf49f5c7ba3fb3d9c0
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
