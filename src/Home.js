import React from "react";
import Banner from "./component/Banner";
import Categories from "./component/Categories";
import Product from "./component/Product";
import BannerOffer from "./component/BannerOffer";
import Deal from "./component/Deal";
import DiscountBanner from "./component/DiscountBanner";
import FeaturedProduct from "./component/FeaturedProduct";
import LatestNews from "./component/Latestnews";
import Testimonial from "./component/Testimonial";
import Instagram from "./component/Instagram";
import NewsLetterModal from "./component/NewsLetterModal";
const Home = () => {
    return (
        <>
            <Banner />
            <NewsLetterModal />
            <Categories />
            <Product />
            <BannerOffer />
            <Deal />
            <DiscountBanner />
            <FeaturedProduct />
            <LatestNews />
            <Testimonial />
            <Instagram />
        </>
    )
}
export default Home