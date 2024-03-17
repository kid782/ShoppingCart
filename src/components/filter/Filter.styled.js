import styled from "styled-components";
import { H4 } from "../../style/typography/typography";

export const FiltersTitle = styled(H4)`
    margin-bottom: 20px;
`

export const FilterButton = styled.button`
    display: block;
    margin-bottom: 20px;
    text-align: left;
    font-weight: ${props => props.$active ? 'bold' : 'normal'};
`