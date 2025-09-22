import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Services from '../../api/Services';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg'
import Simag1 from '../../images/service-single/img1.jpg'
import Simag2 from '../../images/service-single/img2.jpg'
import ContactForm from '../../components/ServiceContact/ServiceContact';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';

const Transportation = (props) => {


    const { slug } = useParams()
    const serviceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service Single'} />

            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={serviceDetails.simag} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.title}</h3>
                                    </div>
                                    <p>
Our Transportation & Logistics service ensures the safe, reliable, and efficient movement of mining equipment, drilling tools, and spare parts across Mongolia and international markets. We provide tailored logistics solutions that meet the demanding requirements of the mining industry.                                    
                                </p>
                                <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={Simag1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={Simag2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <ul>
                                        <li>Nationwide transportation of heavy machinery, drilling equipment, and mining spare parts.</li>

                                        <li>International freight forwarding via air, sea, and land.</li>

                                        <li>Customs clearance and regulatory compliance support.</li>

                                        <li>Warehousing and distribution solutions for mining operations.</li>

                                        <li>End-to-end logistics management with real-time tracking.</li></ul>

                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                        <p>We understand that time and safety are critical in the mining industry. Our logistics solutions are designed to minimize delays, reduce costs, and ensure secure handling of valuable equipment. With a professional team and trusted partners, we deliver seamless coordination from supplier to mine site.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Assess client transportation and logistics requirements.</li>
                                        <li>Plan optimized routes and choose the most efficient transport method.</li>
                                        <li>Manage customs, permits, and documentation.</li>
                                        <li>Coordinate secure handling, loading, and delivery.</li>
                                        <li>Provide continuous monitoring and updates until successful delivery.</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0, 5).map((serv, item) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={item}>
                                                    <div className="wpo-service-item">
                                                        <i><img src={serv.image} alt="" /></i>
                                                        <h2>{serv.title} </h2>
                                                        <p>{serv.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <ContactForm />
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default Transportation;



