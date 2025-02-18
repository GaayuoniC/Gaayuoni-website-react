import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootLayout } from "../src/Pages/RootLayout";
import { HomePage } from "../src/Pages/HomePage";
import { AboutMe } from "./Pages/AboutMe";
import { Travels } from "./Pages/Travels";
import { Contact } from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "aboutme", element: <AboutMe /> },
      { path: "travels", element: <Travels /> },
      { path: "contact", element: <Contact /> },
      { path: "homepage", element: <HomePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
