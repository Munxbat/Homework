import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sImg1 from '../../images/testimonial/img-1.jpg'
import sImg2 from '../../images/testimonial/img-2.jpg'
import sImg3 from '../../images/testimonial/img-2.jpg'



const testimonials = [
    {
        id: '01',
        img: sImg1,
        Des: "Phasellus commodo amet, egestas sed pellentesque nisi, urna, blandit magna. Velit quis dolor tincidunt sed sit sed ultricies odio. Fames posuere libero dictumst tincidunt at nunc, est pulvinar dolor bibendum feugiat .",
        title: 'Leslie Alexander',
        sub: "MD of Alex Group of Industries",
    },
    {
        id: '02',
        img: sImg2,
        Des: "Phasellus commodo amet, egestas sed pellentesque nisi, urna, blandit magna. Velit quis dolor tincidunt sed sit sed ultricies odio. Fames posuere libero dictumst tincidunt at nunc, est pulvinar dolor bibendum feugiat .",
        title: 'Jenefer Haiway',
        sub: "CEO of Mendara Offece",
    },
    {
        id: '03',
        img: sImg3,
        Des: "Phasellus commodo amet, egestas sed pellentesque nisi, urna, blandit magna. Velit quis dolor tincidunt sed sit sed ultricies odio. Fames posuere libero dictumst tincidunt at nunc, est pulvinar dolor bibendum feugiat .",
        title: 'Jenefer Haiway',
        sub: "CEO of Mendara Offece",
    },





]




const Testimonial = (props) => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: true,
            }
        }

        ]
    };


    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-testimonial-wrap">
                            <Slider {...settings} className='testimonial-slider'>
                                {testimonials.map((testimonial, item) => (
                                    <div className="wpo-testimonial-item" key={item}>
                                        <div className="wpo-testimonial-top" >
                                            <div className="wpo-testimonial-img">
                                                <img src={testimonial.img} alt="" />
                                            </div>
                                            <div className="wpo-testimonial-info">
                                                <h2>{testimonial.title}</h2>
                                                <span>{testimonial.sub}</span>
                                            </div>
                                        </div>
                                        <div className="wpo-testimonial-content">
                                            <p>{testimonial.Des}</p>
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






