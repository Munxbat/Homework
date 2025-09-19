import React from "react";
import VideoModal from "../ModalVideo/VideoModal";
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'
import hero3 from '../../images/slider/slide-5.jpg'
import hero4 from '../../images/slider/slide-7.jpg'
import hero5 from '../../images/slider/slide-4.jpg'
import Ab2 from '../../images/about2.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero3 = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
                pagination={true} 
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div  className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div  className="slide-btns">
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
                                        <li className="video-holder">
                                            <VideoModal />
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div  className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div  className="slide-btns">
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
                                        <li className="video-holder">
                                            <VideoModal />
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div  className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div  className="slide-btns">
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
                                        <li className="video-holder">
                                            <VideoModal />
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
             

                ...
            </Swiper>

            <div className="wpo-about-item">
                <div className="wpo-about-top">
                    <div className="wpo-about-thumb-img">
                        <img src={Ab2} alt="" />
                    </div>
                    <div className="wpo-about-info">
                        <div className="wpo-about-info-text">
                            <h2>Jenny Wilson</h2>
                            <span>CEO of BudyBay</span>
                        </div>
                        <div className="wpo-about-info-ratting">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wpo-about-content">
                    <p>“Consectetur adipiscing elited quam quis aliquam putate duisquis. Molestie ma
                        facilisis peltesque.”</p>
                </div>
            </div>
        </section>
    )
}

export default Hero3;