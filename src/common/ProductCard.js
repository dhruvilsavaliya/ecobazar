import React from "react";
import { Badge, Card } from "react-bootstrap";
import CstmImage from "./CstmImage";
import { Link } from "react-router-dom";
const ProductCard = ({classN, src, alt, badgeRed, badgeBlue, cartText, whishlistIcon, viewIcon, title, newPrice, oldPrice, cartIcon, rate, rateText, clock}) => {
    return (
        <Card className={`common-card rounded-0 overflow-hidden ${classN}`}>
            <div className="card-img position-relative text-center bg-white">
                <CstmImage src={src} alt={alt} />
                {
                    badgeRed &&  (
                        <div className="badges position-absolute d-flex">
                            { badgeRed &&
                                <Badge bg="danger" className="px-2 text-white fw-normal lh-21">{badgeRed}</Badge>
                            }
                            {
                                badgeBlue &&
                                <Badge bg="blue" className="px-2 text-white fw-normal lh-21 ms-2">{badgeBlue}</Badge>
                            }
                        </div>
                    )
                }
                <div className="product-social">
                    <div className="social">
                        {
                            whishlistIcon &&
                            <Link to="/wishlist" className="whishlist d-block text-secondary border-secondary-50 border-1 border rounded-pill text-center">{whishlistIcon}</Link>
                        }
                        {
                            cartText &&
                            <div className="cart-icon w-100">
                                <a href="#" type="button" className="d-block text-center rounded-pill fs-14"> <span className="fs-14 fs-semibold"> {cartText} </span>{cartIcon}</a>
                            </div>
                        }
                        {
                            viewIcon &&
                            <a href="#" className="view d-block text-secondary border-secondary-50 border-1 border rounded-pill text-center mb-0">{viewIcon}</a>
                        }
                    </div>
                </div>
            </div>
            <Card.Body>
                <div className="card-content">
                    <div>
                        <Card.Title className="fw-normal text-secondary-700">{title}</Card.Title>
                        <div className="price d-flex align-items-center">
                            {
                                newPrice &&
                                <span className="fw-500 text-secondary ms-0">{newPrice}</span> 
                            }
                            {
                                oldPrice &&
                                <span className="fw-normal text-secondary-400 text-decoration-line-through">{oldPrice}</span>
                            }
                        </div>
                        <div className="rate fs-12">{rate} 
                            {
                                rateText &&
                                <span className="text-secondary-500"> {rateText} </span>
                            }
                        </div>
                    </div>
                    <div className="cart-icon">
                        <a href="#" type="button" className="bg-secondary-50 text-secondary d-block text-center rounded-pill fs-18"> <span className="fs-14 fs-semibold"> {cartText} </span>{cartIcon}</a>
                    </div>
                </div>
                {
                    clock &&
                    <div className="counter text-center">{clock}</div>
                }
            </Card.Body>
        </Card>
    )
}
export default ProductCard