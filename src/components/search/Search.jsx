import PropTypes from "prop-types";
import { Input } from "./Search.styled";

const Search = ({setQueryParams, searchValue, setSearchQuery, allProducts, setProducts}) => {

    const handleSearch = (e) => {
		setSearchQuery(e.target.value);
        setQueryParams(searchParams => {
            searchParams.set("search", e.target.value);
            return searchParams;
        })
		const searchResults = allProducts.filter(item =>
			item.title.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setProducts(searchResults)
	}

    return (
        <Input value={searchValue} onChange={handleSearch} type="search" placeholder="Search for a product" />
    )
}

Search.propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    allProducts: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
    setQueryParams: PropTypes.func
};

export default Search;