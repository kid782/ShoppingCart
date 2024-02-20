import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./typography/fonts";
import { colors } from "./abstracts/variables";
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
`

export const GlobalCSS = () => {
    return (
        <>
			<Reset />
            <GlobalStyles />
        </>
    )
}