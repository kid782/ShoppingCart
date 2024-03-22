import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { getProductsByCategory, getAllProducts } from "../../api/products";
import { FilterHolder, FilterButton, ClearFilterButton, FiltersTitle } from "./Filter.styled";
import AccordionPanel from "../../components/accordion/AccordionPanel";
import { productShape } from "../../components/product/Product";
import RangeFilter from "./components/range-filter/RangeFilter";

const Filter = ({initLoadProducts, queryParams, setQueryParams, categories, setProducts, setSearchQuery}) => {
	const [activeCategory, setActiveCategory] = useState("");
	const categoryParam = queryParams?.get("category");

    const handleCategoryFilter = (category) => {
		setSearchQuery("");
		setQueryParams(queryParams => {
			queryParams.set("category", category);
			queryParams.get("search") && queryParams.set("search", "");
			return queryParams;
		});
		setActiveCategory(category);
		getProductsByCategory(category).then((res) => {
			setProducts(res);
		})
    }

    const handleFilterReset = () => {
		setSearchQuery("");
		setActiveCategory("");
		getAllProducts().then((res) => {
			setProducts(res);
		})
		setQueryParams("");
    }

	useEffect(() => {
		if (categoryParam) setActiveCategory(categoryParam);
	}, [categoryParam, setActiveCategory])

    return (
		<FilterHolder>
			<FiltersTitle>Filters</FiltersTitle>
			<AccordionPanel title="By category" spacing={10} expandedByDefault={true}>
					{categories.map(item => {
				const formattedCategory = (
				item.charAt(0).toUpperCase() +
				item.slice(1)
			)
			return (
			// eslint-disable-next-line react/jsx-key
			<FilterButton
				$active = {activeCategory === item? true : false}
				onClick={() => handleCategoryFilter(item)}>
				{formattedCategory}
				<FontAwesomeIcon icon={faChevronLeft} />
			</FilterButton>)
			})}
			</AccordionPanel>
			<AccordionPanel title="By price">
				<RangeFilter initLoadProducts={initLoadProducts} />
			</AccordionPanel>
			<ClearFilterButton onClick={handleFilterReset}>Clear filters</ClearFilterButton>
		</FilterHolder>
    )
}

Filter.propTypes = {
	initLoadProducts: PropTypes.arrayOf(productShape),
	categories: PropTypes.arrayOf(PropTypes.string),
	setProducts: PropTypes.func.isRequired,
	setSearchQuery: PropTypes.func.isRequired,
	queryParams: PropTypes.object,
	setQueryParams: PropTypes.func.isRequired
};

export default Filter;