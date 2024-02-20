import RobotoThin from "../assets/fonts/Roboto-Thin.woff";
import RobotoThin2 from "../assets/fonts/Roboto-Thin.woff2";
import RobotoRegular from "../assets/fonts/Roboto-Regular.woff";
import RobotoRegular2 from "../assets/fonts/Roboto-Regular.woff2";
import RobotoMedium from "../assets/fonts/Roboto-Medium.woff";
import RobotoMedium2 from "../assets/fonts/Roboto-Medium.woff2";
import RobotoBold from "../assets/fonts/Roboto-Bold.woff";
import RobotoBold2 from "../assets/fonts/Roboto-Bold.woff2";

export const fontFaces = `@font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin2}) format('woff2'),
        url(${RobotoThin}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular2}) format('woff2'),
        url(${RobotoRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium2}) format('woff2'),
        url(${RobotoMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold2}) format('woff2'),
        url(${RobotoBold}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`