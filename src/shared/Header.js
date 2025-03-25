import React, { useEffect, useState, useRef } from "react";
import CstmContainer from "../common/CstmContainer";
import { Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "../common/Logo";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import { GrLocation } from "react-icons/gr";
import CstmInputGroup from "../common/CstmInputGroup";
import { RxChevronDown } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CstmButton from "../common/CstmButton";
import { render } from "@testing-library/react";
import CartItems from "../common/CartItems";
import ShoppinCardImg1 from "../Assets/images/ShoppingCard/Image-1.svg";
import ShoppinCardImg2 from "../Assets/images/ShoppingCard/Image-2.svg";
const Header = ({ name, ...props }) => {
  const [isSearchOpen, setToggle] = useState(true);
  const [isCallOpen, setCallToggle] = useState(true);
  const [isNavOpen, setNavOpen] = useState(true);
  const [isIconChange, setIconToggle] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false);
  const overlayRef = useRef();

  // offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setToggle(window.innerWidth > 992);
      setCallToggle(window.innerWidth > 992);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 210) {
        setNavOpen(false);
      } else {
        setNavOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchToggle = () => {
    setToggle(!isSearchOpen);
  };
  const callToggle = () => {
    setCallToggle(!isCallOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        if (expanded) {
          handleToggle();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [overlayRef, expanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
    setOverlayClicked(false);
    setIconToggle(!isIconChange);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
    setIconToggle(isIconChange);
    console.log(isIconChange);
  };

  const handleOverlayClick = () => {
    if (expanded) {
      handleToggle();
    }
    setOverlayClicked(true);
  };

  const CartItemsData = [
    {
      src: ShoppinCardImg1,
      alt: "Image-1",
      text: "Green Capsicum",
      quantity: "1 x",
      amount: "12.00",
      icon: <IoMdClose />,
    },
    {
      src: ShoppinCardImg2,
      alt: "Image-1",
      text: "Green Apple",
      quantity: "1 x",
      amount: "14.00",
      icon: <IoMdClose />,
    },
  ];
  return (
    <header className={isNavOpen ? "fixed-top" : "nav-fixed"}>
      <div ref={overlayRef} onClick={handleOverlayClick}></div>
      <div className="top-header bg-white">
        <div className="small-one align-items-center">
          <CstmContainer>
            <CstmRow>
              <CstmCol sm={6} xs={12}>
                <div className="address d-flex align-items-center justify-content-sm-start justify-content-center">
                  <i className="fs-18">
                    <GrLocation />
                  </i>
                  <p className="text-secondary-600 fs-12 fw-normal ms-2 mb-0">
                    Store Location: Lincoln- 344, Illinois, Chicago, USA
                  </p>
                </div>
              </CstmCol>
              <CstmCol sm={6} xs={12}>
                <div className="links d-flex align-items-center justify-content-sm-end justify-content-center">
                  <div className="eng">
                    <Form.Select
                      size="xs"
                      aria-label="Default select example"
                      className="w-normal fs-12 d-block"
                    >
                      <option>Eng</option>
                      <option value="1">Eng</option>
                      <option value="2">Aus</option>
                      <option value="3">Ind</option>
                    </Form.Select>
                  </div>
                  <div className="usd d-flex align-items-center">
                    <Form.Select
                      size="xs"
                      aria-label="Default select example"
                      className="w-normal fs-12 d-block"
                    >
                      <option>USD</option>
                      <option value="1">Eng</option>
                      <option value="2">EUR</option>
                      <option value="3">GBR</option>
                    </Form.Select>
                  </div>
                  <div className="vr"></div>
                  <div className="account d-flex align-items-center">
                    <span className="fw-normal fs-12">Sign In / Sign Up</span>
                  </div>
                </div>
              </CstmCol>
            </CstmRow>
          </CstmContainer>
        </div>
        <CstmContainer>
          <CstmRow className="middel align-items-center justify-content-between">
            <CstmCol md={3} className="d-none d-md-block">
              <div className="logo">
                <Navbar.Brand href="#home">
                  <Logo />
                </Navbar.Brand>
              </div>
            </CstmCol>
            <CstmCol md={5} sm={9} xs={7}>
              <div className="search">
                {(isSearchOpen || window.innerWidth > 992) && (
                  <CstmInputGroup
                    type="search"
                    placeholder="Search"
                    variant="primary"
                    className="fs-6"
                    btnText="search"
                  />
                )}
                <i
                  className="search-icon position-absolute top-50 translate-middle-y"
                  onClick={searchToggle}
                >
                  <FiSearch />
                </i>
              </div>
            </CstmCol>
            <CstmCol md={3} sm={3} xs={3}>
              <div className="social d-flex justify-content-end">
                <i>
                  <CiHeart />
                </i>
                <div className="vr"></div>
                <div className="cart d-flex align-items-center ms-1 ms-md-2">
                  <CstmButton
                    variant="transperant"
                    className="cart-icon p-0"
                    onClick={handleShow}
                  >
                    <SlHandbag />
                    <div className="number">2</div>
                  </CstmButton>
                  <Offcanvas {...props} show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton className="p-0">
                      <Offcanvas.Title className="text-secondary fw-500">
                        Shopping Card (2)
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="p-0">
                      <div className="cart-box">
                        <ul className="cart-list ps-0 mb-0">
                          {CartItemsData.map((data, index) => (
                            <div key={index}>
                              <CartItems
                                src={data.src}
                                alt={data.alt}
                                text={data.text}
                                quantity={data.quantity}
                                amount={data.amount}
                                icon={data.icon}
                              />
                            </div>
                          ))}
                        </ul>
                      </div>
                    </Offcanvas.Body>
                    <div className="offcanvas-footer">
                      <div className="cart-footer mb-0">
                        <p className="cart-total lh-24 mb-4 d-flex align-items-center justify-content-between">
                          <strong className="fs-6 lh-24 fw-normal text-secondary">
                            2 Product
                          </strong>
                          <span className="fs-6 align-top text-primary">
                            $26.00
                          </span>
                        </p>
                        <div className="text-center">
                          <CstmButton
                            variant="primary"
                            className="text-white rounded-0 fs-6 p-3 text-capitalize d-block w-100 rounded-pill"
                          >
                            Checkout
                          </CstmButton>
                          <CstmButton
                            variant=" "
                            className="go-to-cart text-primary rounded-0 fs-6 p-3 text-capitalize d-block w-100 rounded-pill"
                          >
                            Go To Cart
                          </CstmButton>
                        </div>
                      </div>
                    </div>
                  </Offcanvas>
                  <div className="info d-none d-lg-block">
                    <p className="fw-normal text-secondary-700">
                      Shopping cart:
                    </p>
                    <span className="fs-14 fs-500 text-secondary">$57.00</span>
                  </div>
                </div>
              </div>
            </CstmCol>
          </CstmRow>
        </CstmContainer>
      </div>
      <Navbar
        expand="lg"
        className="z-1"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <CstmContainer>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="order-2 order-lg-1 p-0"
          >
            <Nav className="me-auto">
              <ScrollLink
                href="/"
                onClick={handleNavLinkClick}
                activeClass="active"
                className="home position-relative"
                to="home"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
              >
                Home <RxChevronDown />
              </ScrollLink>
              <ScrollLink
                href="/Shop"
                onClick={handleNavLinkClick}
                activeClass="active"
                className="shop"
                to="shop"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
              >
                Shop <RxChevronDown />
              </ScrollLink>
              <ScrollLink
                href="/Pages"
                onClick={handleNavLinkClick}
                activeClass="active"
                className="pages"
                to="pages"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
              >
                Pages <RxChevronDown />
              </ScrollLink>
              <ScrollLink
                href="/Blog"
                onClick={handleNavLinkClick}
                activeClass="active"
                className="blog"
                to="blog"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
              >
                Blog <RxChevronDown />
              </ScrollLink>
              <ScrollLink
                href="/About"
                onClick={handleNavLinkClick}
                activeClass="active"
                className="about"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
              >
                About Us <RxChevronDown />
              </ScrollLink>
              <ScrollLink
                href="/Contact"
                onClick={handleNavLinkClick}
                activeClass="active"
                className="contact me-0"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
              >
                Contact Us
              </ScrollLink>
            </Nav>
          </Navbar.Collapse>
          <div className="logo d-block d-lg-none">
            <a href="#home">
              <Logo text="white" />{" "}
            </a>
          </div>
          <div className="d-flex order-1 align-items-center">
            <div className="call-now">
              <i className="call-icon fs-5 text-white" onClick={callToggle}>
                <BiSolidPhoneCall />
              </i>
              {(isCallOpen || window.innerWidth > 992) && (
                <span className="fs-14 ms-2 text-white">(219) 555-0114</span>
              )}
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 text-white"
              onClick={handleToggle}
            >
              {isIconChange ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Navbar.Toggle>
          </div>
        </CstmContainer>
      </Navbar>
    </header>
  );
};
export default Header;
function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Header key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
render(<Example />);
