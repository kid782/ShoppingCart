import styled from "styled-components";
import { mediaUp } from "../../style/abstracts/breakpoints";

export const ProductsHolder = styled.div`
    width: 100%;
	margin-bottom: 60px;
`

export const ProductsItems = styled.div`
    margin: 0 auto;
	display: grid;
	grid-template-columns: repeat( auto-fill, minmax(200px, 1fr));
	gap: 20px;
    @media ${mediaUp.md} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
`