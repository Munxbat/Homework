import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact2 from '../../components/FunFact2/FunFact2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg'
import Ab from '../../images/about.jpg'

const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About hclass={'wpo-about-area section-padding'} Ab={Ab} />
            <ServiceSection hclass={"wpo-service-area"} ServiceBtn={true} />
            <FunFact2 />
            <TeamSection hclass={'wpo-team-section section-padding'} SectionTitleShow={true} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar /> 
        </Fragment>
    )
};
export default AboutPage;
