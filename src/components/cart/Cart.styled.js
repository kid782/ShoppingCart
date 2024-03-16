import { styled } from "styled-components";
import { colors } from "../../style/abstracts/variables";
import { textLargeCSSProps } from "../../style/typography/typography";
import { mediaDown, mediaUp } from "../../style/abstracts/breakpoints";

export const CartHolder = styled.div`
	@media ${mediaUp.sm} {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	@media ${mediaDown.sm} {
		svg {
			height: 40px;
			width: 40px;
		}
	}
`;

export const CartCounter = styled.span`
	${textLargeCSSProps};
	color: ${colors.gray};
	@media ${mediaDown.sm} {
		display: none;
	}
`;

export const CartButton = styled.button`
	@media ${mediaDown.sm} {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 10px 25px;
		border-bottom: 1px solid ${colors.gray};
	}
`