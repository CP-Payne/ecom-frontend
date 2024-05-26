import {PropTypes} from "prop-types";

const ProductCard = ({product}) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:text-white w-[255px] h-[358px]">
            <img  src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">${product.price.toFixed(2)}</p>

        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard
