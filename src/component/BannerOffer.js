import React from "react";
import CstmContainer from "../common/CstmContainer";
import CstmCol from "../common/CstmCol";
import CstmRow from "../common/CstmRow";
import SaleBanner from "../common/SaleBanner";
import LiveClock from "../common/LiveClock";
import { GoArrowRight } from "react-icons/go";
import  BannerOfferOneImage  from "../Assets/images/BannerOffer/BannerOffer-1.svg";
import  BannerOfferTwoImage  from "../Assets/images/BannerOffer/BannerOffer-2.svg";
import  BannerOfferThreeImage  from "../Assets/images/BannerOffer/BannerOffer-3.svg";
const BannerOffer = () => {
    const Data = [
        {
            src : BannerOfferOneImage, 
            alt: 'BannerOffer-1', 
            text: 'Best Deals', 
            title: 'Sale of the Month', 
            clock: <LiveClock targetDate={new Date('2024-02-10T00:00:00')}/>,
            btnText:['Shop Now', <GoArrowRight />],
        },
        {
            src : BannerOfferTwoImage, 
            alt: 'BannerOffer-1', 
            text: '85% Fat Free', 
            title: 'Low-Fat Meat', 
            saleText: 'Started at', 
            salePrice: '$79.99',             
            textColor: 'warning',
            btnText:['Shop Now', <GoArrowRight />],
            bg:'none p-0',
        },
        {
            src : BannerOfferThreeImage, 
            alt: 'BannerOffer-1', 
            text: 'Summer Sale', 
            title: '100% Fresh Fruit', 
            saleText: 'Up to', 
            salePrice: '64% OFF', 
            btnText:['Shop Now', <GoArrowRight />],
            textColor: 'yellow',
            color:'secondary',
            bg:'secondary',
        },
    ]
    return (
        <div className="spacer pt-0">
            <CstmContainer>
                <CstmRow>
                    {Data.map((data,index) => (
                        <CstmCol key={index} lg={4} md={6} xs={12} className="mb-4 mb-lg-0">
                            <SaleBanner src={data.src} alt={data.alt} text={data.text} title={data.title} clock={data.clock} saleText={data.saleText} salePrice={data.salePrice} btnText={data.btnText} color={data.color} bg={data.bg} textColor={data.textColor}/>                        
                        </CstmCol>
                    ))}
                </CstmRow>
            </CstmContainer>
        </div>
    )
}
export default BannerOffer