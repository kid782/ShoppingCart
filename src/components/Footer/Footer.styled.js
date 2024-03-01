import { styled } from "styled-components";
import { colors, transitions } from "../../style/abstracts/variables";
import { H3 } from "../../style/typography/typography";
import { mediaDown, mediaUp } from "../../style/abstracts/breakpoints";
import { NavLink } from "react-router-dom";

export const FooterHolder = styled.footer`
	background-color: ${colors.lightGray};
	border-top: 1px solid ${colors.gray};
	color: ${colors.gray};
`

export const FooterTop = styled.div`
	width: 100%;
	padding: 40px 0;
	@media ${mediaUp.sm} {
		display: flex;
		flex-wrap: wrap;
		gap: 30px 10%;
	}
`

export const FooterBottom = styled.div`
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid ${colors.midGray};
	border-radius: 1px;
	@media ${mediaUp.sm} {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`


export const FooterHeading = styled(H3)`
	margin-bottom: 30px;
	color: ${colors.darkGray};
`

export const FooterText = styled.div`
	display: block;
	margin-bottom: 15px;
	font-weight: ${props => props.$bold ? 'bold' : 'normal'};
`

export const FooterItem = styled.div`
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`

export const FooterLink = styled(NavLink)`
	color: ${colors.gray};
	margin-bottom: 15px;
	text-decoration: none;
	transition: opacity ${transitions.default};
	&:hover {
		opacity: 0.8;
	}
`