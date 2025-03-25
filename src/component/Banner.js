import React from "react";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import CstmButton from "../common/CstmButton";
import { GoArrowRight } from "react-icons/go";
import CstmContainer from "../common/CstmContainer";
import CstmImage from "../common/CstmImage";
import Featured from "./Featured";
import { Element } from 'react-scroll';
import BgTwoImage from '../Assets/images/BG2.svg';
import BgOneImage from '../Assets/images/BG.svg';
const Banner = () => {
    return (
        <Element name="home" className="element section" id="home">
            <CstmContainer>
                <div className="my-3 my-lg-4">
                    <CstmRow>
                        <CstmCol lg={8} md={12}>
                            <div className="big-banner">
                                <div className="banner-content">
                                    <h1>Fresh & Healthy Organic Food</h1>
                                    <div className="discription border-start border-2 border-primary">
                                        <div className="offer d-flex align-items-center mb-2">
                                            <p className="fw-500 mb-0">Sale up to</p>
                                            <span className="fw-semibold ms-2">30% OFF</span>
                                        </div>
                                        <p className="fs-14 fw-normal mb-0 text-white">Free shipping on all your order.</p>
                                    </div>
                                    <CstmButton variant="white" className="fs-6 text-primary rounded-pill mb-0">Shop now <GoArrowRight /></CstmButton>
                                </div>
                            </div>
                        </CstmCol>
                        <CstmCol lg={4} md={12}>
                            <div className="row flex-xl-column">
                                <CstmCol lg={12} sm={6}>
                                    <div className="BG position-relative mt-4 mt-xl-0">
                                        <CstmImage className="w-100" src={BgOneImage}/>
                                        <div className="info">
                                            <span className="fw-500 mb-2 text-uppercase text-secondary d-block">Summer Sale</span>
                                            <h3 className="fw-semibold text-secondary">75% OFF</h3>
                                            <p className="fw-normal text-secondary-600 fs-14 mb-2 mb-md-4">Only Fruit & Vegetable</p>
                                            <CstmButton variant="" className="text-primary p-0 fs-6 fw-semibold">Shop Now <GoArrowRight /></CstmButton>
                                        </div>
                                    </div>
                                </CstmCol>
                                <CstmCol lg={12} sm={6}>
                                    <div className="BG2 position-relative mt-4">
                                        <CstmImage className="w-100" src={BgTwoImage}/>
                                        <div className="info text-center">
                                            <span className="fw-500 d-block text-uppercase text-secondary text-white">Best Deal</span>
                                            <h3 className="fw-semibold text-secondary text-white">Special Products Deal of the Month</h3>
                                            <CstmButton variant="" className="text-primary p-0 fs-6 fw-semibold">Shop Now <GoArrowRight /></CstmButton>
                                        </div>
                                    </div>
                                </CstmCol>
                            </div>
                        </CstmCol>
                    </CstmRow>
                </div>
                <Featured />
            </CstmContainer>
        </Element>
    )
}
export default Banner