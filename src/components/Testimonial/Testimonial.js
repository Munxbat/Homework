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
        Des: "Манай компани Optimize Inc-ийн өрмийн хошуу болон уул уурхайн сэлбэг хэрэгслийн нийлүүлэлтийг олон жил хэрэглэж байна. Тэдний чанартай бүтээгдэхүүн болон найдвартай үйлчилгээ нь манай төслүүдийн үр ашигтай, тасралтгүй үйл ажиллагаанд чухал хувь нэмэр оруулдаг.",
        title: 'Bat-Erdene T.',
        sub: "CEO, Erdenet Mining Corporation",
    },
    {
        id: '02',
        img: sImg2,
        Des: "Гадаад худалдаа болон сэлбэгийн нийлүүлэлт дээрх Optimize Inc-ийн хамтын ажиллагаа бидний хувьд өндөр ач холбогдолтой. Тэд олон улсын нийлүүлэгчидтэй шууд ажилладаг тул захиалга хурдан, найдвартай ирдэг нь онцлог.",
        title: 'Jenefer Haiway',
        sub: "Procurement Director, Caterpillar Mongolia LLC",
    },
    {
        id: '03',
        img: sImg3,
        Des: "Манай уурхайн өрмийн тоног төхөөрөмжийн засвар, сэлбэгийн хангалт дээр Optimize Inc тогтмол хамтран ажиллаж байна. Тэдний техникийн дэмжлэг болон уян хатан үйлчилгээ нь бидний төсөл, ажлын хэрэгцээнд бүрэн нийцдэг.",
        title: 'Ganbold Ch.',
        sub: "Operations Manager, Oyu Tolgoi LLC",
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






