import PropTypes from "prop-types";
import { ProductsCard } from "./Product.styled";

const Product = ({product}) => {
    return (
        <ProductsCard>
            <img src={product.image} />
            <div>{product.title}</div>
        </ProductsCard>
    )
}

export const productShape = PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
        count: PropTypes.number,
        rate: PropTypes.number
    }),
    title: PropTypes.string
})

Product.propTypes = {
    product: productShape
}

export default Product;