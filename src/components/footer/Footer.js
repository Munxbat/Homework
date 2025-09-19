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
                                    Blandit ipsum arcu donec auctor a, turpis vitae.
                                    Egestas pretium euenim non euoeu dignissim nulla nunc quisque
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
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>68D, Belsion Town 2365 <br /> Fna city, LH 3656, USA</li>
                                        <li><i className="fi flaticon-telephone"></i>+ 8 (123) 123 456 789 <br />
                                            + 8 (123) 123 456 789</li>
                                        <li><i className="fi flaticon-email"></i>indudus@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Our Gellery</h3>
                                </div>
                                <ul className="d-flex">
                                    <li><img src={Img1} alt="" /></li>
                                    <li><img src={Img2} alt="" /></li>
                                    <li><img src={Img3} alt="" /></li>
                                    <li><img src={Img4} alt="" /></li>
                                    <li><img src={Img5} alt="" /></li>
                                    <li><img src={Img6} alt="" /></li>
                                </ul>
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
                                <li>&copy; 2023 Indudus Template. Design By <Link to="/">wpOceans</Link>. All Rights Reserved.</li>
                                <li><Link onClick={ClickHandler} to='#' >Terms of use |</Link> <Link onClick={ClickHandler} to='#' >Privacy Environmental Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;









