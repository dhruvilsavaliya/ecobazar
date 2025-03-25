import React from "react";
import { Row } from "react-bootstrap";
const CstmRow = ({className, children, ...rest}) => {
    return(
        <Row className={className} {...rest}>{children}</Row>
    )
}
export default CstmRow