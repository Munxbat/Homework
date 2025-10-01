import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Services from '../../api/Services';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';
import Simag1 from '../../images/service-single/img1.jpg';
import Simag2 from '../../images/service-single/img2.jpg';
import ContactForm from '../../components/ServiceContact/ServiceContact';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
import Ticker from '../../components/Metal/Ticker';

const ServiceSinglePage = (props) => {
    const { t } = useTranslation();
    const { slug } = useParams();
    const serviceDetails = Services.find((item) => item.slug === slug);

    // Log for debugging
    console.log('Services:', Services);
    console.log('Slug:', slug);
    console.log('serviceDetails:', serviceDetails);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Animation variants for Framer Motion
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Handle case where serviceDetails is undefined
    if (!serviceDetails) {
        return (
            <Fragment>
                <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
                <PageTitle
                    pageTitle={t('section.service_single.error_title', 'Service Not Found')}
                    pagesub={t('section.service_single.pagesub', 'Service Single')}
                />
                <div className="bg-gray-100 min-h-screen py-12">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {t('section.service_single.error_title', 'Service Not Found')}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {t('section.service_single.error_message', 'The requested service could not be found.')}
                            </p>
                            <Link
                                to="/"
                                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                onClick={ClickHandler}
                            >
                                {t('section.service_single.back_home', 'Back to Home')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <Footer hclass={'wpo-site-footer'} />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle
                pageTitle={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
                pagesub={t('section.service_single.pagesub', 'Service Single')}
            />
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="lg:w-2/3 w-full"
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                {/* Main Image */}
                                <div className="mb-6">
                                    <img
                                        src={serviceDetails.simag}
                                        alt={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
                                        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                {/* Title */}
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    {t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
                                </h2>
                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {t(`section.service_single.${serviceDetails.key}.description`, serviceDetails.key)}
                                </p>
                                {/* Image Gallery */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <img
                                            src={Simag1}
                                            alt={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
                                            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={Simag2}
                                            alt={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
                                            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                {/* Capabilities */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {t('section.service_single.capabilities_title', 'Our Capabilities')}
                                    </h3>
                                    <ul className="list-disc pl-5 text-gray-600">
                                        {t(`section.service_single.${serviceDetails.key}.capabilities`, { returnObjects: true }).map(
                                            (item, index) => (
                                                <li key={index} className="mb-2">{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                {/* Approach */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {t('section.service_single.approach_title', 'Our Approach')}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t(`section.service_single.${serviceDetails.key}.approach`, serviceDetails.key)}
                                    </p>
                                </div>
                                {/* Work Process */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {t('section.service_single.work_process_title', 'Our Work Process')}
                                    </h3>
                                    <ul className="list-disc pl-5 text-gray-600">
                                        {t(`section.service_single.${serviceDetails.key}.work_process`, { returnObjects: true }).map(
                                            (item, index) => (
                                                <li key={index} className="mb-2">{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                {/* Related Services */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {t('section.service_single.related_service_title', 'Related Services')}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {Services.filter((serv) => serv.slug !== slug)
                                            .slice(0, 3)
                                            .map((serv, item) => (
                                                <motion.div
                                                    key={item}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={fadeIn}
                                                    className="bg-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                                                >
                                                    <img
                                                        src={serv.image}
                                                        alt={t(`services.${serv.key}.title`, serv.key)}
                                                        className="w-full h-32 object-cover rounded-lg mb-3"
                                                    />
                                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                        <Link
                                                            to={`/service-single/${serv.slug}`}
                                                            onClick={ClickHandler}
                                                            className="hover:text-blue-600 transition-colors duration-300"
                                                        >
                                                            {t(`services.${serv.key}.title`, serv.key)}
                                                        </Link>
                                                    </h4>
                                                    <p className="text-gray-600 text-sm">
                                                        {t(`services.${serv.key}.description`, serv.key)}
                                                    </p>
                                                </motion.div>
                                            ))}
                                    </div>
                                </div>
                                {/* Contact Section */}
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {t('section.service_single.contact_title', "Have project in mind? Let's discuss")}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {t('section.service_single.contact_subtitle', 'Get in touch with us to see how we can help you with your project')}
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                        </motion.div>
                        {/* Sidebar */}
                        <div className="lg:w-1/3 w-full">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
            <ChatBot />
            <Ticker />
        </Fragment>
    );
};

export default ServiceSinglePage;