import React from 'react';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const HeaderTop = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-6 col-lg-7 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call-1"></i>(00) 0431 275 490</li>
                                <li><i className="fi flaticon-email-1"></i>support24@gmail.com</li>
                                <li><i className="fi flaticon-location"></i> Roberts Avenue, Chattanooga.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-6 col-lg-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul className="social">
                                <li><i className="fi flaticon-calendar"></i> Monday-Saturday 09:00 - 18:00</li>
                                <li className="social-site">
                                    <ul>
                                        <li>Follow Us :</li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-google"></i></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;