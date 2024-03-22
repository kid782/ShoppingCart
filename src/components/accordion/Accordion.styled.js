import styled from "styled-components";
import { H4 } from "../../style/typography/typography";
import { transitions } from "../../style/abstracts/variables";

export const AccordionHolder = styled.div`
    ${props => props.$spacing ? `margin-bottom: ${props.$spacing}px` : ''};
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`

export const AccordionButton = styled.button`
    display: block;
    padding: 10px 0;
	width: 100%;
	text-align: left;
`
export const AccordionContent = styled.div`
    transition: height ${transitions.default};
    overflow: hidden;
`

export const AccordionTitle = styled(H4)`
    display: block;
    font-weight: 600;
    & svg {
        width: 15px;
        height: 15px;
        color: black;
        margin-left: 5px;
    }
`;

export const AccordionContentHolder = styled.div`
    padding: 15px 0;
`