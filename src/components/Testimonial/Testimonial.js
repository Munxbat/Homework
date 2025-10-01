import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

import sImg1 from '../../images/testimonial/img-1.jpg';
import sImg2 from '../../images/testimonial/img-2.jpg';
import sImg3 from '../../images/testimonial/img-2.jpg'; // Assuming a different image for id "03"

const imgMap = {
    "01": sImg1,
    "02": sImg2,
    "03": sImg3, // Updated to use a different image
};

const Testimonial = (props) => {
    const { t } = useTranslation();
    const testimonials = t("testimonials", { returnObjects: true });

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <section className={props.hclass || 'wpo-testimonial-section'}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-testimonial-wrap">
                            <Slider {...settings} className='testimonial-slider'>
                                {testimonials.map((testimonial) => (
                                    <div className="wpo-testimonial-item" key={testimonial.id}>
                                        <div className="wpo-testimonial-top">
                                            <div className="wpo-testimonial-img">
                                                <img 
                                                    src={imgMap[testimonial.id] || sImg1} // Fallback image
                                                    alt={testimonial.title || 'Testimonial'} 
                                                />
                                            </div>
                                            <div className="wpo-testimonial-info">
                                                <h2>{testimonial.title}</h2> {/* Removed t() */}
                                                <span>{testimonial.sub}</span> {/* Removed t() */}
                                            </div>
                                        </div>
                                        <div className="wpo-testimonial-content">
                                            <p>{testimonial.des}</p> {/* Removed t() */}
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;