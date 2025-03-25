import React from "react";
import CstmImage from "./CstmImage";
import PlantImage from '../Assets/images/plant.svg'
const Logo = ({text, ...rest}) => {
    return (
        <div className="d-flex align-items-center" {...rest}>
            <CstmImage src={PlantImage} alt="palnt"/>
            <h3 className={`mb-0 ms-2 d-inline-block align-middle fw-500 ${text ? `text-${text}` : 'text-secondary-900'}`}>Ecobazar</h3>
        </div>
    )
}
export default Logo