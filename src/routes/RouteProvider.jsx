import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage.jsx";
import ShoppingPage from "../pages/ShoppingPage.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import ScrollProvider from "../contexts/ScrollContext.jsx";
import { GlobalCSS } from "../style/GlobalCSS.jsx";

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
    <ScrollProvider>
		<GlobalCSS />
		<RouterProvider router={router} />
	</ScrollProvider>
  )
};

export default RouteProvider;
