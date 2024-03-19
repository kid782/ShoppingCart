import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import ShoppingPage from "../pages/shopping-page/ShoppingPage.jsx";
import Homepage from "../pages/homepage/Homepage.jsx";
import ProductPage from "../pages/product-page/ProductPage.jsx";
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
		{
			element: <ProductPage />,
			path:"/product/:productName",
			loader: async ({ params }) => {
				console.log(params.productName);
				return { productName: params.productName }
			}
		}
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

