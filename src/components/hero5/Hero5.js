import React from "react";
import VideoModal from "../ModalVideo/VideoModal";
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'
import hero11 from '../../images/slider/slide-11.jpg'
import hero12 from '../../images/slider/slide-12.jpg'
import hero13 from '../../images/slider/slide-13.jpg'


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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero11})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero12})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero13})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                        adipiscing integer in lacus.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                ...
            </Swiper>

        </section>
    )
}

export default Hero3;