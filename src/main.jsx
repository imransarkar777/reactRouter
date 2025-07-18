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
import Contact from "./Components/Contact/Contact";
// import { children } from "react";
// import Footer from "./Components/Footer/footer";
import Users from "./Components/Users/Users";
import About from "./Components/About/About";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
const root = document.getElementById("root");

const router = new createBrowserRouter([
  { 
    path: "/",
    element: <Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/header",
        element: <Header></Header>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userID",
        loader: ( {params} ) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path : "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts ></Posts>
      },
      {
        path : "/post/:postID",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element : <PostDetails></PostDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);
