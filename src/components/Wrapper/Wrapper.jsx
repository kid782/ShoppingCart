import PropTypes from "prop-types";
import { WrapHolder } from "./Wrapper.styled";

const Wrapper = ({children}) => {
    return (
        <WrapHolder>
            {children}
        </WrapHolder>
    )
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Wrapper;