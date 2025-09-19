import React from 'react';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero6 = (props) => {
    return (
        <section className="static-hero-s2">
            <div className="wpo-line-animated">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>To <span>industry</span>, nothing is impossible.</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor
                                                amet
                                                adipiscing integer in lacus.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <ul>
                                                <li>
                                                    <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero6;