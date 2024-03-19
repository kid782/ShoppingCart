import PropTypes from "prop-types";
import { ProductsCard, ProductImage, ProductTitle, ProductCategory } from "./Product.styled";

const Product = ({product}) => {
	const urlName = product.title.replace(/\s+/g, '-').toLowerCase();
	const url = `/product/${urlName}`
    return (
        <ProductsCard>
            <ProductImage src={product.image} />
            <ProductTitle to={url}>{product.title}</ProductTitle>
			<div>Price: ${product.price}</div>
			<ProductCategory>{product.category}</ProductCategory>
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