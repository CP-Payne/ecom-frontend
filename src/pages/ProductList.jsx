import SearchBar from "../components/SearchBar.jsx";
import {useEffect, useState} from "react";
import CategoryFilter from "../components/CategoryFilter.jsx";
import axios from "axios";
import ProductCard from "../components/ProductCard.jsx";
import Pagination from "../components/Pagination.jsx";

const ProductList = () => {

    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [pageQueries, setPageQueries] = useState([""]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);


    const fetchProducts = () => {
        axios.get(`http://localhost:8080/products?limit=2&cursor=${pageQueries[page-1]}`)
            .then((response) => {
                const responseData= response.data;
                savePageQuery(responseData['next_cursor'])
                setProducts(responseData['products']);
                setTotalPages(responseData['num_of_pages']);
                console.log(pageQueries);
            })
            .catch((error) => {
                console.error("There was an error fetching products.", error);
            })
    }

    const savePageQuery = (query) => {
        setPageQueries((prevQueries) => {
            if (!prevQueries.includes(query)) {
               return [...prevQueries, query];
            }
            return prevQueries;
        })
    }

    useEffect(() => {
       fetchProducts();
    }, [searchQuery, page]);

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
            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[5rem] ml-4 mr-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
        </div>
    )
}
export default ProductList
