import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages/Homepage.jsx";
import ShoppingPage from "../pages/ShoppingPage.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import { GlobalCSS } from "../style/global.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/shopping-page",
    element: <ShoppingPage />,
  },
]);

const RouteProvider = () => {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={router} />
    </>
  )
};

export default RouteProvider;
