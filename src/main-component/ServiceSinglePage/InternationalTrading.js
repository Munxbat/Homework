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

const InternationalTrading = (props) => {


    const { slug } = useParams()
    const serviceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service Single'} />

            <div className="wpo-service-single-area-s4 section-padding">
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
Our International Trading service connects local mining companies with global markets. We specialize in the import and export of drilling bits, mining spare parts, and industrial equipment, ensuring reliable access to high-quality products from trusted international suppliers.                                    </p>
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
                                        <li>Import and export of drilling tools, mining spare parts, and heavy equipment.</li>

                                        <li>Strong partnerships with global manufacturers and distributors.</li>

                                        <li>Streamlined customs clearance and compliance with international trade standards.</li>

                                        <li>Efficient logistics and transportation solutions for timely delivery.</li>

                                        <li>Competitive sourcing to minimize costs and maximize profitability.</li></ul>

                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                        <p>We believe that international trade should be seamless and transparent. Our team manages the full process — from supplier selection and procurement to shipping and customs clearance — ensuring that our clients receive their products on time and within budget. With a deep understanding of both local and global markets, we act as a trusted bridge between suppliers and mining companies.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Identify client requirements and match with trusted suppliers worldwide.</li>
                                        <li>Negotiate favorable terms to secure cost-effective deals.</li>
                                        <li>Handle import/export documentation and customs compliance.</li>
                                        <li>Organize international logistics and freight forwarding.    </li>
                                        <li>Deliver continuous support to guarantee successful long-term trade relations.</li>
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

            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default InternationalTrading;



