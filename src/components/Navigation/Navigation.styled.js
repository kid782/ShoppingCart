import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style/abstracts/variables";
import { textLargeCSSProps } from "../../style/typography/typography";

export const NavLink = styled(BaseNavLink)`
	${textLargeCSSProps};
	color: ${colors.gray};
	text-decoration: none;
	&.active {
		font-weight: bold;
	}
`;

export const Nav = styled.nav`
	display: flex;
	gap: 50px;
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
`