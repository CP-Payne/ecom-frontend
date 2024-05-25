import SearchBar from "../components/SearchBar.jsx";
import {useEffect, useState} from "react";
import CategoryFilter from "../components/CategoryFilter.jsx";
import axios from "axios";

const ProductList = () => {

    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/categories")
            .then((response) => {
                console.log(response.data)
                setCategoryList(response.data)
            })
            .catch((error) => {
                console.error("There was an error fetching the categories.", error);
            })
    }, []);



    return (
        <div>
            <div className="pt-5 items-center md:flex md:justify-between md:pr-7 md:pl-7 md:pt-5">
                <SearchBar setSearchQuery={setSearchQuery} />
                <CategoryFilter setCategory={setCategory} categoryList={categoryList} />
            </div>
            <p>List products here</p>
        </div>
    )
}
export default ProductList
