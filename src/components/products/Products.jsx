import PropTypes from "prop-types";
import { ProductsHolder, ProductsItems } from "./Products.styled";
import Product, { productShape } from "../product/Product";

const Products = ({products}) => {
     return (
        <ProductsHolder>
			<ProductsItems>
				{products.length > 0 ? products.map(product => (
					<Product key={product.id} product={product} />
				)) :
					<div>No search results</div>
				}
			</ProductsItems>
        </ProductsHolder>
     )
}

Products.propTypes = {
    products: PropTypes.arrayOf(productShape)
}

export default Products;