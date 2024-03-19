import { Input } from "./Search.styled";

const Search = ({searchValue, handleSearch}) => {
    return (
        <Input value={searchValue} onChange={handleSearch} type="search" placeholder="Search for a product" />
    )
}

export default Search;