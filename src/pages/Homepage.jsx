import Hero from "../components/hero/Hero";
import ProductsSlider from "../components/products-slider/ProductsSlider";
import { useLoaderData } from "react-router-dom";

const Homepage = () => {
	const { productsOnSale, popularProducts } = useLoaderData();
	return (
		<>
			<Hero />
			<ProductsSlider title="Products on a special sale!" products={productsOnSale} />
			<ProductsSlider title="Most popular" products={popularProducts} />
		</>
	);
};

export default Homepage;
