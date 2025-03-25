import React from "react";
import WishListData from "./component/WishListData";
import BreadCrumb from "./common/BreadCrumb";
const WishList = () => {
    return (
        <>
            <BreadCrumb pages="Wishlist"/>
            <div className="wishlist">
                <div className="spacer">
                <WishListData />
                </div>
            </div>
        </>
    )
}
export default WishList