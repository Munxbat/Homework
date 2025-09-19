import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import hero1 from '../../images/slider/left-img.jpg'
import hero2 from '../../images/slider/video.jpg'


const Hero2 = () => {
    return (
        <section className="wpo-static-hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-5">
                        <div className="slide-content">
                            <div className="slide-title">
                                <h2>We <span>Build</span> Your Dream With Passion</h2>
                            </div>
                            <div className="slide-text">
                                <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                    adipiscing integer in lacus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-6">
                        <a href="tel:+(+852) 569 325 023">
                            <div className="hero-contact">
                                <div className="icon">
                                    <i className="fi flaticon-telephone"></i>
                                </div>
                                <div className="contact-text">
                                    <span>Call Now</span>
                                    <h4>(+852) 569 325 023</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-left-img">
                <img src={hero1} alt="" />
            </div>
            <div className="hero-video-wrap">
                <ul>
                    <li className="video-holder">
                        <img src={hero2} alt="" />
                            <VideoModal />
                    </li>
                    <li className="video-text">
                        Watch Our Work
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hero2;



