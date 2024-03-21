import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { getProductsByCategory, getAllProducts } from "../../api/products";
import { FilterHolder, FilterButton, ClearFilterButton, FiltersTitle } from "./Filter.styled";
import AccordionPanel from "../../components/accordion/AccordionPanel";

const Filter = ({queryParams, setQueryParams, categories, setProducts, activeCategory, setActiveCategory, setSearchQuery}) => {

	const categoryParam = queryParams?.get("category");

    const handleFilter = (category) => {
		setSearchQuery("");
		setQueryParams(queryParams => {
			queryParams.set("category", category);
			queryParams.set("search", "");
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
				onClick={() => handleFilter(item)}>
				{formattedCategory}
				<FontAwesomeIcon icon={faChevronLeft} />
			</FilterButton>)
			})}
			</AccordionPanel>
			<AccordionPanel title="By price">
				<input type="range" />
			</AccordionPanel>
			<ClearFilterButton onClick={handleFilterReset}>Clear filters</ClearFilterButton>
		</FilterHolder>
    )
}

Filter.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
	setProducts: PropTypes.func.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	setActiveCategory: PropTypes.func.isRequired,
	setSearchQuery: PropTypes.func.isRequired,
	queryParams: PropTypes.object,
	setQueryParams: PropTypes.func.isRequired
};

export default Filter;