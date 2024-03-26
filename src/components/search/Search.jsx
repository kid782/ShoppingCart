import PropTypes from "prop-types";
import { Input } from "./Search.styled";
import { useEffect } from "react";

const Search = ({queryParams, setQueryParams, searchValue, setSearchQuery, allProducts, setProducts}) => {
	const searchParams = queryParams.get("search");

    const handleSearch = (e) => {
		const input = e.target.value.toLowerCase();
		setSearchQuery(e.target.value);
        setQueryParams(searchParams => {
            searchParams.set("search", input);
            return searchParams;
        })
		const searchResults = allProducts.filter(item =>
			item.title.toLowerCase().includes(input)
		);
		setProducts(searchResults)
	}

	useEffect(() => {
		if (searchParams) {
			setSearchQuery(searchParams);
		}
	}, [])

    return (
        <Input value={searchValue} onChange={handleSearch} type="search" placeholder="Search for a product" />
    )
}

Search.propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    allProducts: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
    setQueryParams: PropTypes.func.isRequired,
	queryParams: PropTypes.object.isRequired
};

export default Search;