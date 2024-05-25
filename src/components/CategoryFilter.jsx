import PropTypes from "prop-types";
import axios from "axios";


const CategoryFilter = ({ setCategory, categoryList }) => {

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }


    return (
        <div className="flex flex-col md:flex-row md:items-center ml-4 mr-4 mb-4">
            <label htmlFor="category" className="text-gray-700 pr-3 dark:text-gray-300 mb-2">Category:</label>
            <select id="category" onChange={handleCategoryChange} className="w-full md:w-[15rem] p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white" >
                <option value="">All</option>
                {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
    )
}

CategoryFilter.propTypes = {
    setCategory: PropTypes.func.isRequired,
    categoryList: PropTypes.array,
}

export default CategoryFilter
