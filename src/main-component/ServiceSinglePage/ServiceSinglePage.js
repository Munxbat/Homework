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

const ServiceSinglePage = (props) => {


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
Our consulting service is designed to provide mining and industrial companies with strategic guidance, reliable solutions, and expert support. With years of experience in the supply of drilling bits, spare parts, and international trade, we help our clients optimize operations, reduce costs, and achieve sustainable growth.
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
                                        <li>Provide tailored consulting for mining equipment and spare parts procurement. </li>

                                        <li>Develop strategies to optimize supply chain and reduce operational risks.</li>

                                        <li>Facilitate international trade and logistics solutions for efficient delivery.</li>

                                        <li>Offer technical insights for equipment performance improvement.</li>

                                        <li>Deliver financial and market analysis for smarter investment decisions.</li></ul>

                                </div>
                               
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                        <p>We work closely with our clients to understand their specific needs and operational challenges. From equipment selection to logistics planning, our approach is practical, data-driven, and focused on creating measurable results. By combining local knowledge with global expertise, we ensure our clients stay competitive in a demanding industry.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Assess client requirements and operational environment.</li>
                                        <li>Identify cost-effective solutions and reliable suppliers..</li>
                                        <li>Provide tailored recommendations for mining tools and spare parts.</li>
                                        <li>Support contract negotiations and trade processes.</li>
                                        <li>Monitor performance and deliver continuous improvement strategies.</li>
                                    </ul>
                                </div>
                              
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0, 5).map((serv, item) => (
                                                <div className="col-lg-4 col-md-4 col-12" key={item}>
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

            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;



