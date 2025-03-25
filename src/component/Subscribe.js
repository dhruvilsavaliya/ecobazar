import React from "react";
import CstmContainer from '../common/CstmContainer';
import CstmCol from '../common/CstmCol';
import CstmRow from "../common/CstmRow";
import CstmInputGroup from "../common/CstmInputGroup";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Element } from 'react-scroll';
const Subscribe = () => {
    return (
        <Element name="subscribe" className="subscribe bg-secondary-50 element">
            <div className="spacer">
            <CstmContainer> 
                <CstmRow className="align-items-center justify-content-around justify-content-md-between">
                    <CstmCol lg={4} sm={12} className="mb-2 mb-md-2">
                        <div className="content">
                            <h4 className="text-gray mb-1">Subcribe our Newsletter</h4>
                            <p className="fs-14 fw-normal lh-21 text-secondary-400 mb-0">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                        </div>
                    </CstmCol>
                    <CstmCol lg={6} sm={8} xs={12} className="mb-2 mb-md-2">
                        <CstmInputGroup type="text" placeholder="Your email address" btnText="subscribe" variant="primary" className="fs-6"/>
                    </CstmCol>
                    <CstmCol lg={2} sm={4} xs={12}>
                        <div className="social-icons text-center text-sm-end">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaPinterestP /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </CstmCol>
                </CstmRow>
            </CstmContainer>
            </div>
        </Element>
    )
}
export default Subscribe