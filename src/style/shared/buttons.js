import styled from "styled-components";
import { colors, transitions } from "../abstracts/variables";
import { textMediumCSSProps } from "../typography/typography";

export const Button = styled.button`
	margin-top: 20px;
	border: 1px solid ${colors.black};
	border-radius: 24px;
	padding: 12px 20px;
	background-color: ${colors.black};
	color: ${colors.white};
	${textMediumCSSProps};
	line-height: 1;
	cursor: pointer;
	transition: ${transitions.default} color,
				${transitions.default} background-color;
	&:hover {
		background-color: ${colors.white};
		color: ${colors.black};
	}
`