import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Test from "./Test.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title="Hellooo" />,
    children: [{ path: "test", element: <Test /> }],
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
