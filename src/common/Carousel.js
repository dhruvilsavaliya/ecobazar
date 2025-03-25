import React from "react";
const Carousel = ({ icon, title, text }) => {
    return (
        <div className="icon-box d-flex align-items-center">
            <div className="icon text-primary">
                {icon}
            </div>
            <div className="icon-box-content ms-16">
                <h5 className="mb-2 fs-6 text-secondary">{title}</h5>
                <p className="fs-14 fw-normal text-secondary-400 mb-0">{text}</p>
            </div>
        </div>
    )
}
export default Carousel