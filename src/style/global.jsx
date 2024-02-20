import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./fonts";
import { Reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    body {
        ${fontFaces};
        font-family: 'Roboto', sans-serif;
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