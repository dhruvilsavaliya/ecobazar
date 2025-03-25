import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CompanyLogoCarousel from '../common/CompanyLogoCarousel';
import CompanyLogoImageOne from '../Assets/images/CompanyLogo/Image-1.svg';
import CompanyLogoImageTwo from '../Assets/images/CompanyLogo/Image-2.svg';
import CompanyLogoImageThree from '../Assets/images/CompanyLogo/Image-3.svg';
import CompanyLogoImageFour from '../Assets/images/CompanyLogo/Image-4.svg';
import CompanyLogoImageFive from '../Assets/images/CompanyLogo/Image-5.svg';
import CompanyLogoImageSix from '../Assets/images/CompanyLogo/Image-6.svg';

const CompanyLogoData = () => {
    const data = [
        {
            src: CompanyLogoImageOne,
            alt: 'Image-1',
        },
        {
            src: CompanyLogoImageTwo,
            alt: 'Image-2',
        },
        {
            src: CompanyLogoImageThree,
            alt: 'Image-3',
        },
        {
            src: CompanyLogoImageFour,
            alt: 'Image-4',
        },
        {
            src: CompanyLogoImageFive,
            alt: 'Image-5',
        },
        {
            src: CompanyLogoImageSix,
            alt: 'Image-6',
        },
        {
            src: CompanyLogoImageOne,
            alt: 'Image-1',
        },
        {
            src: CompanyLogoImageTwo,
            alt: 'Image-2',
        },
        {
            src: CompanyLogoImageFour,
            alt: 'Image-3',
        },
        {
            src: CompanyLogoImageFour,
            alt: 'Image-4',
        },
        {
            src: CompanyLogoImageFive,
            alt: 'Image-5',
        },
        {
            src: CompanyLogoImageSix,
            alt: 'Image-6',
        },
    ];

    return (
        <Swiper
            slidesPerView={5.7}
            spaceBetween={0}
            loop={true}
            breakpoints={{
                320 :{
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                992 : {
                    slidesPerView: 4,
                },
                1133: {
                    slidesPerView: 5.7,
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='text-center'>
                        <CompanyLogoCarousel src={item.src} alt={item.alt} className="line"/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default CompanyLogoData;
