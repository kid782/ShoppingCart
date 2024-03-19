import styled from "styled-components";
import { colors } from "../../style/abstracts/variables";
import { mediaDown } from "../../style/abstracts/breakpoints";
import { textMediumCSSProps } from "../../style/typography/typography";
import { Link } from "react-router-dom";

export const ProductsCard = styled.div`
    border: 1px solid ${colors.darkGray};
    border-radius: 25px;
    padding: 20px;
	@media ${mediaDown.sm} {
		margin-bottom: 20px;
		max-width: 100%;
	}
`

export const ProductImage = styled.img`
	height: 150px;
	width: 100%;
	object-fit: contain;
	margin-bottom: 15px;
`

export const ProductTitle = styled(Link)`
	display: block;
	${textMediumCSSProps};
	margin-bottom: 10px;
	color: ${colors.black};
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`

export const ProductCategory = styled.span`
	display: inline-block;
	margin-top: 10px;
	padding: 5px 10px;
	border-radius: 5px;
	background-color: ${colors.darkGray};
	color: ${colors.white};
`