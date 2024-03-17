import styled from "styled-components";
import { mediaUp } from "../../style/abstracts/breakpoints";

export const ProductsHolder = styled.div`
    width: 100%;
`
    
export const ProductsItems = styled.div`
    margin: 0 auto;
    @media ${mediaUp.sm} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        max-width: 70%;
    }
`