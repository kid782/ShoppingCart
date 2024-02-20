import styled from "styled-components";

import { mediaUp } from "./breakpoints";

const lineHeight = 'line-height: 1.3';

export const H1 = styled.h1`
    
`

export const textSmallCSSProps = `
    font-size: 12px;
    ${lineHeight}
`

export const textMediumCSSProps = `
    font-size: 14px;
    ${lineHeight}
    @media ${mediaUp.sm} {
        font-size: 16px;
    }
`

export const textLargeCSSProps = `
    font-size: 16px;
    ${lineHeight}
    @media ${mediaUp.sm} {
        font-size: 18px;
    }
`