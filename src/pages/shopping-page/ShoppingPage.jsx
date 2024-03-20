import { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLoaderData } from "react-router-dom";

import Products from "../../components/products/Products";
import Filter from "../../components/filter/Filter";
import Wrapper from "../../components/wrapper/Wrapper";
import Search from "../../components/search/Search";
import AccordionPanel from "../../components/accordion/AccordionPanel";
import { ProdAndFilterHolder, FiltersTitle, FiltersHolder } from "./ShoppingPage.styled";

const ShoppingPage = () => {
	const productsData = useLoaderData();
	const allProducts = productsData.products;

	const [products, setProducts] = useState(allProducts);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategoryId, setActiveCategoryId] = useState(0);

	const categories = useMemo(() => {
		const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
		const categoriesWithIds = uniqueCategories.map(category => (
			{ name: category, id: uuidv4()}
		))
		return categoriesWithIds;
	}, [allProducts])

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		let productsToFilter = allProducts;
		if (activeCategoryId) {
			const activeCategory = categories.find(i => activeCategoryId === i.id);
			productsToFilter = allProducts.filter(i => i.category === activeCategory.name);
		}
		const searchResults = productsToFilter.filter(item =>
			item.title.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setProducts(searchResults)
	}
	return (
	<>
		<Wrapper>
			<ProdAndFilterHolder>
				<Search searchValue={searchQuery} handleSearch={handleSearch} />
				<FiltersHolder>
					<FiltersTitle>Filters</FiltersTitle>
					<AccordionPanel title="By category" spacing={10} expandedByDefault={true}>
						<Filter
							categories={categories}
							setProducts={setProducts}
							activeCategoryId ={activeCategoryId}
							setActiveCategoryId = {setActiveCategoryId}
							setSearchQuery={setSearchQuery}
						/>
					</AccordionPanel>
					<AccordionPanel title="By price">
						<input type="range" />
					</AccordionPanel>
				</FiltersHolder>
				<Products products={products} />
			</ProdAndFilterHolder>
		</Wrapper>
	</>
	);
};

export default ShoppingPage;
