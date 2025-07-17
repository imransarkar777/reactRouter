import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact"
// import { children } from "react";
// import Footer from "./Components/Footer/footer";
import About from "./Components/About/About";

const root = document.getElementById("root");

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/header",
        element: <Header></Header>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
      // {
      //   path: "/footer",
      //   element: <Footer></Footer>
      // },
    ]
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);
