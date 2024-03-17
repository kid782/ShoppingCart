import PropTypes from "prop-types";
import { FilterButton, FiltersTitle } from "./Filter.styled";
import { useState } from "react";

const Filter = ({categories, products, setProducts}) => {
    const [activeCategoryId, setActiveCategoryId] = useState(0);

    function handleFilter(category) {
      setActiveCategoryId(category.id)
      setProducts(products.filter(product => product.category === category.name));
    }
    
    function handleFilterReset() {
      setActiveCategoryId(0);
      setProducts(products);
    }

    return (
      <div>
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
          </FilterButton>)
        })}
        <button onClick={handleFilterReset}>Clear filters</button>
      </div>
    )
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }))
}

export default Filter;