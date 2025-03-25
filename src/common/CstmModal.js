import React from "react";
import Modal from "react-bootstrap/Modal";
import CstmButton from "./CstmButton";
import CstmImage from "./CstmImage";
import CstmInputGroup from "./CstmInputGroup";
import { Form } from "react-bootstrap";
import CstmRow from "./CstmRow";
import CstmCol from "./CstmCol";
import ModalImage from "../Assets/images/Modal.svg";
const CstmModal = ({
  type,
  title,
  description,
  offerDescription,
  placeholder,
  btnText,
  variant,
  ...props
}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="position-relative">
        <CstmButton
          onClick={props.onHide}
          variant={"transparent"}
          className="p-2 btn-close position-absolute end-0 top-0 rounded-pill"
        ></CstmButton>
        <CstmRow className="news-modal d-flex">
          <CstmCol md={5} xs={12}>
            <CstmImage className={"w-100"} src={ModalImage} alt="Modal" />
          </CstmCol>
          <CstmCol md={7} xs={12}>
            <div className="right-side">
              <h3 className="text-center">{title}</h3>
              <p className="fs-6 lh-24 text-center text-secondary-400 fw-normal">
                {description}{" "}
                <span className="fw-semibold text-warning">
                  {offerDescription}
                </span>
              </p>
              <CstmInputGroup
                type="text"
                placeholder={placeholder}
                btnText={btnText}
                variant={variant}
                className="fs-6 rounded-pill"
              />
              <div className="d-flex align-items-center justify-content-center">
                <Form.Check id={type} label={type} />
              </div>
            </div>
          </CstmCol>
        </CstmRow>
      </Modal.Body>
    </Modal>
  );
};

export default CstmModal;
