import { styled } from "styled-components";
import { Link as BaseLink } from "react-router-dom";
import { primButtonStyles } from "../../style/shared/buttons";
import { colors } from "../../style/abstracts/variables";
import { H2 } from "../../style/typography/typography";
import { mediaDown } from "../../style/abstracts/breakpoints";

export const HeroHolder = styled.div`
	display: block;
	margin-bottom: 100px;
	@media ${mediaDown.sm} {
		margin-bottom: 50px;
	}
`

export const HeroBg = styled.div`
	padding: 140px 0;
	background-image: url('./hero-banner.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const HeroTitle = styled(H2)`
	max-width: fit-content;
	padding: 0 10px;
	margin-bottom: 20px;
	color: ${colors.white};
	text-transform: uppercase;
	& span {
		display: block;
		font-weight: bold;
		margin-bottom: 10px;
	}
`

export const Link = styled(BaseLink)`
	display: inline-block;
	${primButtonStyles};
	margin-top: 15px;
`