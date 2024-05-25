import {useState} from "react";
import PropTypes from "prop-types";

const SearchBar = ( {setSearchQuery} ) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        setSearchQuery(query);
    }

    return (
        <div className="flex mb-4 md:self-end ml-4 mr-4">
            <input type="text"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder="Search products..."
                   className="w-full p-2 border rounded-l-lg bg-white md:w-[15rem] dark:bg-gray-700 dark:text-white"
            />
            <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-r-lg">Search</button>
        </div>
    )
}

SearchBar.propTypes = {
    setSearchQuery: PropTypes.func.isRequired,
}


export default SearchBar
