import React from "react";
import CstmTable from "../common/CstmTable";
import CstmContainer from "../common/CstmContainer";
import Heading from "../common/Heading";
import ImageOne from '../Assets/images/WishList/Image-1.svg'
import ImageTwo from '../Assets/images/WishList/Image-2.svg'
import ImageThree from '../Assets/images/WishList/Image-3.svg'
import { IoMdClose } from "react-icons/io";
const   WishListData = () => {
    const TheadData = [
        {
            theadOne : 'Product',
            theadTwo : 'price',
            theadThree : 'Stock Status',
        }
    ]
    const WishListTableData = [
        {
            bg:'primary',
            src: ImageOne, 
            alt: 'Image-1', 
            title: 'Green Capsicum', 
            newPrice: '$14.99', 
            oldPrice: '$20.99', 
            stock: 'In Stock', 
            btntext:'add to cart',
            variant:'primary',
            icon: <IoMdClose />,
        },
        {
            bg:'primary',
            src: ImageTwo, 
            alt: 'Image-2', 
            title: 'Chinese Cabbage', 
            newPrice: '$45.00',
            stock: 'In Stock', 
            btntext:'add to cart',
            variant:'primary',
            icon: <IoMdClose />,
        },
        {
            bg: 'danger',
            src: ImageThree, 
            alt: 'Image-3', 
            title: 'Fresh Sujapuri Mango', 
            newPrice: '$09.00',
            stock: 'Out of Stock', 
            btntext:'add to cart',
            icon: <IoMdClose />,
            variant:'secondary-50',
            text:'text-danger',
            btntextColor: 'text-secondary-300'
        },
    ]
    return (
        <>
            <section>
                <CstmContainer>
                    <Heading title="My Wishlist" textAlign={'center'}/>
                    <CstmTable WishListTableData={WishListTableData} Thead={TheadData}/>
                </CstmContainer>
            </section>
        </>
    )
}
export default WishListData