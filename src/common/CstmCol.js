import React from "react";
import { Col } from "react-bootstrap";
const CstmCol = ({className, children, ...rest}) => {
return(
        <Col className={className} {...rest}>{children}</Col>
    )
}
export default CstmCol