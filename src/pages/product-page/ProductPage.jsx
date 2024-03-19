import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
	const { productName } = useLoaderData();
	return (
		<div>
			Product page { productName }
		</div>
	);
};

export default ProductPage;
