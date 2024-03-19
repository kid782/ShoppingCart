import { styled } from "styled-components";
import { textLargeCSSProps } from "../../style/typography/typography";
import { colors } from "../../style/abstracts/variables";

export const Input = styled.input`
	width: 100%;
	grid-column: 2 / 3;
	padding: 10px;
	border: 1px solid ${colors.darkGray};
    border-radius: 8px;
	${textLargeCSSProps};
	margin-bottom: 30px;
`