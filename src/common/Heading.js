import React from "react";
import CstmRow from "./CstmRow";
import CstmCol from "./CstmCol";
import CstmButton from "./CstmButton";

const Heading = ({ title, text, icon, textAlign, ...rest }) => {
    return (
        <>
            <CstmRow className="heading">
                {title && 
                    <CstmCol {...rest}>
                            <h2 className={`title text-secondary mb-0 text-capitalize ${textAlign ? `text-${textAlign}` : 'tex-start'}`}>{title}</h2>
                    </CstmCol>
                }
                {text &&
                    <CstmCol className="text-end" {...rest}>
                            <CstmButton variant="transparent" className="text-primary fs-6 fw-500 lh-24 p-0" >
                                {text}
                                {icon}
                            </CstmButton>
                    </CstmCol>
                }
            </CstmRow>
        </>
    );
};

export default Heading;
