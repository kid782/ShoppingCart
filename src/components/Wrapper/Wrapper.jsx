import PropTypes from "prop-types";
import { WrapHolder } from "./styledWrapper";

const Wrapper = ({children}) => {
    return (
        <WrapHolder>
            {children}
        </WrapHolder>
    )
}

Wrapper.propTypes = {
    children: PropTypes.element
}

export default Wrapper;