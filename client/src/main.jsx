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
import UserHome from './Components/User/UserHome';
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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);