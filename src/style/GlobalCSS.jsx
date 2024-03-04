import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./typography/fonts";
import { colors, transitions } from "./abstracts/variables";
import Reset from "./layout/reset";

export const GlobalStyles = createGlobalStyle`
    body {
		color: ${colors.black};
        ${fontFaces};
        font-family: 'Roboto', sans-serif;
    }
	#root {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
	main {
		overflow: hidden;
	}
	.svg-inline--fa {
		height: 25px;
		width: 25px;
		color: ${colors.gray};
		transition: color ${transitions.default};
		&:hover {
			color: ${colors.darkGray};
		}
	}
	.scroll-disabled {
		position: fixed;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
	.swiper-slide {
		inset: 1px 0;
		height: auto;
	}
`

export const GlobalCSS = () => {
    return (
        <>
			<Reset />
            <GlobalStyles />
        </>
    )
}