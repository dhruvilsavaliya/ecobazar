import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from "../common/Carousel";
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsBagCheck } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
const CarouselData = () => {
    const FeaturedData = [
        {
            icon: <FaTruckFast />,
            title: 'Free Shipping',
            text: 'Free shipping on all your order',
        },
        {
            icon: <TfiHeadphoneAlt />,
            title: 'Customer Support 24/7',
            text: 'Instant access to Support',
        },
        {
            icon: <BsBagCheck />,
            title: '100% Secure Payment',
            text: 'We ensure your money is save',
        },
        {
            icon: <GoPackage />,
            title: 'Money-Back Guarantee',
            text: '30 Days Money-Back Guarantee',
        },
    ];
    const options = {
        loop: true,
        margin: 5,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            992 :{
                items: 2
            },
            1024:{
                items: 3
            },
            1199: {
                items: 3
            },
            1399: {
                items: 4
            }
        }
    }
    return (
        <div className="featured">
            <OwlCarousel className='owl-theme' loop nav {...options}>
                {FeaturedData.map((data, index) => {
                    return (
                        <div className="item" key={index}>
                            <Carousel icon={data.icon} title={data.title} text={data.text} />
                        </div>
                    )
                })}
            </OwlCarousel>
        </div>
    )
}
export default CarouselData