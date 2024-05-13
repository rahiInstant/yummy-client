import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Root from "./Root.jsx";
import All_Food from "./components/All_Food/All_Food.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import MyProfile from "./components/My_Profile/MyProfile.jsx";
import LogIn from "./components/Log_In_UP_Out/LogIn.jsx";
import Detail from "./components/All_Food/Detail.jsx";
import Purchase from "./components/All_Food/Purchase.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./auth/AuthProvider.jsx";
import Register from "./components/Log_In_UP_Out/Register.jsx";
import { Toaster } from "react-hot-toast";
import Private from "./components/Shared/Private.jsx";
import MyAdd from "./components/My_Profile/MyAdd.jsx";
import MyOrder from "./components/My_Profile/MyOrder.jsx";
import AddItem from "./components/My_Profile/AddItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-food",
        element: <All_Food />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/purchase/:id",
        element: (
          <Private>
            <Purchase />
          </Private>
        ),
      },
      {
        path: "/my-added-items",
        element: <MyAdd />,
      },
      {
        path: "/my-ordered-items",
        element: (
          <Private>
            <MyOrder />
          </Private>
        ),
      },
      {
        path: "/add-item",
        element: (
          <Private>
            <AddItem />
          </Private>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
