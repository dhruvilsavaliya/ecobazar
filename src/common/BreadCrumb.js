import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import CstmContainer from "./CstmContainer";
const BreadCrumb = ({pages}) => {
    return (
        <div className="section">
            <div className="breadcrumb-image">
                <CstmContainer>
                    <div className="position-relative">
                        <Breadcrumb className="position-absolute end-0 breadcrumb-main">
                            <Breadcrumb.Item href="/"> <GoHome  className="text-secondary-500"/> </Breadcrumb.Item>
                            <Breadcrumb.Item active>{pages}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </CstmContainer>
            </div>
        </div>
    )
}
export default BreadCrumb