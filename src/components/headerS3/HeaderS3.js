import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from './../../images/logo.svg';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';
import { RiRobot2Line } from 'react-icons/ri';
import ChatBot from '../ChatWidget/OpenAI';

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setCartState] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState('chat');
  const [input, setInput] = useState('');
  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
  });
  const navigate = useNavigate();

  const toggleLang = () => {
    const newLang = i18n.language === 'mn' ? 'en' : 'mn';
    i18n.changeLanguage(newLang);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMenuState(false);
    }
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `You: ${input}`]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, `🤖: ${t('chat_response')}`]);
    }, 500);
  };

  const handleOrderSubmit = () => {
    console.log('Order Submitted:', order);
    setMessages((prev) => [...prev, t('order_success', { count: order.quantity })]);
    setStep('chat');
    setOrder({ name: '', email: '', phone: '', quantity: 1 });
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
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li><Link to="/home">{t('home')}</Link></li>
                    <li><Link onClick={ClickHandler} to="/about">{t('about')}</Link></li>
                    <li className="menu-item-has-children">
                      <Link to="/service">{t('service')}</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/service-single/consulting-services">
                            {t('consulting_services')}
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/service-single/international-trading">
                            {t('international_trading')}
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/service-single/transportation-logistics">
                            {t('transportation_logistics')}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/productgrouppage">{t('products')}</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/products/Mining%20Equipment">{t('mining_equipments')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/products/Drilling%20Bit">{t('drilling_bits')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/products/Heavy%20Tires">{t('heavy_tires')}</Link></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="#">{t('pages')}</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/shop">{t('shop')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/shop-single/Fresh-key-Lime">{t('shop_single')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/cart">{t('cart')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/checkout">{t('checkout')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/pricing">{t('pricing')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/team-single/Esther-Howard">{t('team_single')}</Link></li>
                        <li><Link onClick={ClickHandler} to="/404">{t('error_404')}</Link></li>
                      </ul>
                    </li>
                    <li><Link onClick={ClickHandler} to="/contact">{t('contact')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-2">
              <div className="header-right">
                {/* Search */}
                <div className="header-search-form-wrapper" style={{ borderRight: '1px solid #dddddd41', marginRight: '10px', paddingRight: '10px' }}>
                  <div className="cart-search-contact">
                    <button
                      onClick={() => setMenuState(!menuActive)}
                      className="search-toggle-btn"
                    >
                      <i className={`fi ti-search ${menuActive ? 'ti-close' : 'fi'}`}></i>
                    </button>
                    <div className={`header-search-form ${menuActive ? 'header-search-content-toggle' : ''}`}>
                      <form onSubmit={SubmitHandler}>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={t('search_placeholder')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <button type="submit">
                            <i className="fi ti-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Language Switch */}
                <div className="header-search-form-wrapper" style={{ borderRight: '1px solid #dddddd41', marginRight: '10px', paddingRight: '10px' }}>
                  <button
                    onClick={toggleLang}
                    className="search-toggle-btn" // Хуучин search UI-г ашиглана
                  >
                    {i18n.language === 'mn' ? 'EN' : 'MN'}
                  </button>
                </div>

                {/* Mini Cart / AI Robot */}
                {/* <div className="mini-cart">
                  <button
                    className="cart-toggle-btn"
                    onClick={() => setCartState(!cartActive)}
                    style={{
                      background: '#f5f5f5',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                    onMouseOut={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                  >
                    <RiRobot2Line size={24} />
                    <span className="cart-count">{carts.length}</span>
                  </button>
                  <div className={`mini-cart-content ${cartActive ? 'mini-cart-content-toggle' : ''}`}>
                    <button className="mini-cart-close" onClick={() => setCartState(!cartActive)}>
                      <i className="ti-close"></i>
                    </button>
                    <div className="mini-cart-items overflow-y-auto h-64 p-2">
                      {messages.map((m, i) => (
                        <div key={i} className="mb-1 text-sm">{m}</div>
                      ))}
                    </div>
                    <div className="header-right">
                      <ChatBot carts={carts} />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);