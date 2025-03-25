import React from "react";
import { Image } from "react-bootstrap";
const CstmImage = ({src, alt, className}) => {
    return (
        <Image src={src} alt={alt} className={className}></Image>
    )
}
export default CstmImage