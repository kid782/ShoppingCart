import { styled } from "styled-components";

export const RangeHolder = styled.div`
	display: block;
`

export const RangeItem = styled.div`
	display: flex;
	gap: 10px;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
`