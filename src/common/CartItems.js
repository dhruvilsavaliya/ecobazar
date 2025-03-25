import React, { useState } from "react";
import CstmImage from "./CstmImage";
const CartItems = ({src, alt, text, quantity, amount, icon}) => {
    const [isDeletItme , setDeletItme] = useState(false)
    const deletItem = () =>{
        setDeletItme(!isDeletItme)
    }
    return (
        <>
            { !isDeletItme && (
                <li className="cart-items border-bottom d-flex align-items-center">
                    <div>
                        <CstmImage src={src} alt={alt} />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between ms-2">
                        <div className="price-info">
                            <a href="#" className="fs-14 d-inline align-top text-secondary fw-normal">
                                {text}
                            </a>
                            <span className="fw-normal cart-quantity d-table fs-14 lh-21 text-secondary-500">
                                {quantity}
                                <span className="ms-1 cart-amount fw-semibold text-secondary">
                                    {amount}
                                </span>
                            </span>
                        </div>
                        <a href="#" onClick={deletItem} className="item-remove border border-1 border-secondary-200 rounded-pill text-center fs-6 text-secondary">
                            {icon}
                        </a>
                    </div>
                </li>
                )
            }
        </>
    )
}
export default CartItems