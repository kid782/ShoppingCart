import styled from "styled-components";
import { mediaUp } from "../../style/abstracts/breakpoints";
import { H3 } from "../../style/typography/typography";

export const ProdAndFilterHolder = styled.div`
    margin: 0 auto;
    @media ${mediaUp.sm} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr auto;
    }
`

export const FiltersTitle = styled(H3)`
	font-weight: 600;
    margin-bottom: 20px;
	padding-bottom: 5px;
	border-bottom: 1px solid black;
`

export const FiltersHolder = styled.div`
    max-width: 50%;
`