import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../app.jsx";
import ShoppingPage from "../pages/ShoppingPage.jsx";
import Homepage from "../pages/Homepage.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import { GlobalCSS } from "../style/GlobalCSS.jsx";
import { getHomepageData } from "../api/products.js";

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

