import { styled } from "styled-components";

export const OurStoresHolder = styled.div`
	max-width: 300px;
`

export const AddressItem = styled.span`
	display: block;
	margin-bottom: 15px;
	font-weight: ${props => props.bold ? 'bold' : 'normal'};
`