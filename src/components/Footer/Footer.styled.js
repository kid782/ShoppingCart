import { styled } from "styled-components";
import { colors } from "../../style/abstracts/variables";
import { H3 } from "../../style/typography/typography";

export const FooterHolder = styled.footer`
	background-color: ${colors.lightGray};
	border-top: 1px solid ${colors.gray};
	color: ${colors.gray};
`

export const FooterTop = styled.div`
	width: 100%;
	padding: 40px 0;
`

export const FooterBottom = styled.div`
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid ${colors.midGray};
	border-radius: 1px;
`


export const FooterHeading = styled(H3)`
	margin-bottom: 30px;
	color: ${colors.darkGray};
`

export const FooterItem = styled.li`
	&:not(:last-child) {
		margin-bottom: 15px;
	}
`