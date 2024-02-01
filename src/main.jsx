import React from "react";
import ReactDOM from "react-dom/client";
import About from "./Components/About";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Layouy from "./Layout";
import "./index.css";
import handleApi from "./HandleApi";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouy />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { loader: handleApi, path: "/project", element: <Project /> },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
