import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import InstagramCarousel from '../common/InstagramCarousel'
import { FaInstagram } from "react-icons/fa";
import InstagramImageOne from '../Assets/images/Instagram/Instagram-1.svg'
import InstagramImageTwo from '../Assets/images/Instagram/Instagram-2.svg'
import InstagramImageThree from '../Assets/images/Instagram/Instagram-3.svg'
import InstagramImageFour from '../Assets/images/Instagram/Instagram-4.svg'
import InstagramImageFive from '../Assets/images/Instagram/Instagram-5.svg'
import InstagramImageSix from '../Assets/images/Instagram/Instagram-6.svg'
const InstagramData = () => {
    const data = [
        {
            src : InstagramImageOne,
            alt : 'Instagram-1',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageTwo,
            alt : 'Instagram-2',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageThree,
            alt : 'Instagram-3',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageFour,
            alt : 'Instagram-4',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageFive,
            alt : 'Instagram-5',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageSix,
            alt : 'Instagram-6',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageOne,
            alt : 'Instagram-1',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageTwo,
            alt : 'Instagram-2',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageThree,
            alt : 'Instagram-3',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageFour,
            alt : 'Instagram-4',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageFive,
            alt : 'Instagram-5',
            icon: <FaInstagram />,
        },
        {
            src : InstagramImageSix,
            alt : 'Instagram-6',
            icon: <FaInstagram />,
        },
    ]
    return (
        <div className='spacer pt-0'>
            <Swiper
                loop={true}
                spaceBetween={24}
                breakpoints={{
                    320:{
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    576:{
                        slidesPerView: 3,
                    },
                    767:{
                        slidesPerView: 4,
                    },
                    992:{
                        slidesPerView: 6,
                    },
                }}
            >
                    {data.map((item,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <InstagramCarousel src={item.src} alt={item.src} icon={item.icon}/>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>            
        </div>
    )
}
export default InstagramData
