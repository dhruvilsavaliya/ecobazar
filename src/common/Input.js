import React from "react";
import { Form } from "react-bootstrap";
const Input = ({type, as, placeholder, ariaDescribedby, ariaLabel, className}) => {
    return (
        <Form.Control type={type} as={as} placeholder={placeholder} aria-label={ariaLabel} aria-describedby={ariaDescribedby} className={className}/>
    )
}
export default Input