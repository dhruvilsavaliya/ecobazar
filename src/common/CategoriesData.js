import React from "react";
import CstmImage from "./CstmImage";
const CategoriesData = ({src, alt, title}) => {
    return (
        <div className="categories-card bg-white mb-4">
            <div className="categories-img mb-16 text-center">
                <CstmImage src={src} alt={alt}/>
            </div>
            <div className="categories-title">
                <h6 className="fs-18 fw-500 text-secondary mb-0 text-center">{title}</h6>
            </div>
        </div>
    )
}
export default CategoriesData