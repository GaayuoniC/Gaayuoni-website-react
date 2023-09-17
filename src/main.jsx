import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootLayout } from "../src/Pages/RootLayout";
import { HomePage } from "../src/Pages/HomePage";
import { AboutMe } from "./Pages/AboutMe";
import {Cv} from "./Pages/Cv"
import {Contact} from "./Pages/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> },
    {path: "aboutme", element: <AboutMe/>}, {path: "cv", element:<Cv/>},{
      path: "contact", element: <Contact/>
    }
  
  
  ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
