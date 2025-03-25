import React from "react";
import TestimonialCarousel from "../common/TestimonialCarousel";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CstmCol from "../common/CstmCol";
import AuthorImageOne from "../Assets/images/Testimonial/Image-1.svg";
import AuthorImageTwo from "../Assets/images/Testimonial/Image-2.svg";
import AuthorImageThree from "../Assets/images/Testimonial/Image-3.svg";
import CstmRow from "../common/CstmRow";
const TestimonialData = () => {
    const Data = [
        {
            icon: <RiDoubleQuotesR />,
            text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            src: AuthorImageOne,
            alt: 'Image-1',
            name: 'Robert Fox',
            post: 'Customer',
            rate: [<IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />],
        },
        {
            icon: <RiDoubleQuotesR />,
            text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            src: AuthorImageTwo,
            alt: 'Image-1',
            name: 'Dianne Russell',
            post: 'Customer',
            rate: [<IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />],
        },
        {
            icon: <RiDoubleQuotesR />,
            text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            src: AuthorImageThree,
            alt: 'Image-1',
            name: 'Eleanor Pena',
            post: 'Customer',
            rate: [<IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />],
        },
        {
            icon: <RiDoubleQuotesR />,
            text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            src: AuthorImageOne,
            alt: 'Image-1',
            name: 'Robert Fox',
            post: 'Customer',
            rate: [<IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />],
        },
        {
            icon: <RiDoubleQuotesR />,
            text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            src: AuthorImageTwo,
            alt: 'Image-1',
            name: 'Dianne Russell',
            post: 'Customer',
            rate: [<IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />],
        },
        {
            icon: <RiDoubleQuotesR />,
            text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            src: AuthorImageThree,
            alt: 'Image-1',
            name: 'Eleanor Pena',
            post: 'Customer',
            rate: [<IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />, <IoIosStar />],
        },
    ];
    return (
        <Swiper
            pagination={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1133: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            }}
        >
            {Data.map((Data, index) => {
                return (
                    <SwiperSlide>
                        <CstmRow>
                            <CstmCol xs={12} key={index}>
                                <TestimonialCarousel icon={Data.icon} text={Data.text} src={Data.src} alt={Data.alt} name={Data.name} post={Data.post} rate={Data.rate} />
                            </CstmCol>
                        </CstmRow>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default TestimonialData