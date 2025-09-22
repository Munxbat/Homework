import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from './../../images/logo.svg'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { RiRobot2Line } from "react-icons/ri";

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);
    const [lang, setLang] = useState("mn"); // default: монгол

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("search submitted");
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const toggleLang = () => {
        setLang((prev) => (prev === "mn" ? "en" : "mn"));
    };

    const { carts } = props;

    return (
        <header id="header" className={props.hclass}>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                            <MobileMenu />
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="navbar-header">
                                <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-1 col-1">
                            <div className="navbar-wrap">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link to="/service">Service</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/service-single/Consulting-Services">Consulting Services</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/International-Trading">International Trading</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Transportation-Logistics">Transportation & Logistics</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="#">Products</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/project">Mining equipment</Link></li>
                                                <li><Link onClick={ClickHandler} to="#">Mining Drills</Link></li>
                                                <li><Link onClick={ClickHandler} to="#">Heavy Tires</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop-single/Fresh-key-Lime">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/Esther-Howard">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* --- Search / Lang / Cart Section --- */}
                        <div className="col-lg-2 col-md-2 col-2">
                            <div className="header-right">

                                {/* Search */}
                                <div className="header-search-form-wrapper" style={{ borderRight: "1px solid #ddd", marginRight: "10px", paddingRight: "10px" }}>
                                    <div className="cart-search-contact">
                                        <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn">
                                            <i className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i>
                                        </button>
                                        <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                            <form onSubmit={SubmitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search here..." />
                                                    <button type="submit"><i className="fi ti-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* Language Switch */}
                                <div className="language-switch" style={{ borderRight: "1px solid #ddd", marginRight: "10px", paddingRight: "10px" }}>
                                    <button onClick={toggleLang} className="lang-btn">
                                        {lang === "mn" ? "EN" : "MN"}
                                    </button>
                                </div>

                                {/* Mini Cart / Robot */}
                                <div className="mini-cart">
                                    <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                        <RiRobot2Line size={24} />
                                        <span className="cart-count">{carts.length}</span>
                                    </button>

                                    <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                        <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}>
                                            <i className="ti-close"></i>
                                        </button>

                                        <div className="mini-cart-items">
                                            {carts && carts.length > 0 && carts.map((catItem, crt) => (
                                                <div className="mini-cart-item clearfix" key={crt}>
                                                    <div className="mini-cart-item-image">
                                                        <span>
                                                            <img src={catItem.proImg} alt="icon" />
                                                        </span>
                                                    </div>
                                                    <div className="mini-cart-item-des">
                                                        <p>{catItem.title}</p>
                                                        <span className="mini-cart-item-price">
                                                            ${catItem.price} x {catItem.qty}
                                                        </span>
                                                        <span className="mini-cart-item-quantity">
                                                            <button
                                                                onClick={() => props.removeFromCart(catItem.id)}
                                                                className="btn btn-sm btn-danger"
                                                            >
                                                                <i className="ti-close"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mini-cart-action clearfix">
                                            <p>Hello, what can I help you?</p>
                                            <input type="text" className="form-control" placeholder="Type here..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* End Right Section */}

                    </div>
                </div>
            </nav>
        </header>
    )
};

// Redux → carts дамжуулах
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
