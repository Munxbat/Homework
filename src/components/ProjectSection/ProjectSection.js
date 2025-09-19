import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../api/projects';
import SectionTitle from '../SectionTitle/SectionTitle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { SectionTitleShow = false } = props

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        centerPadding: "0",
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
        ]
    };


    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                {SectionTitleShow && (
                    <SectionTitle subtitle={'Recent Project'} title={'Projects for'} titleColor={'Inspirations'} />
                )}
                <div className="row">
                    <Slider {...settings} className='wpo-project-wrap '>
                        {Projects.slice(0, 5).map((project, index) => (
                            <div className="wpo-project-item" key={index}>
                                <div className="wpo-project-img">
                                    <img src={project.pimg} alt="" />
                                    <div className="thumb">
                                        <h4>{project.id}</h4>
                                    </div>
                                </div>
                                <div className="wpo-project-text">
                                    <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                    <span>{project.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;