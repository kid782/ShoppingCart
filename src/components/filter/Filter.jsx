import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FilterHolder, FilterButton, ClearFilterButton } from "./Filter.styled";
import { getProductsByCategory, getAllProducts } from "../../api/products";

const Filter = ({categories, setProducts, activeCategoryId, setActiveCategoryId, setSearchQuery}) => {
    const handleFilter = (category) => {
		setSearchQuery("");
		setActiveCategoryId(category.id);
		getProductsByCategory(category.name).then((res) => {
			setProducts(res);
		})
    }

    const handleFilterReset = () => {
		setSearchQuery("");
		setActiveCategoryId(0);
		getAllProducts().then((res) => {
			setProducts(res);
		})
    }

    return (
      <FilterHolder>
			{categories.map(item => {
				const formattedCategory = (
				item.name.charAt(0).toUpperCase() +
				item.name.slice(1)
			)
			return (
			<FilterButton
				$active = {activeCategoryId === item.id ? true : false}
				key={item.id}
				onClick={() => handleFilter(item)}>
				{formattedCategory}
				<FontAwesomeIcon icon={faChevronLeft} />
			</FilterButton>)
			})}
			<ClearFilterButton onClick={handleFilterReset}>Clear filters</ClearFilterButton>
      </FilterHolder>
    )
}

Filter.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string
	})),
	setProducts: PropTypes.func.isRequired,
	activeCategoryId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	setActiveCategoryId: PropTypes.func.isRequired,
	setSearchQuery: PropTypes.func.isRequired,
};

export default Filter;