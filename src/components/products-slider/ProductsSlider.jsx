import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, ProductsHolder, SwiperImageHolder, ProductsTitle, SwiperHolder } from "./ProductsSlider.styled";
import Wrapper from "../wrapper/Wrapper";
import PropTypes from "prop-types";

const Products = ({products, title}) => {
	return (
		<ProductsHolder>
			<Wrapper>
				<ProductsTitle>{title}</ProductsTitle>
				<SwiperHolder>
					<Swiper
						modules={[Pagination, Autoplay]}
						autoplay= {{delay: 5000}}
						pagination= {{ clickable: true }}
						slidesPerView= {1}
						spaceBetween= {40}
						breakpoints={{
							768: {
								slidesPerView: 3,
								spaceBetween: 20
							}
						}}
						autoHeight={false}
					>
						{products.map(item => (
							<SwiperSlide key={item.id}>
								<SwiperImageHolder>
									<img src={item.image} />
									<span>{item.title}</span>
									<span>{`$${item.price}`}</span>
								</SwiperImageHolder>
							</SwiperSlide>
						))}
					</Swiper>
				</SwiperHolder>
			</Wrapper>
		</ProductsHolder>
	)
}

const productShape = {
	id: PropTypes.number,
	title: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	category: PropTypes.string,
	image: PropTypes.string,
	rating: PropTypes.shape({
		rate: PropTypes.number,
		count: PropTypes.number
	})
}

Products.propTypes = {
	title: PropTypes.string,
	products: PropTypes.arrayOf(PropTypes.shape(productShape))
}

export default Products;