import React from 'react'
import { GoArrowRight } from "react-icons/go";
import CstmContainer from "../common/CstmContainer";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import CstmButton from '../common/CstmButton'
const DiscountBanner = () => {
     return (
        <CstmContainer>
            <div className='spacer'>
                <div className='discount-banner'>
                    <CstmRow className="justify-content-end">
                        <CstmCol lg={5} md={7} sm={9} xs={12}>
                            <div className='info'>
                                <span className='info-title text-uppercase text-white fs-6 fw-500'>Summer Sale</span>
                                <h4 className='text-warning mb-3'>37% <span className='text-white fw-normal'>OFF</span></h4>
                                <p className='fs-6 fw-normal text-white lh-24'>Free on all your order, Free Shipping and  30 days money-back guarantee</p>
                                <CstmButton variant="primary" className="text-white rounded-pill">Shop Now<GoArrowRight/></CstmButton>
                            </div>
                        </CstmCol>
                    </CstmRow>
                </div>
            </div>
        </CstmContainer>
       )
     }
export default DiscountBanner
