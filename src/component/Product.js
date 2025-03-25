import React from "react";
import CstmContainer from "../common/CstmContainer";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import ProductCard from "../common/ProductCard";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Heading from "../common/Heading";
import { GoArrowRight } from "react-icons/go";
import { Element } from 'react-scroll';
import  GreenAppleImage  from '../Assets/images/product/GreenApple.svg';
import  IndianMaltaImage  from '../Assets/images/product/IndianMalta.svg';
import  ChineseCabbageImage  from '../Assets/images/product/ChineseCabbage.svg';
import  GreenLettuceImage  from '../Assets/images/product/GreenLettuce.svg';
import  EggplantImage  from '../Assets/images/product/Eggplant.svg';
import  BigPotatoesImage  from '../Assets/images/product/BigPotatoes.svg';
import  CornImage  from '../Assets/images/product/Corn.svg';
import  FreshCauliflowerImage  from '../Assets/images/product/FreshCauliflower.svg';
import  GreenCapsicumImage  from '../Assets/images/product/GreenCapsicum.svg';
import  GreenChiliImage  from '../Assets/images/product/GreenChili.svg';
const Product = () => {
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
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Eggplant', 
            newPrice: '$34.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : BigPotatoesImage, 
            alt : 'BigPotatoes',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Big Potatoes', 
            newPrice: '$20.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : CornImage, 
            alt : 'Corn',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Corn', 
            newPrice: '$20.00',
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : FreshCauliflowerImage, 
            alt : 'Fresh Cauliflower',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Fresh Cauliflower', 
            newPrice: '$12.99',
            oldPrice:'',
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : GreenCapsicumImage, 
            alt : 'Green Capsicum',
            badgeRed: 'Sale 50%',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Green Capsicum', 
            newPrice: '$9.00',
            oldPrice: '$20.99',
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            src : GreenChiliImage, 
            alt : 'Green Chili',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Green Chili', 
            newPrice: '$34.00',
            oldPrice:'',
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
    ]
    return (
        <Element name="product" className="element product">
            <CstmContainer>
                <div className="spacer">
                <Heading title="Popular Products" text="View ALL" icon={<GoArrowRight />}/>
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
        </Element>
    )
}
export default Product