import React from "react";
import { Button } from "react-bootstrap";
const CstmButton = ({variant, children, className, ...props}) => {
    return(
        <Button variant={variant} className={className} {...props}>{children}</Button>
    )
}
export default CstmButton