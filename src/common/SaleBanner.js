import React from "react";
import CstmImage from "./CstmImage";
import CstmButton from "./CstmButton";
const SaleBanner = ({src, alt, text, title, clock, saleText, salePrice, btnText, color, bg, textColor}) => {
    return (
        <div className="sale-banner">
            <div className="sale-image position-relative">
                <CstmImage src={src} alt={alt}/>
            <div className="sale-banner-content">
                <span className={`fs-14 fw-500 text-uppercase mb-2 mb-sm-3 d-block ${color ? `text-${color}` : 'text-white'}`}>{text}</span>
                { title &&
                    <h4 className={`mb-2 mb-sm-3 mb-md-4 ${color ? `text-${color}` : 'text-white'}`}>{title}</h4>
                }
                { clock &&
                    <div className="counter">{clock}</div>
                }
                { saleText &&
                    <div className="sale d-flex justify-content-center align-items-center">
                        <p className={`fs-18 fw-normal mb-0 ${color ? `text-${color}` : 'text-white'}`}>{saleText}</p>
                        <span className={`ms-2 d-block fs-5 ${bg ? `bg-${bg}` : 'none'} ${textColor ? `text-${textColor}` : 'text-warning'}`}>{salePrice}</span>
                    </div>
                }
                <CstmButton variant='white' className="fs-14 fw-semibold text-primary rounded-pill">{btnText}</CstmButton>
            </div>
            </div>
        </div>
    )
}
export default SaleBanner