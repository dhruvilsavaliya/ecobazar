import React from "react";
import CstmContainer from "../common/CstmContainer";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import Heading from "../common/Heading";
import ProductCard from "../common/ProductCard";
import  GreenAppleImage  from '../Assets/images/product/GreenApple.svg';
import  IndianMaltaImage  from '../Assets/images/product/IndianMalta.svg';
import  ChineseCabbageImage  from '../Assets/images/product/ChineseCabbage.svg';
import  GreenLettuceImage  from '../Assets/images/product/GreenLettuce.svg';
import  EggplantImage  from '../Assets/images/product/Eggplant.svg';
const FeaturedProduct = () => {
    const Data = [
        {
            src : GreenAppleImage, 
            alt : 'GreenApple',
            badgeRed: 'sale 50%',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Green Apple', 
            newPrice: '$14.99', 
            oldPrice: '$20.99', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : IndianMaltaImage,  
            alt : 'IndianMalta',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Fresh Indian Malta', 
            newPrice: '$20.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : ChineseCabbageImage, 
            alt : 'ChineseCabbage',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Chinese cabbage', 
            newPrice: '$12.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : GreenLettuceImage, 
            alt : 'GreenLettuce',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Green Lettuce', 
            newPrice: '$9.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : EggplantImage, 
            alt : 'Eggplant',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Eggplant', 
            newPrice: '$34.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
    ]
    return (
        <section>
            <CstmContainer>
                <div className="spacer pb-0">
                    <Heading title="Featured Products" text="View ALL" icon={<GoArrowRight />}/>
                    <CstmRow className="no-gutters mx-0" xs={1} sm={2} md={3} lg={4} xl={5}>
                        {Data.map((data,index) => {
                            return (
                                <CstmCol>
                                    <div className="product-card" key={index}>
                                        <ProductCard src={data.src} badgeRed={data.badgeRed} whishlistIcon={data.whishlistIcon} viewIcon={data.viewIcon} title={data.title} newPrice={data.newPrice} oldPrice={data.oldPrice} cartIcon={data.cartIcon} rate={data.rate}/>
                                    </div>
                                </CstmCol>
                            )
                        })}
                    </CstmRow>
                </div>
            </CstmContainer>    
        </section>
    )
}
export default FeaturedProduct