import React from 'react';
import { Link } from 'react-router-dom';

import Ab2 from '../../images/about.jpg'
import Ab3 from '../../images/about2.jpg'
import Ab4 from '../../images/about3.jpg'

const aboutS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-wrap">
                                <div className="wpo-about-img-l">
                                    <img src={Ab2} alt="" />
                                </div>
                                <div className="wpo-about-img-r">
                                    <img src={Ab4} alt="" />
                                        <div className="wpo-about-item">
                                            <div className="wpo-about-top">
                                                <div className="wpo-about-thumb-img">
                                                <img src={Ab3} alt="" />
                                                </div>
                                                <div className="wpo-about-info">
                                                    <div className="wpo-about-info-text">
                                                        <h2>Altantsetseg.A</h2>
                                                        <span>CEO of Optimize inc</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpo-about-content">
                                              <p>"We will work hard to provide our customers with satisfactory, fast, and reliable service."</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span className="sub">About Us</span>
                                <h2>EXECUTIVE<span>&nbsp;DIRECTOR'S&nbsp;</span> GREETINGS</h2>
                            </div>
                            <h5>We wish you a pleasant visit to our company website. Since its establishment, "Optimize Inc" LLC has been constantly expanding its activities in the fields of business consulting services, mining equipment supply, foreign trade, and transport and logistics.</h5>
                            <p>As a way of expressing our gratitude to our customers who use the products and services offered by "Optimize Inc" LLC and grow together through mutually beneficial partnerships, our company warmly welcomes new customers and invites them to cooperate with us within the framework of our goal of "Build More Together"...</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn" >Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutS2;
