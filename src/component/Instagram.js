import React from "react";
import CstmContainer from "../common/CstmContainer";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import Heading from "../common/Heading"
import ComponyLogoData from "../slider/ComponyLogoData";
import InstagramData from '../slider/InstagramData'
import { Element } from 'react-scroll';
const Instagram = () => {
   return  (
    <Element name="contact" className="element" id="contact">
        <CstmContainer>
            <CstmRow>
                <CstmCol className="spacer">
                    <ComponyLogoData />
                </CstmCol>
            </CstmRow>
            <Heading title="Follow us on Instagram" xs={12} textAlign={'center'}/>
            <CstmRow>
                <CstmCol>
                    <InstagramData />
                </CstmCol>
            </CstmRow>
        </CstmContainer>
    </Element>
   )
}
export default Instagram