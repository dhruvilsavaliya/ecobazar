import React from "react";
import CstmImage from "./CstmImage";
const TestimonialCarousel = ({icon, text, src, alt, name, post, rate}) => {
    return (
        <div className="testimonial-card p-4">
            <div className="icon mb-2 mb-md-3">{icon}</div>
            <p className="fs-14 fw-normal lh-21 text-secondary-700 text-start mb-2 mb-md-2">{text}</p>
            <div className="client pt-2 d-flex align-items-center justify-content-between">
                <div className="reviewer d-flex align-items-center">
                    <div className="client-image">
                        <CstmImage src={src} alt={alt}/>
                    </div>
                    <div className="info">
                        <p className="fs-6 fw-500 lh-24 text-secondary mb-0">{name}</p>
                        <span className="fs-14 text-secondary-400 fw-normal lh-21">{post}</span>
                    </div>
                </div>
                <div className="rate text-warning">{rate}</div>
            </div>
        </div>
    )
}
export default TestimonialCarousel
