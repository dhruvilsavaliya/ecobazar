import React from "react";
import CstmContainer from '../common/CstmContainer'
import Heading from '../common/Heading'
import { GoArrowRight } from "react-icons/go";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import ProductCard from "../common/ProductCard";
import LiveClock from "../common/LiveClock";
import  BigProductImage  from '../Assets/images/product/BigProduct.svg';
import  ChineseCabbageImage  from '../Assets/images/product/ChineseCabbage.svg';
import  GreenLettuceImage  from '../Assets/images/product/GreenLettuce.svg';
import  EggplantImage  from '../Assets/images/product/Eggplant.svg';
import  BigPotatoesImage  from '../Assets/images/product/BigPotatoes.svg';
import  CornImage  from '../Assets/images/product/Corn.svg';
import  FreshCauliflowerImage  from '../Assets/images/product/FreshCauliflower.svg';
import  GreenCapsicumImage  from '../Assets/images/product/GreenCapsicum.svg';
import  GreenChiliImage  from '../Assets/images/product/GreenChili.svg';
import  RedChiliImage  from '../Assets/images/product/RedChili.svg';
import  RedTomatosImage  from '../Assets/images/product/RedTomatos.svg';
import  SurjapurMangoImage  from '../Assets/images/product/SurjapurMango.svg';
const Deal = () => {
    const Data = [
        {
            
            classN:'big-product item',
            src : BigProductImage, 
            alt : 'Surjapur Mango',
            badgeRed: 'Sale 50%',
            badgeBlue: 'Best Sale',
            whishlistIcon : <CiHeart />, 
            cartText:'Add to Cart',
            viewIcon: <IoEyeOutline />,
            title: 'Surjapur Mango', 
            newPrice: '$34.00',
            oldPrice: '$24.00', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />],
            rateText:'(524 Feedback)',
            clock:<LiveClock clockText="Hurry up! Offer ends In:" targetDate={new Date('2024-02-16T00:00:00')}/>,
        },
        {
            classN:'product-card item1',
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
            classN:'product-card item2',
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
            classN:'product-card item3',
            src : EggplantImage, 
            alt : 'Eggplant',
            badgeRed: 'sale 50%',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Eggplant', 
            newPrice: '$34.00', 
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            classN:'product-card item4',
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
            classN:'product-card item5',
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
            classN:'product-card item6',
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
        {
            classN:'product-card item7',
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
            classN:'product-card item8',
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
            classN:'product-card item9',
            src : RedChiliImage, 
            alt : 'Red-Chili',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Red Chili', 
            newPrice: '$12.00',
            oldPrice: '', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            classN:'product-card item10',
            src : RedTomatosImage, 
            alt : 'Red Tomatos',
            badgeRed: 'Sale 50%',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Red Tomatos', 
            newPrice: '$20.00',
            oldPrice: '$20.99', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
        {
            classN:'product-card item11',
            src : SurjapurMangoImage, 
            alt : 'Surjapur Mango',
            badgeRed: '',
            whishlistIcon : <CiHeart />, 
            viewIcon: <IoEyeOutline />,
            title: 'Surjapur Mango', 
            newPrice: '$9.00',
            oldPrice: '$20.99', 
            cartIcon: <SlHandbag />, 
            rate: [<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStar />,<IoIosStarOutline />],
        },
    ]
    return (
        <section className="deal" id="pages">
            <CstmContainer>
                <div className="spacer">
                    <Heading title="Hot Deals" text="View ALL" icon={<GoArrowRight />} />
                    <div className="grid-container no-gutters flex-wrap">
                        {Data.map((data, index) => {
                            return (
                                <>
                                    <ProductCard key={index} src={data.src} classN={data.classN} badgeRed={data.badgeRed} badgeBlue={data.badgeBlue} cartText={data.cartText} whishlistIcon={data.whishlistIcon} viewIcon={data.viewIcon} title={data.title} newPrice={data.newPrice} oldPrice={data.oldPrice} cartIcon={data.cartIcon} rate={data.rate} rateText={data.rateText} clock={data.clock}/>                                    
                                </>
                            )
                        })}
                    </div>
                </div>
            </CstmContainer>
        </section>
    )
}
export default Deal