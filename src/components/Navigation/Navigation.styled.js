import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, transitions } from "../../style/abstracts/variables";
import { textLargeCSSProps } from "../../style/typography/typography";
import { mediaUp, mediaDown } from "../../style/abstracts/breakpoints";

export const NavLink = styled(BaseNavLink)`
	display: block;
	${textLargeCSSProps};
	color: ${colors.gray};
	text-decoration: none;
	&.active {
		font-weight: bold;
	}
	@media ${mediaDown.sm} {
		border-bottom: 1px solid ${colors.gray};
		padding: 10px 25px;
		font-size: 24px;
		&.active {
			background-color: ${colors.gray};
			color: ${colors.white};
		}
	}
`;

export const Nav = styled.nav`
	@media ${mediaUp.sm} {
		display: flex;
		gap: 50px;
	}
`

export const NavHolder = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;
	justify-content: space-between;
`;

export const NavLogo = styled.div`
	color: ${colors.gray};
	font-size: 32px;
	font-weight: bold;
	font-family: sans-serif;
`

export const MobileNavButton = styled.button`
	@media ${mediaUp.sm} {
		display: none;
	}
`

export const NavAndCartHolder = styled.div`
	display: flex;
	width: 55%;
	justify-content: space-between;
	transition: opacity ${transitions.default}, visibility ${transitions.default};
	@media ${mediaDown.sm} {
		display: block;
		opacity: ${props => props.$active ? '1' : '0'};
		visibility: ${props => props.$active ? 'visible' : 'hidden'};
		position: fixed;
		top: 96px;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${colors.white};
		border-top: 1px solid ${colors.gray};
		z-index: 10;
	}
`