import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg'

const ServicePage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSection hclass={"wpo-service-area section-padding"} ServiceBtn={true} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
