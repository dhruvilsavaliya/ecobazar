import React from "react";
import CstmButton from '../common/CstmButton'
import Input from "./Input";
import { InputGroup } from "react-bootstrap";
const CstmInputGroup = ({type, placeholder, variant, id, btnText, className}) => {
  return (
      <InputGroup className="position-relative">
        <Input placeholder={placeholder} type={type} className={`border border-1 border-secondary-100 bg-white ${className}`}/>
        <CstmButton variant={variant} id={id} className={`text-white position-absolute end-0 ${className}`}>
          {btnText}
        </CstmButton>
      </InputGroup>
  )
}
export default CstmInputGroup