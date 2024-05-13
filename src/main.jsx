import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/purchase/:id",
        element: <Purchase />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
