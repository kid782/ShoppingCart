import styled from "styled-components";
import { mediaDown } from "../../style/abstracts/breakpoints";
import { transitions, colors } from "../../style/abstracts/variables";
import { textMediumCSSProps } from "../../style/typography/typography";

export const FilterHolder = styled.div`
	@media ${mediaDown.sm} {
		margin-bottom: 20px;
	}
`

export const FilterButton = styled.button`
    display: flex;
	align-items: center;
	gap: 5px;
    margin-bottom: 20px;
    text-align: left;
	${textMediumCSSProps};
	& svg {
		color: ${colors.black};
		opacity: 0;
		transition: opacity ${transitions.default};
		width: 10px;
		height: 10px;
		${props => props.$active && 'opacity: 1' }
	}
`
export const ClearFilterButton = styled.button`
${textMediumCSSProps};
`