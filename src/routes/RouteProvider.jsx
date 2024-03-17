import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../app.jsx";
import ShoppingPage from "../pages/shopping-page/ShoppingPage.jsx";
import Homepage from "../pages/homepage/Homepage.jsx";
import PageNotFound from "../pages/page-not-found/PageNotFound.jsx";
import { GlobalCSS } from "../style/GlobalCSS.jsx";
import { getHomepageData, getShoppingPageData } from "../api/products.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
	children: [
		{
			index: true,
			element: <Homepage />,
			loader: getHomepageData
		},
		{
			path: "/shopping-page",
			element: <ShoppingPage />,
			loader: getShoppingPageData
		},
	]
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

