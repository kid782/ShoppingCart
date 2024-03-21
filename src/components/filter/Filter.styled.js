import styled from "styled-components";
import { mediaDown } from "../../style/abstracts/breakpoints";
import { transitions, colors } from "../../style/abstracts/variables";
import { textMediumCSSProps, H3 } from "../../style/typography/typography";

export const FilterButton = styled.button`
    display: flex;
	align-items: center;
	gap: 5px;
    text-align: left;
	${textMediumCSSProps};
	&:not(:last-child) {
		margin-bottom: 20px;
	}
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
	margin-top: 20px;
	font-weight: bold;
	${textMediumCSSProps};
`

export const FiltersTitle = styled(H3)`
	font-weight: 600;
    margin-bottom: 20px;
	padding-bottom: 5px;
	border-bottom: 1px solid black;
`

export const FilterHolder = styled.div`
	max-width: 50%;
	@media ${mediaDown.sm} {
		margin-bottom: 20px;
	}
`