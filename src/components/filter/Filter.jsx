import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { FilterHolder, FilterButton, ClearFilterButton, FiltersTitle } from "./Filter.styled";
import AccordionPanel from "../../components/accordion/AccordionPanel";
import { productShape } from "../../components/product/Product";
import RangeFilter from "./components/range-filter/RangeFilter";

const Filter = ({setProducts, initLoadProducts, queryParams, setQueryParams, categories, setSearchQuery}) => {
	const minAndMax = { min: 7, max: 1000};
	const [activeCategory, setActiveCategory] = useState("");
	const [rangeValue, setRangeValue] = useState({min: minAndMax.min, max: minAndMax.max});
	const categoryParam = queryParams?.get("category");

    const handleCategoryFilter = (category) => {
		setSearchQuery("");
		setQueryParams(queryParams => {
			queryParams.set("category", category);
			queryParams.get("search") && queryParams.set("search", "");
			return queryParams;
		});
		setActiveCategory(category);
		setRangeValue({ min: minAndMax.min, max: minAndMax.max })
    }

    const handleFilterReset = () => {
		setSearchQuery("");
		setActiveCategory("");
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
				<RangeFilter
				initLoadProducts={initLoadProducts}
				queryParams={queryParams}
				setQueryParams={setQueryParams}
				minAndMax={minAndMax}
				rangeValue={rangeValue}
				setRangeValue={setRangeValue}
				setProducts={setProducts}
				/>
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