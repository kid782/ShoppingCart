import Wrapper from "../wrapper/Wrapper";
import PropTypes from "prop-types";
import { ProductsHolder, ProductsItems } from "./Products.styled";
import Product, { productShape } from "../product/Product";

const Products = ({products}) => {
     return (
        <ProductsHolder>
            <Wrapper>
                <ProductsItems>
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </ProductsItems>
            </Wrapper>
        </ProductsHolder>
     )
}

Products.propTypes = {
    products: PropTypes.arrayOf(productShape)
}

export default Products;