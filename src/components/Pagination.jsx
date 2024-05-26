import PropTypes from "prop-types";

const Pagination = ({page, setPage, totalPages}) => {

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div className="flex justify-center items-center mt-6">
            <button onClick={handlePrevious} disabled={page === 1} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50">&lt;</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={handleNext} disabled={page===totalPages} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"> &gt; </button>
        </div>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
}

export default Pagination
