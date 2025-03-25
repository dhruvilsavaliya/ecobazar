import React from "react";
import TestimonialData from "../slider/TestimonialData";
import CstmContainer from "../common/CstmContainer";
import Heading from "../common/Heading";
const Testimonial = () => {
    return (
        <div className="client-testimonial bg-secondary-50" id="about">
            <CstmContainer>
                <div className="spacer overflow-hidden">
                    <Heading title="Client Testimonials" />
                    <TestimonialData />
                </div>
            </CstmContainer>
        </div>
    )
}
export default Testimonial