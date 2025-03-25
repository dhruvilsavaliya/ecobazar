import React from "react";
import { Badge } from "react-bootstrap";
import CstmImage from "./CstmImage";
import CstmButton from "./CstmButton";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
const CstmTable = ({ WishListTableData, Thead }) => {
    return (
        <div className="wish-list-table w-100 overflow-x-auto">
            <table className="w-100">
                <thead>
                    {Thead.map((data,index)=> (
                        <tr key={index}>
                            <th>{data.theadOne}</th>
                            <th>{data.theadTwo}</th>
                            <th>{data.theadThree}</th>
                        </tr>
                    ))}
                </thead>
                    <tbody>
                        {WishListTableData.map((data,index) => (
                            <tr key={index} role="row"> 
                                <td className="d-flex align-items-center flex-wrap">
                                    <CstmImage src={data.src} alt={data.alt}/>
                                    <span className="fs-6 lh-24 fw-normal text-secondary"> {data.title} </span>
                                </td>
                                {
                                    (data.oldPrice || data.newPrice ) && (
                                        <td> 
                                            <span className="fw-500 lh-24 text-secondary">{data.newPrice}</span>  
                                            <span className="text-secondary-400 fw-normal lh-24 text-decoration-line-through"> {data.oldPrice} </span> 
                                        </td>
                                    )
                                }
                                <td>
                                <Badge bg={data.bg} className={`px-2 fw-normal lh-21 px-2 py-1 ${data.text ? `${data.text}` : 'text-hardprimary' }`}>{data.stock}</Badge></td>
                                <td>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <CstmButton type="disable" variant={data.variant} className={`rounded-pill text-capitalize ${data.btntextColor ? `${data.btntextColor}` : "text-white"}`}>{data.btntext}</CstmButton>
                                        <a href="#" className="item-remove border border-1 border-secondary-200 rounded-pill text-center fs-6 text-secondary ms-4">
                                            {data.icon}
                                        </a>
                                    </div>
                                </td>
                            </tr> 
                        ))}
                    </tbody>
                
                <tfoot>
                    <tr> 
                        <td colSpan={4}>
                            <div className="d-flex align-items-center">
                            <span>Share:</span>
                            <div className="social-icons text-start">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaPinterestP /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default CstmTable