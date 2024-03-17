import Products from "../../components/products/Products";
import Filter from "../../components/filter/Filter";
import Wrapper from "../../components/wrapper/Wrapper";
import Search from "../../components/search/Search";
import { v4 as uuidv4 } from "uuid";
import { ProdAndFilterHolder } from "./ShoppingPage.styled";
import { useLoaderData } from "react-router-dom";
import { useState, useMemo } from "react";

const ShoppingPage = () => {
	const productsData = useLoaderData();
	const allProducts = productsData.products;
	const [filteredProducts, setFilteredProducts] = useState(allProducts);
	const categories = useMemo(() => {
		const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
		const categoriesWithIds = uniqueCategories.map(category => (
			{ name: category, id: uuidv4()}
		))
		return categoriesWithIds;
	}, [])
	return (
    	<>
		<Wrapper>
			<ProdAndFilterHolder>
				<Search />
				<Filter categories={categories} products={allProducts} setProducts={setFilteredProducts} />
				<Products products={filteredProducts} />
			</ProdAndFilterHolder>
		</Wrapper>
    	</>
	);
};

export default ShoppingPage;
