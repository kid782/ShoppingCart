import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { AccordionHolder, AccordionTitle, AccordionButton, AccordionContent, AccordionContentHolder } from "./Accordion.styled";

const AccordionPanel = ({title, children, spacing, expandedByDefault}) => {
    const [expanded, setExpanded] = useState(expandedByDefault ? true : false);
    const [loaded, setLoaded] = useState(false);
    const contentHeight = useRef(0);

    useEffect(() => {
        setLoaded(true);
        return () => setLoaded(false);
    }, [setLoaded])

    return (
        <AccordionHolder $spacing={spacing}>
            <AccordionButton onClick={() => setExpanded(!expanded)}>
                <AccordionTitle>
                    {title}
                    <FontAwesomeIcon icon={expanded ? faMinus : faPlus} />
                </AccordionTitle>
            </AccordionButton>
            {
            <AccordionContent ref={contentHeight} style={{height: expanded ? `${contentHeight.current.scrollHeight}px` : "0px"}}>
                <AccordionContentHolder>
                    {children}
                </AccordionContentHolder>
            </AccordionContent>
            }
        </AccordionHolder>
    )
}

AccordionPanel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    spacing: PropTypes.number,
    expandedByDefault: PropTypes.bool
}

export default AccordionPanel;