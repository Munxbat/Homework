import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from './../../images/logo.svg'
import { connect } from "react-redux"
import { removeFromCart } from "../../store/actions/action"
import { RiRobot2Line } from "react-icons/ri"
import ChatBot from "../ChatWidget/OpenAI"
import ChatBotMiniCart from '../ChatWidget/ChatBotMiniCart'

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);
    const [lang, setLang] = useState("mn"); // default: монгол

    // ⬇️ Chat болон Order-тэй холбоотой state-ууд
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState("chat"); // "chat" эсвэл "order"
    const [input, setInput] = useState("");
    const [order, setOrder] = useState({
        name: "",
        email: "",
        phone: "",
        quantity: 1,
    });

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

    // Chat илгээх функц
    const handleSend = () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, `You: ${input}`]);
        setInput("");
        // Жишээ: AI chatbot-н хариу
        setTimeout(() => {
            setMessages((prev) => [...prev, "🤖: Таны асуулт хүлээн авлаа"]);
        }, 500);
    };

    // Захиалга илгээх функц
    const handleOrderSubmit = () => {
        console.log("Order Submitted:", order);
        setMessages((prev) => [...prev, `✅ Захиалга амжилттай илгээгдлээ (${order.quantity}ш)`]);
        setStep("chat"); // буцаад чат руу оруулах
        setOrder({ name: "", email: "", phone: "", quantity: 1 });
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
                                                <li><Link onClick={ClickHandler} to="/MiningEquipment">Mining equipment</Link></li>
                                                <li><Link onClick={ClickHandler} to="/MiningDrills">Mining Drills</Link></li>
                                                <li><Link onClick={ClickHandler} to="/HeavyTires">Heavy Tires</Link></li>
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

                                {/* Mini Cart / AI Robot */}
                                <div className="mini-cart">
                                    <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                        <RiRobot2Line size={24} />
                                        <span className="cart-count">{carts.length}</span>
                                    </button>

                                    <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                        <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}>
                                            <i className="ti-close"></i>
                                        </button>

                                        {/* Chat messages display */}
                                        <div className="mini-cart-items overflow-y-auto h-64 p-2">
                                            {messages.map((m, i) => (
                                                <div key={i} className="mb-1 text-sm">{m}</div>
                                            ))}
                                        </div>

                                        {/* Chat / Order input area */}
                                            <div className="header-right">
                                            <ChatBot carts={carts} />
                                            <ChatBotMiniCart carts={carts} />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
