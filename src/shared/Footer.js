/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CstmContainer from "../common/CstmContainer";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import CstmButton from "../common/CstmButton";
import Logo from "../common/Logo";
import CstmImage from "../common/CstmImage";
import { LuLock } from "react-icons/lu";
import Subscribe from "../component/Subscribe";
import VisaLogo from "../Assets/images/CopyRight/visa-logo.svg";
import ApplePayLogo from "../Assets/images/CopyRight/ApplePay.svg";
import DiscoverLogo from "../Assets/images/CopyRight/Discover.svg";
import MastercardLogo from "../Assets/images/CopyRight/Mastercard.svg";
const Footer = () => {
  return (
    <>
      <Subscribe />
      <footer className="bg-secondary">
        <CstmContainer>
          <div className="spacer">
            <CstmRow>
              <CstmCol
                lg={4}
                md={6}
                sm={7}
                xs={12}
                className="mb-3 mb-lg-0 mb-md-3"
              >
                <div className="widget">
                  <a
                    href="#"
                    className="fs-14 fw-normal lh-21 text-secondary-400"
                  >
                    <Logo text={"white"} className="mb-3" />
                  </a>
                  <p className="fs-14 fw-normal text-secondary-500 lh-21 mb-3">
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </p>
                  <div className="cta d-flex align-items-center">
                    <CstmButton
                      variant="transperant"
                      className="fs-14 fw-500 lh-21 text-white me-3 border-1 border-top-0 border-start-0 border-end-0 rounded-0 border-primary"
                    >
                      (219) 555-0114
                    </CstmButton>
                    <span className="fs-6 fw-normal lh-24 text-secondary-500">
                      or
                    </span>
                    <CstmButton
                      variant="transperant"
                      className="fs-14 fw-500 lh-21 text-white ms-3 border-1 border-top-0 border-start-0 border-end-0 rounded-0 border-primary"
                    >
                      Proxy@gmail.com
                    </CstmButton>
                  </div>
                </div>
              </CstmCol>
              <CstmCol
                lg={2}
                md={4}
                sm={5}
                xs={6}
                className="mb-2 mb-lg-0 mb-md-3"
              >
                <div className="widget">
                  <h4 className="widget-title text-white fs-6 lh-24 fw-500Useful ">
                    Links
                  </h4>
                  <ul className="mb-0 ps-0 widget-link">
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Order History
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Shoping Cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Wishlist
                      </a>
                    </li>
                  </ul>
                </div>
              </CstmCol>
              <CstmCol
                lg={2}
                md={2}
                sm={6}
                xs={6}
                className="mb-2 mb-lg-0 mb-md-3"
              >
                <div className="widget">
                  <h4 className="widget-title text-white fs-6 lh-24 fw-500">
                    Helps
                  </h4>
                  <ul className="mb-0 ps-0 widget-link">
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Faqs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Terms & Condition
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </CstmCol>
              <CstmCol
                lg={2}
                md={3}
                sm={6}
                xs={6}
                className="mb-2 mb-lg-0 mb-md-3"
              >
                <div className="widget">
                  <h4 className="widget-title text-white fs-6 lh-24 fw-500">
                    Proxy
                  </h4>
                  <ul className="mb-0 ps-0 widget-link">
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Track Order
                      </a>
                    </li>
                  </ul>
                </div>
              </CstmCol>
              <CstmCol
                lg={2}
                md={3}
                sm={6}
                xs={6}
                className="mb-2 mb-lg-0 mb-md-3"
              >
                <div className="widget">
                  <h4 className="widget-title text-white fs-6 lh-24 fw-500">
                    Categories
                  </h4>
                  <ul className="mb-0 ps-0 widget-link">
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Fruit & Vegetables
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        ShMeat & Fishop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Bread & Bakery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="fs-14 fw-normal lh-21 text-secondary-400"
                      >
                        Beauty & Health
                      </a>
                    </li>
                  </ul>
                </div>
              </CstmCol>
            </CstmRow>
          </div>
          <div className="copy-right py-2 py-md-4 border-1 border-top border-secondary-800">
            <CstmRow className="align-items-center">
              <CstmCol md={6} xs={12} className="mb-3 mb-md-0">
                <p className="fw-normal lh-21 fs-14 text-secondary-500 text-start mb-0 text-center text-md-start">
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </p>
              </CstmCol>
              <CstmCol md={6} xs={12}>
                <div className="method d-flex justify-content-center justify-content-md-end">
                  <div className="method-autoplay border border-1 border-secondary-800 rounded-1 text-center me-2">
                    <div className="d-table-cell align-middle">
                      <CstmImage src={ApplePayLogo} alt="apple-pay" />
                    </div>
                  </div>
                  <div className="method-mastercard border border-1 border-secondary-800 rounded-1 text-center me-2">
                    <div className="d-table-cell align-middle">
                      <CstmImage src={VisaLogo} alt="visa-logo" />
                    </div>
                  </div>
                  <div className="method-visa border border-1 border-secondary-800 rounded-1 text-center me-2">
                    <div className="d-table-cell align-bottom">
                      <CstmImage src={DiscoverLogo} alt="Discover" />
                    </div>
                  </div>
                  <div className="method-discover border border-1 border-secondary-800 rounded-1 text-center me-2">
                    <div className="d-table-cell align-middle">
                      <CstmImage src={MastercardLogo} alt="Mastercard" />
                    </div>
                  </div>
                  <div className="base border border-1 border-secondary-800 rounded-1 text-center">
                    <div className="d-table-cell align-middle">
                      <LuLock className="fs-12" />
                      <span className="fw-normal d-inline-block text-center">
                        Secure
                      </span>
                      <p className="fs-12 fw-semibold text-center mb-0">
                        Payment
                      </p>
                    </div>
                  </div>
                </div>
              </CstmCol>
            </CstmRow>
          </div>
        </CstmContainer>
      </footer>
    </>
  );
};
export default Footer;
