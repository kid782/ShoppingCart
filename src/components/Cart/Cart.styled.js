import { styled } from "styled-components";
import { colors } from "../../style/abstracts/variables";
import { textLargeCSSProps } from "../../style/typography/typography";

export const CartHolder = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const CartCounter = styled.span`
	${textLargeCSSProps};
	color: ${colors.gray};
`;