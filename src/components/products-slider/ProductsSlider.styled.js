import { styled } from 'styled-components';
import { Swiper as baseSwiper, SwiperSlide as baseSwiperSlide } from 'swiper/react';
import { colors } from "../../style/abstracts/variables";
import { mediaDown } from "../../style/abstracts/breakpoints";
import { H2 } from "../../style/typography/typography";

export const Swiper = styled(baseSwiper)`
	display: block;
	padding-bottom: 40px;
`

export const SwiperSlide = styled(baseSwiperSlide)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: auto;
	& img {
		width: 80%;
		height: 250px;
		object-fit: contain;
	}
`
export const ProductsTitle = styled(H2)`
	margin-bottom: 32px;
	text-align: center;
`

export const ProductsHolder = styled.div`
	margin-bottom: 100px;
	@media ${mediaDown.sm} {
		margin-bottom; 50px;
	}
`
export const SwiperImageHolder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	padding: 25px;
	border-radius: 25px;
	border: 1px solid ${colors.darkGray};
	text-align: center;
	box-sizing: border-box;
	height: calc(100% - 2px);
`

export const SwiperHolder = styled.div`
	max-width: 800px;
	margin: 0 auto;
`