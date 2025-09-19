import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero5 from '../../images/slider/slide-8.jpg'
import hero6 from '../../images/slider/slide-9.jpg'
import hero7 from '../../images/slider/slide-10.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const Hero4 = () => {
    return (
        <section className="wpo-box-style">
            <div className="wpo-hero-slider wpo-hero-slider-s3">
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
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})` }}>
                            <div className="container-fluid">
                                <div className="slide-content">
                                    <div className="slide-title">
                                        <h2>We <span>Build</span> Your Dream With Passion</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                            adipiscing integer in lacus.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                            </li>
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
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero6})` }}>
                            <div className="container-fluid">
                                <div className="slide-content">
                                    <div className="slide-title">
                                        <h2>We <span>Build</span> Your Dream With Passion</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                            adipiscing integer in lacus.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                            </li>
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
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero7})` }}>
                            <div className="container-fluid">
                                <div className="slide-content">
                                    <div className="slide-title">
                                        <h2>We <span>Build</span> Your Dream With Passion</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>Consectetur adipiscing elit. Sapien aliquam ut nunc at. Eget tempor amet
                                            adipiscing integer in lacus.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Get a Free Quote</Link>
                                            </li>
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
            </div>
        </section >
    );
};

export default Hero4;