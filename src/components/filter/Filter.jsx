import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FilterHolder, FilterButton, FiltersTitle, FilterAccordHolder, ClearFilterButton } from "./Filter.styled";

const Filter = ({categories, products, setProducts, activeCategoryId, setActiveCategoryId, setSearchQuery}) => {
    const handleFilter = (category) => {
	  setSearchQuery("");
      setActiveCategoryId(category.id)
      setProducts(products.filter(product => product.category === category.name));
    }

    const handleFilterReset = () => {
	  setSearchQuery("");
      setActiveCategoryId(0);
      setProducts(products);
    }

    return (
      <FilterHolder>
        <FilterAccordHolder>
			<FiltersTitle>Filters</FiltersTitle>
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
		</FilterAccordHolder>
      </FilterHolder>
    )
}

Filter.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.shape({
	  id: PropTypes.string,
	  name: PropTypes.string
	})),
	products: PropTypes.array.isRequired,
	setProducts: PropTypes.func.isRequired,
	activeCategoryId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	setActiveCategoryId: PropTypes.func.isRequired,
	setSearchQuery: PropTypes.func.isRequired
};

export default Filter;