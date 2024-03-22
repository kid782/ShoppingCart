import styled from "styled-components";
import { mediaUp } from "../../style/abstracts/breakpoints";

export const ProdAndFilterHolder = styled.div`
    margin: 0 auto;
    @media ${mediaUp.sm} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr auto;
		margin-bottom: 100px;
    }
`