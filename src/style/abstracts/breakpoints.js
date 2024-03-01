const breakpointsUp = {
    sm: "768px",
    md: "992px",
    lg: "1280px",
    xl: "1440px"
}

const breakpointsDown = {
	sm: "767px",
    md: "991px",
    lg: "1279px",
    xl: "1439px"
}

export const mediaDown = {
    sm: `(max-width: ${breakpointsDown.sm})`,
    md: `(max-width: ${breakpointsDown.md})`,
    lg: `(max-width: ${breakpointsDown.lg})`,
    xl: `(max-width: ${breakpointsDown.xl})`
}

export const mediaUp = {
    sm: `(min-width: ${breakpointsUp.sm})`,
    md: `(min-width: ${breakpointsUp.md})`,
    lg: `(min-width: ${breakpointsUp.lg})`,
    xl: `(min-width: ${breakpointsUp.xl})`
}