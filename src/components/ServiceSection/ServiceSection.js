import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow = true, } = props

    return (
        <div className={"" + props.hclass}>
            <div className="container">
                {SectionTitleShow && (
                    <div className="row">
                        <SectionTitle subtitle={'Our Services'} title={'Best solutions here'} titleColor={'Services'} />
                    </div>
                )}
                <div className="row align-items-center">
                    {Services.slice(0, 6).map((service, item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item}>
                            <div className="wpo-service-item ">
                                <div className="icon">
                                    <i><img src={service.image} alt="" /></i>
                                </div>
                                <h2><Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>{service.title}</Link></h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default ServiceSection;


