import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Services from '../../api/Services'
/* image */
import Img1 from '../../images/instragram/1.jpg'
import Img2 from '../../images/instragram/2.jpg'
import Img3 from '../../images/instragram/3.jpg'
import Img4 from '../../images/instragram/4.jpg'
import Img5 from '../../images/instragram/5.jpg'
import Img6 from '../../images/instragram/6.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {


    return (
        <footer className={'' + props.hclass}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className="logo" to="/"><img src={logo} alt="" /></Link>
                                </div>
                                <p>
                                    We will work hard to provide our customers with satisfactory, fast, and reliable service.
                                </p>
                                <ul>
                                    <li><Link onClick={ClickHandler} to='#' ><i className="ti-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to='#' ><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to='#' > <i className="ti-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to='#' ><i className="ti-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((item, index) => (
                                        <li key={index}>
                                            <Link onClick={ClickHandler} to={`/service-single/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Products</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 3).map((item, index) => (
                                        <li key={index}>
                                            <Link onClick={ClickHandler} to={`/service-single/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>Shar tohoi, 34-district BZD <br /> Ulaanbaatar, Mongolia</li>
                                        <li><i className="fi flaticon-telephone"></i>+ (976) 9811-7676</li>
                                        <li><i className="fi flaticon-email"></i>info@optimize-inc.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <ul>
                                <li>&copy; 2025 Optimize Inc LLC. All Rights Reserved.</li>
                                {/* <li><Link onClick={ClickHandler} to='#' >Terms of use |</Link> <Link onClick={ClickHandler} to='#' >Privacy Environmental Policy</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;









