import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pimg1 from '../../images/partners/img-1.png';
import Pimg2 from '../../images/partners/img-2.png';
import Pimg3 from '../../images/partners/img-3.png';
import Pimg4 from '../../images/partners/img-4.png';
import Pimg5 from '../../images/partners/img-5.png';
import Pimg6 from '../../images/partners/img-6.png';

const PartnersSection = (props) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <section className="partners-section">
            <h2 className="hidden">Partners</h2>
            <div className="container">
                <div className="row align-items-center">
                 
                    <div className={"" +props.CollClass}>
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                <div className="grid">
                                    <img src={Pimg1} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg2} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg3} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg4} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg5} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg6} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg2} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg3} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;