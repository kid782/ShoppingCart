import styled from "styled-components";

import { mediaUp, mediaDown } from "../abstracts/breakpoints";

const lineHeight = 'line-height: 1.3';

export const H1 = styled.h1`
    font-size: 54px;
	${lineHeight};
	@media ${mediaDown.md} {
        font-size: 42px;
    }
	@media ${mediaDown.sm} {
		font-size: 32px;
	}
`
export const H2 = styled.h2`
	font-size: 36px;
	${lineHeight};
	@media ${mediaDown.md} {
		font-size: 32px;
	}
	@media ${mediaDown.sm} {
		font-size: 22px;
	}
`
export const H3 = styled.h3`
	font-size: 24px;
	${lineHeight};
	@media ${mediaDown.md} {
		font-size: 22px;
	}
	@media ${mediaDown.sm} {
		font-size: 16px;
	}
`
export const H4 = styled.h4`
	font-size: 18px;
	${lineHeight};
	@media ${mediaDown.sm} {
		font-size: 14px;
	}
`

export const textSmallCSSProps = `
    font-size: 12px;
    ${lineHeight};
`

export const textMediumCSSProps = `
    font-size: 14px;
    ${lineHeight};
    @media ${mediaUp.sm} {
        font-size: 16px;
    }
`

export const textLargeCSSProps = `
    font-size: 16px;
    ${lineHeight};
    @media ${mediaUp.sm} {
        font-size: 18px;
    }
`