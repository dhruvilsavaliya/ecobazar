import React from "react";
import { Container } from "react-bootstrap";
const CstmContainer = ({className, children,...props}) => {
    return (
        <Container className={className} {...props}>{children}</Container>
    )
}
export default CstmContainer