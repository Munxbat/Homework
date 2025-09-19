import React from "react";
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoModal from "../ModalVideo/VideoModal";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-3.jpg'
import hero3 from '../../images/slider/slide-2.jpg'

const HeroSlider = () => {
  
    return (
        <section className="wpo-hero-slider wpo-hero-slider-s1" >
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
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
                                <div  className="slide-btns">
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal/>
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
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
                                <div  className="slide-btns">
                                    <ul>
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
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
        </section>
    );
};

export default HeroSlider;






