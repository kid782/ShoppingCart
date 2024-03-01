import { styled } from "styled-components";
import { mediaUp, mediaDown } from "../../../../style/abstracts/breakpoints";

export const SupportHolder = styled.div`
	flex: 1 0 auto;
	@media ${mediaDown.lg} {
		max-width: 430px;
	}
`

export const SupportItems = styled.div`
	@media ${mediaUp.sm} {
		display: grid;
		grid-template-columns: auto auto;
		column-gap: 10%;
	}
`