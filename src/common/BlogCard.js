import React from "react";
import { Card } from "react-bootstrap";
import CstmButton from "./CstmButton";
import CstmImage from "./CstmImage";
const BlogCard = ({src, alt, date, month, categories, admin, comments, text, btnText}) => {
    return (
        <Card className="border-0">
            <div className="blog-img">
                <CstmImage src={src} alt={alt}/>
                <div className="date text-center">
                    <span className="fw-500 text-secondary">{date}</span>
                    <p className="fs-12 fw-500 text-uppercase mb-0">{month}</p>
                </div>
            </div>
            <Card.Body className="p-3 p-md-4">
                <div className="social-info d-flex flex-wrap mb-2">
                    <div className="categories me-2 me-lg-3 fs-14 fw-normal">{categories}</div>
                    <div className="admin me-3 fs-14 fw-normal">{admin}</div>
                    <div className="comments fs-14 fw-normal">{comments}</div>
                </div>
                <Card.Text className="fs-18 fw-500">{text}</Card.Text>
                <CstmButton variant="transperant" className="text-primary p-0">{btnText}</CstmButton>
            </Card.Body>
        </Card>
    )
}
export default BlogCard