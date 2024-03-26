import { useState, useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import Products from "../../components/products/Products";
import Filter from "../../components/filter/Filter";
import Wrapper from "../../components/wrapper/Wrapper";
import Search from "../../components/search/Search";
import { ProdAndFilterHolder } from "./ShoppingPage.styled";

const ShoppingPage = () => {
	const { products: allProducts, categories }  = useLoaderData();
	const [queryParams, setQueryParams] = useSearchParams();
	const [products, setProducts] = useState(allProducts);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		setProducts(allProducts);
	}, [queryParams, allProducts])

	return (
	<>
		<Wrapper>
			<ProdAndFilterHolder>
				<Search
				queryParams={queryParams}
				setQueryParams={setQueryParams}
				searchValue={searchQuery}
				allProducts={allProducts}
				setProducts={setProducts}
				setSearchQuery={setSearchQuery}
				/>
				<Filter
				initLoadProducts={allProducts}
				queryParams={queryParams}
				setQueryParams={setQueryParams}
				categories={categories}
				setProducts={setProducts}
				setSearchQuery={setSearchQuery}
				/>
				<Products products={products} />
			</ProdAndFilterHolder>
		</Wrapper>
	</>
	);
};

export default ShoppingPage;
