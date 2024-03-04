import { styled, css } from "styled-components";
import { colors, transitions } from "../abstracts/variables";
import { textMediumCSSProps } from "../typography/typography";

export const Button = styled.button`
	margin-top: 20px;
	border: 1px solid ${colors.black};
	border-radius: 24px;
	padding: 12px 20px;
	background-color: ${props => props.secondary ? colors.black : colors.white};
	color: ${props => props.secondary ? colors.white : colors.black};
	${textMediumCSSProps};
	line-height: 1;
	cursor: pointer;
	transition: ${transitions.default} color,
				${transitions.default} background-color,
				${transitions.default} opacity;
	&:hover {
		background-color: ${props => props.secondary ? colors.white : colors.midGray};
		color: ${colors.black};
	}
`

export const primButtonStyles = css`
	text-decoration: none;
	margin-top: 20px;
	border: 1px solid ${colors.black};
	border-radius: 24px;
	padding: 12px 20px;
	background-color: ${colors.white};
	color: ${colors.black};
	${textMediumCSSProps};
	line-height: 1;
	cursor: pointer;
	transition: ${transitions.default} color,
				${transitions.default} background-color,
				${transitions.default} opacity;
	&:hover {
		color: ${colors.black};
		background-color: ${colors.midGray};
	}
`